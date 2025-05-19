const Pedido = require('../models/pedido.model');

exports.actualizarPedido = async (req, res) => {
  try {
    const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedidoActualizado) {
      return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    }
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar pedido', error });
  }
};
