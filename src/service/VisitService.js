import api from "./baseApi.js";

export const getAllVisits = async () => {
	try {
		const response = await api.get("/visit");
		return response.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: "Erro ao buscar visitas",
		};
	}
};

export const getVisitById = async (visitId) => {
	try {
		const response = await api.get(`/visit/${visitId}`);
		return response.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: "Erro ao buscar visita",
		};
	}
};
