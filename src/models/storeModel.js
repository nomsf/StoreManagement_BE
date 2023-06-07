const mongoose = require('mongoose')
const Bread = require('./breadModel')

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        require: true
    },
    city: {
        type: String,
        required: true
    },
    item: [{
        bread: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Bread'
        },
        count: {
            type: Number,
            default:0
        }
    }]
}, { collection:'Store' })

storeSchema.methods.fillBread = async function () {
    const breadList = await Bread.find()

    const item = breadList.map((bread) =>({
        bread: bread._id
    }))

    this.item = item
    console.log(this)
}


module.exports = mongoose.model('Store', storeSchema)