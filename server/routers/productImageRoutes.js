const express = require('express');
const controllerProductImage = require('../controllers/productsImageController');
const router = express.Router();

router.get('/List', controllerProductImage.List);
router.put('/Update', controllerProductImage.Update);

module.exports = router;
