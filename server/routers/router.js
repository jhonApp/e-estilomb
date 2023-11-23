const express = require('express');
const productImageRoutes = require('./productImageRoutes');
const productsRoutes = require('./productsRoutes');
const usuariosRoutes = require('./usersRoutes');
const usuariosRoutesRedis = require('./usersRoutesRedis');

const routes = express.Router();

routes.use('/Usuarios', usuariosRoutes);
routes.use('/UsuarioRedis', usuariosRoutesRedis);
routes.use('/Produtos', productsRoutes);
routes.use('/ProdutoImagens', productImageRoutes);

module.exports = routes;
