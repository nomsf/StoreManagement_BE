const express = require('express')
const router = express.Router()
const Store = require('../models/storeModel')

// get all store id and names city only
router.get('/', async (req,res) => {
    try{
        const storeList = await Store.find({}, {name:1, objectId:1, city:1})
        res.status(200).json(storeList)
    }
    catch (e) {
        res.status(400).json({ msg: e.message })
    }
})

// get store info with object id
router.get('/:id', async (req,res) => {
    const id = req.params.id
    try{
        const store = await Store.findById(id)
        res.json(store)
    }
    catch (e) {
        res.status(400).json({ msg: e.message })
    }
})

// add store, without an item
router.post('/', async (req,res) => {
    try {
        const newStore = await Store.create({
            name:   req.body.name,
            street: req.body.street,
            city:   req.body.city,
        })

        await newStore.fillBread()
        const filledStore = await newStore.save()

        res.status(201).json(filledStore)
    }
    catch (e) {
        res.status(400).json({ msg: e.message })
    }
})

// update store info
router.patch('/:id', async (req,res) => {
    const id = req.params.id
    const name = await req.body.name
    const street = await req.body.street
    const city = await req.body.city

    try{
        const store = await Store.findById(id)

        name? (store.name = name) : {} ;
        street? (store.street = street) : {} ;
        city? (store.city = city) : {} ;

        const updatedStore = await store.save()

        res.status(200).json(updatedStore)
    }
    catch (e) {
        res.status(400).json({ msg: e.message })
    }
})

// update bread stock
router.patch('/editbread/:id', async (req,res) => {
    const id = req.params.id
    try {
        const store = await Store.findById(id)

        
    }
    catch {

    }
})


// delete a store
router.delete('/:id', async(req,res) => {
    const id = req.params.id;
    try{
        const deletedStore = await Store.deleteOne({ _id: id });
        res.status(200).json(deletedStore);
    }
    catch (e){
        res.status(500).json({ msg: e.message })
    }
})

/* TODO:
    - update bread stock (plus/minus)
*/

module.exports = router