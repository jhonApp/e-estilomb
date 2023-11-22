const redisClient = require('../redis');

module.exports = {
  async Create(userId, userData) {
    console.log(userId);
    console.log(userData);
    try {
      await redisClient.set(`user:${userId}`, JSON.stringify(userData));
      console.log('Redis criado com sucesso.');
      return true; // Indicativo de sucesso ao criar o usuário no Redis
    } catch (error) {
      console.error('Erro ao criar usuário no Redis:', error);
      throw error;
    }
  }
};