const redisClient = require('../redis');

async function Create(userId, userData, token) {
  try {
    const userKey = `user:${userId}`;
    
    // Criando um novo objeto contendo as informações do usuário e o token
    const userWithToken = {
      usuario: userData,
      token: token
    };

    await redisClient.set(userKey, JSON.stringify(userWithToken));
    // redisClient.expire(userKey, time);

    return true; // Indicativo de sucesso ao criar o usuário no Redis
  } catch (error) {
    console.error('Erro ao criar usuário no Redis:', error);
    throw error;
  }
}


module.exports = { Create };
