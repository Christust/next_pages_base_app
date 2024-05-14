import axios from "axios";
import swal from "sweetalert";
import store from "../../store";
import { setLoaderCount } from "../../store/reducers/loader/loaderSlice";
import { setToken, setRefreshToken } from "@/store/reducers/user/userSlice";
import authService from "../factories/authService";
import { logOut } from "@/helpers/auth";

const instance = axios.create({
  baseURL: "http://moderatorem.pythonanywhere.com/",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = store.getState().user.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  store.dispatch(setLoaderCount(+1));
  return config;
});

instance.interceptors.response.use(
  (res) => {
    store.dispatch(setLoaderCount(-1));
    return res;
  },
  (error) => {
    store.dispatch(setLoaderCount(-1));
    const refreshToken = store.getState().user.refreshToken;
    const payload = { refresh: refreshToken };
    console.log(payload);
    console.log(error);
    if (error.response?.data?.code == "token_not_valid") {
      if (error.config.url !== "token/refresh/") {
        authService
          .refreshToken(payload)
          .then((res) => {
            console.log(res);
            store.dispatch(setToken(res.data.access));
            store.dispatch(setRefreshToken(res.data.refresh));
            window.location.reload(true);
          })
          .catch(() => {
            swal({
              text: "Token no valido",
              icon: "error",
            });
            logOut();
          });
      }
    } else {
      swal({
        text: "Error!",
        icon: "error",
      });
    }
    return error;
  }
);

export default instance;
