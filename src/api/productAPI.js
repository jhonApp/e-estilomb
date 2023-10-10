import axios from "axios";

const productApi = axios.create({ baseURL: "http://localhost:3000/Produtos/List" });

async function getProduct() {
  try {
    const response = await productApi.get('/');
    console.log('get Product:', JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
}

export { getProduct };
