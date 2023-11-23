import baseApi from ".";

export const todosCidadaos = async () => {
	try {
		const clientes = await baseApi.get('/clientes');
		return clientes.data;
	} catch (error) {
		console.error(error.message);
		return {
			code: 500,
			message: 'Erro ao buscar clientes',
		};
	}
};

