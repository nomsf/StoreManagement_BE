const mongoose = require('mongoose')
const Store = require('./storeModel')

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

breadSchema.post('deleteOne', async function(doc) {
    
    try {
        const storeList = await Store.find()
        const removedItem = (object) => object._id === doc._id;
        storeList.items.item.filter(removedItem)
        const savedList = storeList.save()

        res.status(200).json(savedList)
        
    }
    catch (e) {
        res.status(500).json({ msg: e.message })
    }
    next();
});

/* TODO:
    - middleware when remove, remove all bread flavor from all store
    - middle ware when added, add to all store

*/

module.exports = mongoose.model('Bread', breadSchema)