const Sequelize = require('sequelize');
const sequelize = require('../database');


const Usuario = sequelize.define('usuario', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      }
  }, {});
  
  Usuario.autenticar = function(email, senha) {
    return this.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
  };
  
  module.exports = Usuario;