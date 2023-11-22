const { Sequelize, DataTypes } = require('sequelize');
const database = require('../db');

const Usuario = database.define('Usuario', {
  UsuarioID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  PerfilID: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DataNascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  IsAdmin: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  RegistradoEm: {
    type: DataTypes.DATE,
    allowNull: false
  },
  AtualizadoEm: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Usuario',
  timestamps: false
});

const Perfil = database.define('Perfil', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Perfil',
  timestamps: false
});

Usuario.hasMany(Perfil, { foreignKey: 'UsuarioID', sourceKey: 'UsuarioID' });
Perfil.belongsTo(Usuario, { foreignKey: 'UsuarioID', targetKey: 'UsuarioID' });


module.exports = { Usuario, Perfil };
