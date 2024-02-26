import axios from "axios";

const baseApi = axios.create({
	baseURL: "http://20.20.17.141:8080",
});

export default baseApi;
