// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);

router.get('/producto', mainController.product);
router.get('/carrito', mainController.cart);
router.get('/registro', mainController.register);
router.get('/formulariocargaproducto', mainController.productAdd);

module.exports = router;
