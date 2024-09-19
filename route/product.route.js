const express=require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct,} = require('../controller/product.controller.js');
const { model } = require('mongoose');


router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);
router.delete('/:id',deleteProduct);
//update a product
router.put('/:id',updateProduct);
module.exports= router;