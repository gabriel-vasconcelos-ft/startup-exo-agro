import api from "./baseApi.js";

export const todosClientes = async () => {
  try {
    const clientes = await api.get("/clientes");
    return clientes.data;
  } catch (error) {
    console.error(error.message);
    return {
      code: 500,
      message: "Erro ao buscar clientes",
    };
  }
};

export const criarCliente = async (clienteData) => {
  try {
    const cliente = await api.post(
      "/cliente/cadastrar/tipo/cliente",
      clienteData
    );
    return cliente.data;
  } catch (error) {
    console.error(error.message);
    return {
      code: 500,
      message: "Erro ao criar cliente",
    };
  }
};
