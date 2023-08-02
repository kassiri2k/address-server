const db = require('../model/database')
//create user requesthandler
const createUser = async (req, res) => {
    let {
        name,
        phoneNumber,
        countryId
    } = req.body
    let query = `INSERT INTO users (name, phoneNumber,countryId) VALUES (?, ?,?)`


    if (name && phoneNumber && countryId) {
        try {
            const data = await db.promise().query(query, [name, phoneNumber, countryId]);
            res.status(201).send();
            console.log('User created', name, phoneNumber, countryId)
        } catch (error) {
            console.error(error)
            res.status(500).send('Error creating user');
        }
    } else {
        res.status(400).send('Error when entering the info');
    }
}


//get user requesthandler
const getUsers = (req, res) => {
    let query = `SELECT users.id,users.name,users.phoneNumber,countries.country FROM users LEFT JOIN countries on users.countryId = countries.countryId `

    db.query(query, (err, result) => {
        if (err) {
            // handle errors when retrieving data
            return res.status(500).send('Error when retrieving data')
        } else {
            // return all user
            return res.status(200).json(result)
        }
    })
}

// delete user requesthandler
const deleteUser = (req, res) => {

    const id = req.params.id;

    let query = `DELETE FROM users WHERE id=?`;
    try {
        db.promise().query(query, [id])
        res.status(200).send();
        console.log(`Users with id = ${id} deleted`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error deleting user');
    }
}

//get all users coming from the given countryId
const getUserbyCountry = (req, res) => {
    const id = req.params.id;
    let query = `SELECT * FROM users WHERE countryId = ?`
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send('Error when retrieving data');
        } else {
            res.status(200).send(result)
        }
    })
}

//get all users coming from the given countryId
const getUserbyCountryName = (req, res) => {
    const id = req.params.id;

    let query = `SELECT users.id,users.name,users.phoneNumber,countries.country FROM users LEFT JOIN countries ON users.countryId = countries.countryId 
    WHERE country = ?;
    `

    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send('Error when retrieving data');
        } else {
            res.status(200).send(result)
        }
    })
}
module.exports = {
    createUser,
    getUsers,
    deleteUser,
    getUserbyCountry,
    getUserbyCountryName
}