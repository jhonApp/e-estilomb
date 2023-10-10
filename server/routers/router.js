const express = require('express');
const productImageRoutes = require('./productImageRoutes');
const productsRoutes = require('./productsRoutes');

const routes = express.Router();

routes.use('/Produtos', productsRoutes);
routes.use('/ProdutoImagens', productImageRoutes);

module.exports = routes;
