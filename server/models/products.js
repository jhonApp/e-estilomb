const { Sequelize, DataTypes } = require('sequelize');
const database = require('../db');

const Produto = database.define('Produto', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  Status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Produto',
  timestamps: false
});

const ProdutoImagem = database.define('ProdutoImagem', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CorID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ProdutoID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ImageURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Produto.Imagem',
  timestamps: false
});

Produto.hasMany(ProdutoImagem, { foreignKey: 'ProdutoID', sourceKey: 'ID' });
ProdutoImagem.belongsTo(Produto, { foreignKey: 'ProdutoID', targetKey: 'ID' });

module.exports = { Produto, ProdutoImagem };
