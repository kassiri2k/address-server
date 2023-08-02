const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors')
const usersRoute = require('./routes/users')
//create the server
const app = express();


//for cors issues
app.use(cors())

//for logging requests
app.use(logger('dev'))
// for parsing the body
app.use(express.json())

//set the routes
app.use('/users', usersRoute)

//server is listening at port set in .env
app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`));