//Rutas
const express = require('express');
const router = express.Router();
const RegistroController = require('..//controllers/RegistroController');

//api/products
router.post('/', RegistroController.createRegistro);
router.get('/', RegistroController.getRegistros);
router.put('/:id', RegistroController.updateRegistro);
router.get('/:id', RegistroController.getRegistro);
router.delete('/:id', RegistroController.deleteRegistro);

module.exports = router;