const { Produto, ProdutoImagem } = require('../models/products');
const { Sequelize } = require('sequelize');

module.exports = {
  async List(req, res) {
    try {
      const products = await Produto.findAll({
        attributes: ['ID', 'Nome', 'Descricao', 'Valor', 'Status'], // Especifique os campos que você quer selecionar
        include: {
          model: ProdutoImagem,
          attributes: ['ID', 'CorID', 'ImageURL', 'Status'] // Especifique os campos da tabela Produto.Imagem que você deseja incluir
        }
      });
      return res.json(products);
    } catch (error) {
      console.error("Error in List:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async Create(req, res) {
    try {
      const { ID, Nome, Descricao, Valor, Status } = req.body;

      const product = await Produto.create({
        ID,
        Nome,
        Descricao,
        Valor,
        Status
      });

      return res.json(product);
    } catch (error) {
      console.error("Error on Create:", error);
      return res.status(500).json({ error: "Internal Server Error Create" });
    }
  },

  async Update(req, res) {
    try {
      console.log("ID do produto a ser atualizado:", req.body);
      const prod = await Produto.findByPk(req.body.ID);

      if (prod) {
        prod.Nome = req.body.Nome;
        prod.Descricao = req.body.Descricao;
        prod.Valor = req.body.Valor;
        prod.Status = req.body.Status;

        await prod.save();

        // Retorna o produto atualizado (incluindo as imagens)
        return res.json(prod);
      } else {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

    } catch (error) {
      console.error("Error on Update:", error);
      return res.status(500).json({ error: "Internal Server Error Update" });
    }
  },

  async GetOne(req, res) {
    try {
      const prod = await Produto.findByPk(req.body.ID);

      return res.json(prod);

    } catch (error) {
      console.error("Error on GetOne:", error);
      return res.status(500).json({ error: "Internal Server Error GetOne" });
    }
  },

  async GetByNome(req, res) {
    try {
      const searchTerm = req.query.Nome;
      const prod = await Produto.findAll({
        where: {
          Nome: {
            [Sequelize.Op.like]: `%${searchTerm}%`
          }
        }
      });

      return res.json(prod);

    } catch (error) {
      console.error("Erro em GetByNome:", error);
      return res.status(500).json({ error: "Erro interno do servidor em GetByNome" });
    }
  },

  async Delete(req, res) {
    try {
      const prod = await Produto.findByPk(req.body.ID);
      await prod.destroy();
      return res.json(prod);

    } catch (error) {
      console.error("Error on GetOne:", error);
      return res.status(500).json({ error: "Internal Server Error GetOne" });
    }
  },
}