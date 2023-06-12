const express = require('express')
const router = express.Router()
const breadRoute = require('./breadRoute')
const storeRoute = require('./storeRoute')

router.use('/bread', breadRoute)
router.use('/store', storeRoute)

module.exports = router