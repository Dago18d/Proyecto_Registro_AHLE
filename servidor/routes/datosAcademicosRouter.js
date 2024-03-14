//Rutas
const express = require('express');
const router = express.Router();
const datosAcademicosRouter = require('../controllers/datosAcademicosController');

//api/products
router.post('/', datosAcademicosRouter.createDatosAcademicos);
router.get('/', datosAcademicosRouter.getDatosAcademicos);
router.put('/:id', datosAcademicosRouter.updateDatosAcademicos);
router.get('/:id', datosAcademicosRouter.getDatoAcademico);
router.delete('/:id', datosAcademicosRouter.deleteDatosAcademicos);

module.exports = router;