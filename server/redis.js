const redis = require('redis');

// Configuração da conexão Redis
const redisClient = redis.createClient({
  host: '127.0.0.1', // Endereço do seu servidor Redis
  port: 6379, // Porta padrão do Redis
});

// Tratamento de erros do Redis
redisClient.on('error', function (err) {
  console.error('Erro ao conectar ao Redis:', err);
});

redisClient.on('connect', function () {
  console.log('Conexão estabelecida com o Redis');
});

redisClient.connect().then(() => {
  console.log('Connected to Redis');
}).catch((err) => {
  console.log(err.message);
})
module.exports = redisClient;