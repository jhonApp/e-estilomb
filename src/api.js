import { getProduct  } from './api/productAPI';

export const fetchDataFromAPI = async () => {
    try {
      const response = await getProduct();
      return response;
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      throw error;
    }
};
  