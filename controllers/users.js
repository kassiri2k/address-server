const db = require('../model/database')
//create user requesthandler
const createUser = async (req, res) => {
    let {
        name,
        phoneNumber
    } = req.body
    let query = `INSERT INTO (name,phoneNumber) users VALUE(?,?)`
    try {
        const result = await db.query(query, (name, phoneNumber));
        result.then(out => console.log(`User: \n name: ${name} \n phoneNumber: ${phoneNumber}`))
            .catch(err => console.error('Error when creating an user'))
    } catch (error) {
        console.error('Error when creating an user')
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