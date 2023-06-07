const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Hello Store!')
})

/* TODO:
    - add store
    - update store info
    - update bread stock (plus/minus)
    - delete store
*/

module.exports = router