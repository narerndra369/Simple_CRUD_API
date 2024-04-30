const express = require("express");
const Product = require('../models/product.model.js');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controller/product.controller.js');
const router = express.Router();

router.get('/',getProducts);

router.get('/:ime',getProduct);

router.post('/',createProduct);

router.put('/:ime', updateProduct);

router.delete('/:ime', deleteProduct);

module.exports = router;