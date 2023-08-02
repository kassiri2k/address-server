const express = require('express');
const {
    getCountries
} = require('../controllers/countries')
const router = express.Router();

// Read countries operation
router.get('/', getCountries);


module.exports = router