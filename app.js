const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

//Setting up the config.env file variables
dotenv.config({path : './config/config.env'});

// connecting to database
connectDatabase();

//Creating own middleware
const middleware = (req, res, next) => {
    console.log('Hello from middleware.');

    //setting up user variable globally
    req.user = 'Shubham Dixit';
    next();
}

app.use(middleware);


//Importing all routes
const jobs = require('./routes/jobs');


app.use('/api/v1', jobs);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});