const express = require('express');
const {
    createUser,
    getUsers,
    deleteUser,
    getUserbyCountry,
    getUserbyCountryName

} = require('../controllers/users')
const router = express.Router();


// read user 
router.get('/', getUsers);

// create user
router.post('/', createUser);

// delete user
router.delete('/:id', deleteUser);

// read all user coming from the given countryId
// ich habe die untere Zeile auskommentiert damit das letzte Endpoint funktionniert(die haben gleich http method mit einem parameter)
//router.get('/:id', getUserbyCountry)

// read all users coming from the given country
router.get('/:id', getUserbyCountryName)
module.exports = router;