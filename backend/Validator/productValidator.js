const { check } = require("express-validator");
const productValidation = [
  check("name")
    .notEmpty()
    .withMessage("Product name can't be empty")
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 characters"),

  check("description")
    .notEmpty()
    .withMessage("Description can't be empty")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),

  check("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),

  check("countInStock")
    .notEmpty()
    .withMessage("Stock count is required")
    .isInt({ min: 0 })
    .withMessage("Stock count must be a number 0 or greater"),

  check("category")
    .notEmpty()
    .withMessage("Category is required"),

  check("image")
    .notEmpty()
    .withMessage("Main image URL is required")
    .isURL()
    .withMessage("Image must be a valid URL"),

  check("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array of URLs"),
];

module.exports= { productValidation };