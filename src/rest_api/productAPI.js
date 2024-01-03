import axios from "axios";

const productApi = axios.create({ baseURL: "http://localhost:3000/Produtos" });

async function getProduct() {
  try {
    const response = await productApi.get('/List');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
}

async function getProductByNome(value) {
  try {
    console.log(value);
    const response = await productApi.get(`/GetByNome?Nome=${value}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
}

export { getProduct, getProductByNome };
