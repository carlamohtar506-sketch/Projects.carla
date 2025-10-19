
const express = require('express')
const router = express.Router();

const { addProductController,getProductsController,getProductsByIdsController}= require('../Controllers/productController');
const { productValidation } = require('../Validator/productValidator');
router.get('/getProducts', getProductsController);
router.post('/addProduct', productValidation, addProductController);
router.post('./byIds',getProductsByIdsController);
module.exports= router;
