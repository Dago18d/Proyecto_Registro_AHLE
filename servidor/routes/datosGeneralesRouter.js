//Rutas
const express = require('express');
const router = express.Router();
const datosGeneralesController = require('../controllers/datosGeneralesController');

//api/products
router.post('/', datosGeneralesController.createDatosGenerales);
router.get('/', datosGeneralesController.getDatosGenerales);
router.put('/:id', datosGeneralesController.updateDatosGenerales);
router.get('/:id', datosGeneralesController.getDatoGeneral);
router.delete('/:id', datosGeneralesController.deleteDatosGenerales);

module.exports = router;