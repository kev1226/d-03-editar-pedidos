const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  cliente: String
});

module.exports = mongoose.model('Pedido', pedidoSchema);