const { Usuario, Perfil } = require('../models/users');
const usuarioRedis = require('../controllers/usersRedisController');


module.exports = {
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
  
      const usuario = await Usuario.create({
        UsuarioID,
        PerfilID,
        Nome,
        CPF,
        Email,
        Senha,
        Celular,
        DataNascimento,
        IsAdmin,
        RegistradoEm,
        AtualizadoEm,
        Status
      });

      usuarioRedis.Create(usuario.UsuarioID, usuario);
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