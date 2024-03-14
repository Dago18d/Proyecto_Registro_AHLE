//Rutas
const express = require('express');
const router = express.Router();
const datosPsicologicosController = require('../controllers/datosPsicologicosController');

//api/products
router.post('/', datosPsicologicosController.createDatosPsi);
router.get('/', datosPsicologicosController.getDatosPsi);
router.put('/:id', datosPsicologicosController.updateDatosPsi);
router.get('/:id', datosPsicologicosController.getDatoPsi);
router.delete('/:id', datosPsicologicosController.deleteDatosPsi);

module.exports = router;