//Rutas
const express = require('express');
const router = express.Router();
const ExInternosController = require('../controllers/exInternosControler');

//api/products
router.post('/', ExInternosController.createExInternos);
router.get('/', ExInternosController.getExInternos);
router.put('/:id', ExInternosController.updateExInternos);
router.get('/:id', ExInternosController.getExInterno);
router.delete('/:id', ExInternosController.deleteExInternos);

module.exports = router;