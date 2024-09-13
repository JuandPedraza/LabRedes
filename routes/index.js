const express = require('express');
const router = express.Router();
const Formulario = require('../models/Formulario');

// Ruta para mostrar el formulario
router.get('/', (req, res) => {
  res.render('index');
});

// Ruta para procesar el formulario
router.post('/submit', async (req, res) => {
  const nuevoFormulario = new Formulario({
    nombre: req.body.nombre,
    password: req.body.password
  });

  try {
    await nuevoFormulario.save();
    res.send('Datos guardados exitosamente');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
