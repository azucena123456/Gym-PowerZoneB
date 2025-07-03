const express = require('express');
const router = express.Router();
const membresiaController = require('../controllers/memberControlller');

router.get('/', membresiaController.getAllMembresias);
router.get('/:id', membresiaController.getMembresiaById);
router.post('/', membresiaController.createMembresia);
router.put('/:id', membresiaController.updateMembresia);
router.delete('/:id', membresiaController.deleteMembresia);

module.exports = router;
