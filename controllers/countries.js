const db = require('../model/database')

// get Country requesthandler
const getCountries = (req, res) => {
    let query = `SELECT * FROM countries`;
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error when retrieving Countries')
        } else {
            res.status(200).send(result)
        }
    })
}

module.exports = {

    getCountries
}