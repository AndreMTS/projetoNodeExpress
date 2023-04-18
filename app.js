const express = require('express');
const app = express();
const sequelize = require('./database');
const bodyParser = require('body-parser');

// Importa as rotas
const usuarioRoutes = require('./routes/usuario');
const loginRoutes = require('./routes/login');

app.use(bodyParser.urlencoded({ extended: true }));

// Usa as rotas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);

sequelize.sync().then(() => {
  app.listen(3200, () => {
    console.log('Aplicação rodando na porta 3200');
  });
});
