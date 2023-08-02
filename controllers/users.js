const db = require('../model/database')
//create user requesthandler
const createUser = async (req, res) => {
    let {
        name,
        phoneNumber
    } = req.body
    let query = `INSERT INTO users (name, phoneNumber) VALUES (?, ?)`

    if (name && phoneNumber) {
        try {
            const data = await db.promise().query(query, [name, phoneNumber]);
            res.status(201).send();
            console.log('User created', name, phoneNumber)
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
    let query = `SELECT * FROM users`;
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
        console.log(`Users with id = ${id} deleted`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error deleting user');
    }
}

module.exports = {
    createUser,
    getUsers,
    deleteUser
}