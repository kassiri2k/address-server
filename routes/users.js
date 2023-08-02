const express = require('express');
const {
    createUser,
    getUsers,
    deleteUser
} = require('../controllers/users')
const router = express.Router();


//todo: read user 
router.get('/', getUsers);

//todo: create user
router.post('/', createUser);

//todo: delete user
router.delete('/', deleteUser);

module.exports = router;