import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://10.0.0.105:8080",
});

export default baseApi;
