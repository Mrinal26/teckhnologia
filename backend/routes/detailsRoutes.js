const express = require('express');
const router = express.Router();
const detailsController = require('../controllers/detailsController');

router.post('/', detailsController.createDetail);

router.get('/', detailsController.getDetails);

router.delete('/:id', detailsController.deleteDetail);

module.exports = router;
