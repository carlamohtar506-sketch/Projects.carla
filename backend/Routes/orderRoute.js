const express = require("express");
const router = express.Router();
import  { createOrder }  from ("../Controllers/orderController");
import  { validateOrder } from ('../Validator/orderValidator');
router.post ("/addOrder",validateOrder, createOrder);



module.exports = router;
