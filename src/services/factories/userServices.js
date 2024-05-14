import axios from "@/services/instance";

export default {
  login(payload) {
    return axios.post("login/", payload);
  },
  getUsers() {
    return axios.get("users/");
  },
};
