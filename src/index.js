// Configure enviroment variable with dotenv and .env
require('dotenv').config();

// Setup Application
const express = require('express');
const app = express();
const port = process.env.LOCAL_PORT;

// Setup Database connection
const uri = process.env.DB_URI;
const mongoose = require('mongoose');
const dbConnect = require('./database/connection')
const db = dbConnect(uri)

// Middleware: parse request to json
app.use(express.json())

// Route the request
const route = require('./routers/router')
app.use('/', route)

app.listen(port, () => console.log(`Server running on port ${port}`))


// TEST DB
// const Bread = require('./models/breadModel')
// const Store = require('./models/storeModel')

// run()

// async function run(){
//     const store = await Store.create({})
//     // store.fillBread()
//     console.log(store)
// }