// server.js

const express = require('express');

//Create an app
const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));

// API ROUTES

// Inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
} )

// Clientes
app.get('/clientes', (req, res) => {
    res.sendFile(__dirname + '/public/clientes.html');
} )

// Productos
app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/public/productos.html');
} )

//Listen port
const PORT = 5050;
app.listen(PORT);
console.log(`Running on port ${PORT}`);