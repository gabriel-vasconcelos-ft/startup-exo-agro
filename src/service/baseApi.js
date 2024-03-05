import axios from "axios";

const baseApi = axios.create({
	baseURL: "http://10.0.0.104:8080",
});

export default baseApi;
