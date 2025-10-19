
const {check} =require('express-validator');

const signupValidation=[

  check('firstName')
    .notEmpty()
    .withMessage('First name is required'),

check('lastName')
  .notEmpty().withMessage('First name required'),

  check('password')
   .notEmpty().withMessage(' Password cant be empty')
   .isLength({min:8})
   .withMessage("Password should be minimum 8 characters")
   .isStrongPassword().withMessage("Use combination of numbers, uppercase and lowercase letters, and special sign"),

   check('username')
  .notEmpty().withMessage('Username cant be empty')
  .isAlphanumeric().withMessage('Username should contain letters and number'),

    check('email')
  .notEmpty().withMessage("Email cant be empty")
  .isEmail().withMessage("Not valid email @ ."),

  check('phoneNumber')
    .matches(/^\+?[1-9]\d{1,14}$/)
    .withMessage('Invalid phone number format. Use the international format, e.g., +1234567890'),
 
];

const loginValidation =[
  check('username')
  .notEmpty().withMessage('Username cant be empty'),

  check('password')
   .notEmpty().withMessage(' Password cant be empty'),
]
module.exports= {signupValidation,loginValidation};