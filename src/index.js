import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { fetchDataFromAPI   } from './api';


const initializeApp = async () => {
  try {
    const initialData = await fetchDataFromAPI();
    ReactDOM.render(
      <React.StrictMode>
        <App initialData={initialData} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } catch (error) {
    console.error('Erro ao inicializar o aplicativo:', error);
  }
};

initializeApp();
