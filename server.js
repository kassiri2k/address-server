const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors')
const usersRoute = require('./routes/users')
const countriesRoute = require('./routes/countries')
//create the server
const app = express();


//for cors issues
app.use(cors())

//for logging requests
app.use(logger('dev'))
// for parsing the body
app.use(express.json())
app.use(express.text())

//set the routes
app.use('/users', usersRoute)
app.use('/countries', countriesRoute)

//server is listening at port set in .env
app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`));