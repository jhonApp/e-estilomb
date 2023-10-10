const { ProdutoImagem } = require('../models/products');

module.exports = {
  async List(req, res) {
    try {
      const products = await ProdutoImagem.findAll({
        attributes: ['ID', 'CorID', 'ProdutoID', 'ImageURL', 'Status'], // Especifique os campos que você quer selecionar
      });
      return res.json(products);
    } catch (error) {
      console.error("Error in List:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async Create(req, res) {
    try {
      const { ID, CorID, ProdutoID, ImageURL, Status } = req.body;
  
      const product = await Produto.create({
        ID,
        CorID,
        ProdutoID,
        ImageURL,
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
        const prod = await ProdutoImagem.findByPk(req.body.ID);

        if (prod) {
            // Atualize os campos do objeto prod com os valores do req.body
            prod.CorID = req.body.CorID;
            prod.ProdutoID = req.body.ProdutoID;
            prod.ImageURL = req.body.ImageURL;
            prod.Status = req.body.Status;

            // Salve as alterações no banco de dados usando o método save()
            await prod.save();
            
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
        const prod = await ProdutoImagem.findByPk(req.body.ID);
        
        return res.json(prod);

    } catch (error) {
      console.error("Error on GetOne:", error);
      return res.status(500).json({ error: "Internal Server Error GetOne" });
    }
  },

  async Delete(req, res) {
    try {
        const prod = await ProdutoImagem.findByPk(req.body.ID);
        await prod.destroy();
        return res.json(prod);

    } catch (error) {
      console.error("Error on GetOne:", error);
      return res.status(500).json({ error: "Internal Server Error GetOne" });
    }
  },
}