const express = require('express');
const router = express.Router();
const detailsController = require('../backend/controllers/detailsController');

router.post('/details', detailsController.createDetail);

router.get('/details', detailsController.getDetails);

router.delete('/details/:id', detailsController.deleteDetail);

module.exports = router;
