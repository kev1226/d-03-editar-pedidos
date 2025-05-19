require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const pedidoRoutes = require('./routes/pedido.routes');

app.use(express.json());
app.use('/api/pedidos', pedidoRoutes);
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error en conexión MongoDB:', err));

app.listen(process.env.PORT, () => {
  console.log(`Microservicio EDITAR PEDIDO en puerto ${process.env.PORT}`);
});