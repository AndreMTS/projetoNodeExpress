const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const path = require('path');

// Rota para exibir o formulário de cadastro de usuários
router.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'cadastro.html'));
});


// Rota para processar o formulário de cadastro de usuários
router.post('/cadastro', (req, res) => {
  const { email, senha } = req.body;
  
  // Verifica se o email já está cadastrado
  Usuario.findOne({ where: { email } })
    .then(usuarioExistente => {
      if (usuarioExistente) {
        res.send('Este email já está cadastrado');
      } else {
        // Cria um novo usuário
        Usuario.create({ email, senha })
          .then(() => {
            //res.send('Usuário criado com sucesso');
            res.redirect('/login');
          })
          .catch(err => {
            res.send('Erro ao criar usuário: ' + err);
          });
      }
    })
    .catch(err => {
      res.send('Erro ao buscar usuário: ' + err);
    });
});

module.exports = router;
