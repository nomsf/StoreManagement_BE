// Configure enviroment variable with dotenv and .env
require('dotenv').config();

// Setup Application
const express = require('express');
const app = express();
const port = process.env.LOCAL_PORT;

// Middleware: parse request to json
app.use(express.json())

// Route the request
const route = require('./routers/router')
app.use('/', route)

app.listen(port, () => console.log(`Server running on port ${port}`)) 