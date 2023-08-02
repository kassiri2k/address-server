const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const usersRoute = require('./routes/users')
//create the server
const app = express();
//for logging requests
app.use(logger)
// for parsing the body
app.use(express.json())

//set the routes
app.use('/users', usersRoute)

//server is listening at port set in .env
app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`));