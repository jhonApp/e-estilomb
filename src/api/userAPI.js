import axios from "axios";

const userApi = axios.create({ baseURL: "http://localhost:3000/Usuarios" });

async function createUser(userData) {
  try {
    const formattedDate = new Date().toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });

    const params = {
      PerfilID: 1,
      CPF: userData.cpf,
      Email: userData.email,
      Senha: userData.password,
      Nome: userData.name,
      IsAdmin: true,
      Celular: userData.phoneNumber,
      DataNascimento: "1990-01-01T00:00:00.000Z", // Formate a data conforme necessário
      ImageURL: "https://example.com/imagem.jpg",
      ResetSenhaChave: "chave123",
      ResetSenhaDataLimite: "2023-12-31T23:59:59.000Z", // Formate a data conforme necessário
      RegistradoEm: "1990-01-01T00:00:00.000Z",
      RegistradoPor: 1,
      AtualizadoEm: "1990-01-01T00:00:00.000Z",
      AtualizadoPor: 1
    };

    const response = await userApi.post('/Create', params);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function updateUser(userId, updatedUserData) {
  try {
    const response = await userApi.put(`/Update/${userId}`, updatedUserData);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function getUsers() {
  try {
    const response = await userApi.get('/');
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

function handleApiError(error) {
  if (error.response) {
    console.error('Erro de resposta da API:', error.response.data);
  } else if (error.request) {
    console.error('Erro ao aguardar resposta da API:', error.request);
  } else {
    console.error('Erro ao configurar requisição para a API:', error.message);
  }
}

export { createUser, updateUser, getUsers };
