const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

//definindo engine de views
app.set('view engine', 'ejs');

//incluindo views no autoload
app.set('views', './app/views');

//agirá como middleware recebendo os dados enviados via post
app.use(bodyParser.urlencoded({ extended: true }));

//agirá como middleware para aplicar a validação nos dados a serem salvos
app.use(expressValidator());

//incluindo as rotas no autoload
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app