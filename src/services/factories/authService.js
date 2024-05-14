import axios from "@/services/instance";

export default {
  login(payload) {
    return axios.post("login/", payload);
  },
  logout(payload) {
    return axios.post("logout/", payload);
  },
  refreshToken(payload) {
    return axios.post("token/refresh/", payload);
  },
};
