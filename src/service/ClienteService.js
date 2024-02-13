import api from "./baseApi.js";

export const getAllClients = async () => {
	try {
		const response = await api.get("/client");
		return response.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: "Erro ao buscar clientes",
		};
	}
};

export const getClientById = async (clientId) => {
	try {
		const response = await api.get(`/client/${clientId}`);
		return response.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: "Erro ao buscar clientes",
		};
	}
};
