const express = require('express');
const router = express.Router();
const entrenadorController = require('../controllers/coatchController');

router.get('/', entrenadorController.getAllEntrenadores);
router.get('/:id', entrenadorController.getEntrenadorById);
router.post('/', entrenadorController.createEntrenador);
router.put('/:id', entrenadorController.updateEntrenador);
router.delete('/:id', entrenadorController.deleteEntrenador);

module.exports = router;
