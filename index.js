const express = require('express');
const mongoose =require('mongoose');
require('dotenv').config();

// Employee Route

const employeeRoute = require('./routes/employeeRoute')

const app = express();

// Middleware -modies request
app.use(express.json());

// Routes for API
app.use('/employee', employeeRoute)



// connect to database
const URL = process.env.DB_URL;
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("its connected")
})
.catch(()=>{
    console.log('failed...')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server be listening ...')
});