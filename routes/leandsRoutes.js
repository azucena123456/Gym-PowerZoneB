const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leandsController');

router.get('/', leadsController.getAll);
router.get('/:id', leadsController.getById);
router.post('/', leadsController.create);
router.put('/:id', leadsController.update);
router.delete('/:id', leadsController.delete);

module.exports = router;
