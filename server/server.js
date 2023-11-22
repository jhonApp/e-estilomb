const express = require('express');
const database = require('./db');
const redisClient = require('./redis'); // Importe diretamente o cliente Redis

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

// Middleware para adicionar o cliente Redis aos objetos de solicitação
api.use((req, res, next) => {
  req.redisClient = redisClient; // Use diretamente o cliente Redis importado
  next();
});

api.use(allowCrossDomain); // Aplica o middleware de CORS
api.use(routes);

// Remova o trecho redisClient.connect()... pois o cliente já está pronto para uso ao ser importado do arquivo redis.js

database.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    api.listen(3000, () => {
      console.log('Servidor iniciado na porta 3000.');
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
