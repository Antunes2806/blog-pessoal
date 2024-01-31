// server.js
const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Configuração do MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'Ana.050910',
  database: 'usuarios'
});

// Configuração da sessão
app.use(session({
  secret: 'sua-chave-secreta',
  resave: false,
  saveUninitialized: true
}));

// Configuração de pastas com aquivos estáticos
//app.use('/img', express.static(__dirname + '/img'))
app.use('/css', express.static(__dirname + '/css'))

// Configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do EJS
app.set('view engine', 'ejs');

// Página inicial
app.get('/', (req, res) => {
  res.render('home');
});


// Página sobre
app.get('/sobre', (req, res) => {
    res.render('sobre');
  });
  
  // Página de contatos
  app.get('/contatos', (req, res) => {
    res.render('contatos');
  });
  
  // Página de postagens
  app.get('/postagens', (req, res) => {
    // Lógica para buscar postagens no banco de dados e renderizar a página
  });
  

// Outras rotas e funcionalidades do blog

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
