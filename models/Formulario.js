const mongoose = require('mongoose');

const formularioSchema = new mongoose.Schema({
  nombre: String,
  password: String,
});

const Formulario = mongoose.model('Formulario', formularioSchema, 'formulario_redes');

module.exports = Formulario;
