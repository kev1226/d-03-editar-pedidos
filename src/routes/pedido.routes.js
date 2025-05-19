const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');

router.put('/:id', pedidoController.actualizarPedido);

module.exports = router;
