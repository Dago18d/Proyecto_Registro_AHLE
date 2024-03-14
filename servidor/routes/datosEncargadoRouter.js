//Rutas
const express = require('express');
const router = express.Router();
const datosEncargadoController = require('../controllers/datosEncargadoController');

//api/products
router.post('/', datosEncargadoController.createDatosEncargado);
router.get('/', datosEncargadoController.getDatosEncargado);
router.put('/:id', datosEncargadoController.updateDatosEncargado);
router.get('/:id', datosEncargadoController.getDatoEncargado);
router.delete('/:id', datosEncargadoController.deleteDatosEncargado);

module.exports = router;