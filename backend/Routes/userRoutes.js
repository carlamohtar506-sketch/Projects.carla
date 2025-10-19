const express = require('express');
const router = express.Router();

const {signupValidation,loginValidation} = require('../Validator/userValidators')
const {signupController,loginController} = require('../Controllers/userController')

router.post('/Signup',signupValidation,signupController);
router.post('/Login',loginValidation,loginController);

module.exports= router;