const express = require('express');
const router = express.Router();
const claseEntrenadorController = require('../controllers/serviceController');

router.get('/', claseEntrenadorController.getAllRelations);
router.get('/:id', claseEntrenadorController.getRelationById);
router.post('/', claseEntrenadorController.createRelation);
router.put('/:id', claseEntrenadorController.updateRelation);
router.delete('/:id', claseEntrenadorController.deleteRelation);

module.exports = router;
