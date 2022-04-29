import axios from "./axios";
// import UserService from "../services/user.service.js";
class Request {
  about() {
    return axios.get("/pages/1");
  }
  wallets() {
    return axios.get("/ewallets");
  }
  markets() {
    return axios.get("/markets");
  }
  userData() {
    return axios.get("/auth/me");
  }
  countries() {
    return axios.get("/country");
  }
  languages() {
    return axios.get("/language");
  }
  averageIncome() {
    return axios.get("/average-income");
  }
  market(id) {
    return axios.get(`/markets/${id}`);
  }
}

export default new Request();
