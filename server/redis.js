const redis = require('redis');

// Configuração da conexão Redis
const redisClient = redis.createClient({
  host: 'localhost', // Endereço do seu servidor Redis
  port: 6379 // Porta padrão do Redis
});

// Tratamento de erros do Redis
redisClient.on('error', function (err) {
  console.error('Erro ao conectar ao Redis:', err);
});

module.exports = redisClient;
