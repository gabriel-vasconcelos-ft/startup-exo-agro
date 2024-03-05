import api from './baseApi';

export const login = async (data) => {
  try {
    const response = await api.post('http://10.0.0.104:8080/login', data);
    return response;
  } catch (error) {
    console.log('Erro ao realizar login', error);
  }
}