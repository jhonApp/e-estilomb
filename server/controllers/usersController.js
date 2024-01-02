const { Usuario, Perfil } = require('../models/users');
const jwt = require('jsonwebtoken');
const tokenManager = require('../service/token');
const bcrypt = require('bcrypt');
const usuarioRedis = require('../controllers/usersRedisController');
const redisClient = require('../redis');
const cookie = require('cookie');


module.exports = {
  async Login(req, res) {
    try {
      const { Email, Senha } = req.body;

      const user = await Usuario.findOne({ where: { Email: Email } });
      if(user == null){ res.status(401).json({ message: 'Usuário não encontrado' }); }
      
      const match = await bcrypt.compare(Senha, user.Senha);
      if(!match){ res.status(401).json({ message: 'Senha Inválida' }); }

      // Envie o token de acesso e o refresh token como resposta
      const token = await tokenManager.createTokenAndCookie(req, res, user);
  
      usuarioRedis.Create(user.UsuarioID, user, token);
  
      return res.status(200).json({ name: user.Nome, token: token, isAdmin: user.IsAdmin });

    } catch (error) {

      return res.status(500).json({ message: 'errorMessage' });
    }
  },

  async List(req, res) {
    try {
      const usuario = await Usuario.findAll({
        attributes: ['UsuarioID', 'Nome', 'CPF', 'Email', 'Senha', 'Celular', 'DataNascimento', 'IsAdmin', 'RegistradoEm', 'AtualizadoEm'],
        include: {
          model: Perfil,
          attributes: ['ID', 'Nome', 'Status']
        }
      });
      return res.json(usuario);
    } catch (error) {
      console.error("Error in List:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async Create(req, res) {
    try {
      const { UsuarioID, PerfilID, Nome, CPF, Email, Senha, Celular, DataNascimento, IsAdmin, RegistradoEm, AtualizadoEm, Status } = req.body;
      const hashedSenha = await bcrypt.hash(Senha, 10); // 10 é o custo de hashing, pode ser ajustado conforme necessário
      const usuario = await Usuario.create({
        UsuarioID,
        PerfilID,
        Nome,
        CPF,
        Email,
        Senha: hashedSenha,
        Celular,
        DataNascimento,
        IsAdmin,
        RegistradoEm,
        AtualizadoEm,
        Status
      });

      return res.json(usuario);

    } catch (error) {
      console.error("Error on Create:", error);
      console.log(error);
      return error;
    }
  },

  async Update(req, res) {
    try {
        console.log("ID do usuario a ser atualizado:", req.body);
        const prod = await Usuario.findByPk(req.body.UsuarioID);

        if (prod) {
            prod.Nome = req.body.Nome;
            prod.CPF = req.body.CPF;
            prod.Email = req.body.Email;
            prod.Senha = req.body.Senha;
            prod.Celular = req.body.Celular;
            prod.DataNascimento = req.body.DataNascimento;
            prod.IsAdmin = req.body.IsAdmin;
            prod.RegistradoEm = req.body.RegistradoEm;
            prod.AtualizadoEm = req.body.AtualizadoEm;
            prod.Status = req.body.Status;
            await prod.save();

            return res.json(prod);
        } else {
            return res.status(404).json({ error: "Usuario não encontrado" });
        }

    } catch (error) {
        console.error("Error on Update:", error);
        return res.status(500).json({ error: "Internal Server Error Update" });
    }
  },

  async GetOne(req, res) {
    try {
        const prod = await Usuario.findByPk(req.body.UsuarioID);
        
        return res.json(prod);

    } catch (error) {
      console.error("Error on GetOne:", error);
      return res.status(500).json({ error: "Internal Server Error GetOne" });
    }
  },

  async Delete(req, res) {
    try {
        const prod = await Usuario.findByPk(req.body.UsuarioID);
        await prod.destroy();
        return res.json(prod);

    } catch (error) {
      console.error("Error on Delete:", error);
      return res.status(500).json({ error: "Internal Server Error GetOne" });
    }
  },
}