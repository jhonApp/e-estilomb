const express = require('express');
const database = require('./db');
const routes = require('./routers/router');
const cors = require('cors');

const api = express();
api.use(express.json());


// Middleware para permitir solicitações CORS
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

api.use(allowCrossDomain); // Aplica o middleware de CORS
api.use(routes);

// Sincronize o banco de dados antes de iniciar o servidor
database.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    // Inicie o servidor Express após a sincronização do banco de dados
    api.listen(3000, () => {
      console.log('Servidor iniciado na porta 3000.');
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
