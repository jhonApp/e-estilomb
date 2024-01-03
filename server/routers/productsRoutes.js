const express = require('express');
const controllerProduct = require('../controllers/productsController');
const router = express.Router();

router.get('/List', controllerProduct.List);
router.get('/GetByNome', controllerProduct.GetByNome);
router.post('/Create', controllerProduct.Create);
router.put('/Update', controllerProduct.Update);
router.get('/GetOne', controllerProduct.GetOne);
router.post('/Delete', controllerProduct.Delete);

module.exports = router;
