const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://jpedrazar:1033096322@cluster0.qvtp1.mongodb.net/FormularioRedesLab1?retryWrites=true&w=majority';

// Conectar a MongoDB
async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: { version: '1', strict: true, deprecationErrors: true }
    });
    console.log('Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('Error de conexión a MongoDB Atlas:', err);
  }
}
connectDB();

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración del motor de vistas
app.set('view engine', 'ejs');

// Rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
