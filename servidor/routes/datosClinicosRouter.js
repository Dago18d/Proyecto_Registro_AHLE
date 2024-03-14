//Rutas
const express = require('express');
const router = express.Router();
const datosClinicosController = require('..//controllers/datosClinicosController');

//api/products
router.post('/', datosClinicosController.createdatosClinicos);
router.get('/', datosClinicosController.getDatosClinicos);
router.put('/:id', datosClinicosController.updateDatosClinicos);
router.get('/:id', datosClinicosController.getDatoClinico);
router.delete('/:id', datosClinicosController.deleteDatosClinicos);

module.exports = router;