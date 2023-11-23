const express = require('express');
const controllerUsuario = require('../controllers/usersController');
const router = express.Router();

router.get('/List', controllerUsuario.List);
router.post('/Create', controllerUsuario.Create);
router.put('/Update', controllerUsuario.Update);
router.get('/GetOne', controllerUsuario.GetOne);
router.post('/Delete', controllerUsuario.Delete);

module.exports = router;
