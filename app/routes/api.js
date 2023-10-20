var express = require('express');
var router = express.Router();

let productController = require('../controllers/product');


router.get('/products', productController.list);
router.get('/products/:id', productController.productByID);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;
