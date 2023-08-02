const db = require('../model/database')
//create user requesthandler
const createUser = (req, res) => {
    let {
        name,
        phoneNumber
    } = req.body
    let query = `INSERT INTO users VALUE(?,?)`
    try {
        db.query(query, )
    } catch (error) {

    }

}

//get user requesthandler
const getUsers = (req, res) => {
    let query = `SELECT * FROM users`;
    db.query(query, (err, data) => {
        if (err) {
            // handle errors when retrieving data
            return res.status(500).send('Error when retrieving data')
        } else {
            // return all user
            return res.status(200).json({
                "root": result
            })
        }
    })
}

// delete user requesthandler
const deleteUser = (req, res) => {
    //todo
}

module.exports = {
    createUser,
    getUser,
    deleteUser
}