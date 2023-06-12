const express = require('express');
const mongoose = require('mongoose');

async function connectDatabase(uri) {
    await mongoose.connect(uri);
    console.log('Database Connected:',mongoose.connection.name)
    const db = mongoose.connection
    return db
}

module.exports = connectDatabase