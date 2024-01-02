const jwt = require('jsonwebtoken');
const cookie = require('cookie');

function criarToken(userId, email) {
  const token = jwt.sign(
    { userId, email }, // Dados a serem assinados
    'seu_segredo_jwt', // Substitua com uma chave secreta mais segura e mantenha fora do código
    { expiresIn: '5d' } // Define o tempo de expiração do token (exemplo: 5 dias)
  );
  console.log("token", token); // Exibe o token gerado
  return token; // Retorna o token gerado
}

function criarCookieToken(res, token) {
  //console.log(res);
  // return res.cookie('token', token, {
  //   httpOnly: false,
  //   maxAge: 5 * 24 * 60 * 60 * 1000, // 5 dias em milissegundos
  //   sameSite: 'strict',
  //   path: '/', // Define o caminho no qual o cookie está disponível
  // });

  return res.cookie('token', '1234');
}


function getToken(req) {
  //console.log(req)
  const {cookies} = req
  if('token' in cookies){
    console.log("token exist.")
    next();
  }else{
    console.log("não encontrou.")
  }
  //return req.cookies.token || null; // Retorna o valor do cookie "token" ou null se não existir
  return null;
}



async function createTokenAndCookie(req, res, user) {
    console.log("entrei no criar token")
    const token = criarToken(user.UserId, user.Email);
    criarCookieToken(res, token);

    return token;
}

module.exports = { criarToken, criarCookieToken, getToken, createTokenAndCookie };
