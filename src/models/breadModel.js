const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: String,
    rating: {
        type: Number,
        default: 0,
        max: 5
    }
},{ collection:'Bread' });

/* TODO:
    - middleware when remove, remove all bread flavor from all store
    - middle ware when added, add to all store

*/

module.exports = mongoose.model('Bread', breadSchema)