const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});;

router.post('/', (req, res) => {
  const { email, senha } = req.body;

  // Busca um usuário com o e-mail e senha informados
  Usuario.autenticar(email, senha)
    .then(usuarioAutenticado => {
      if (usuarioAutenticado) {
        res.send('Usuário autenticado com sucesso');
      } else {
        res.send('E-mail ou senha incorretos');
      }
    })
    .catch(erro => {
      console.error(erro);
      res.send('Ocorreu um erro ao tentar autenticar o usuário');
    });
});

module.exports = router;
