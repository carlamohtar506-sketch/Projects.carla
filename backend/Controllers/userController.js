const { validationResult } = require('express-validator');
const { signupUser, loginUser } = require('../Services/userService');
const { signupValidation, loginValidation } = require('../Validator/userValidators'); // This line is for reference, assuming you have a login validator
const { Navigate } = require('react-router-dom');

const signupController = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let { username, password, firstName, lastName, email, phoneNumber, city } = req.body;
        if (!city || city.trim() === '') {
            city = undefined;
        }

        const response = await signupUser(username, password, firstName, lastName, email, phoneNumber, city);
        res.status(201).json(response);
    Navigate( '/')

    } catch (err) {
        res.status(500).json({ success: false, errors: err.message });
    }
};

const loginController = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: 'Validation errors', errors: errors.array() });
        }

        const { username, password } = req.body;
        const response = await loginUser(username, password);

        res.status(200).json({ success: true, message: 'Login successful', data: response });
    } catch (err) {
        if (err.message.includes('Invalid username or password')) {
            return res.status(401).json({ success: false, errors: err.message, message: 'Invalid Credentials' });
        }
        res.status(500).json({ success: false, errors: err.message, message: 'Internal Server Error' });
    }
};

module.exports = { signupController, loginController };