const express = require('express')
const router = express.Router()
const Bread = require('./../models/breadModel')


// get all bread info
router.get('/', async (req,res) => {
    try{
        const breadList = await Bread.find()
        res.json(breadList)
    } 
    catch (e) {
        res.status(502).json({ msg: e.message })
    }
})

// add a bread flavor
router.post('/', async (req,res) => {
    try{
        const newBread = await Bread.create({
            flavor: req.body.flavor,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            rating:0
        })
        // await newBread.save()
        res.status(201).json(newBread)
    }
    catch (e) {
        res.status(400).json({ msg: e.message })
    }
})

// update bread info including rating
// NOTE: request should be including all field even if its not changed
//      (especially if its changed)
router.patch('/:id', async (req,res) => {
    const id = req.params.id;
    try{
        const bread = await Bread.findById(id)

        if(req.body.rating > 5 || req.body.rating < 0){
            throw new Error('Rating should be lower than 5 or greater than 0')
        }
        else{
            bread.flavor = await req.body.flavor;
            bread.description = await req.body.description;
            bread.imageUrl = await req.body.imageUrl;
            bread.rating = await req.body.rating;

            const updatedBread = await bread.save()

            res.status(200).json(updatedBread)
        }
    }
    catch (e){
        res.status(400).json({ msg: e.message })
    }
})

router.delete('/:id', async (req,res) => {
    const id = req.params.id;
    try{
        const deletedBread = await Bread.deleteOne({ _id: id });
        
        res.status(200).json(deletedBread)
    }
    catch (e){
        res.status(500).json({ msg: e.message })
    }
})

module.exports = router