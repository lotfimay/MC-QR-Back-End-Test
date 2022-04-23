const express = require('express');
const router = express.Router();

const SavedPerson = require('../models/SavedPerson');
const SuperHero = require('../models/SuperHero');





router.get('/' , async (req,res) =>{

    try{
        const savedpersons = await SavedPerson.find()
        res.json(savedpersons)
    }catch(error){
        res.status(500).json({ message: error.message })
    }
});


router.get('/:id', getSavedPerson , (req , res) =>{
   console.log("test");
   res.json(res.savedPerson);
});


router.get('/savedby/:id' , async (req , res , next) =>{
     try{
          
         const savedpersons = await SavedPerson.where('saver' , req.params.id);                                               
         res.json(savedpersons);                           
        
     }catch(error){
        next();
     }
});


router.get('/savedby/:name' , async (req , res) =>{
    try{
        const superHero = await SuperHero.findOne({'name' : req.params.name});
        console.log(superHero._id);
        const savedpersons = await SavedPerson.find()
                                   .where('saver' , superHero._id);
        res.json(savedpersons);                           
       
    }catch(error){
       res.status(500).json({ message: error.message })
    }
});


router.post('/' , async (req , res) =>{
    const savedperson = new SavedPerson(req.body);
    try {
        const newSavedPerson = await savedperson.save()
        res.status(201).json(newSavedPerson)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});


router.patch('/:id', getSavedPerson, async(req, res) => {
    if (req.body.name != null) {
        res.savedPerson.name = req.body.name
    }
    if (req.body.gender != null) {
        res.savedPerson.gender = req.body.gender
    }
    if (req.body.saver != null) {
        res.savedPerson.saver = req.body.saver
    }
    try {
        const updatedSavedPerson = await res.savedPerson.save()
        res.json(updatedSavedPerson)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.delete('/:id', getSavedPerson, async(req, res) => {
    try {
        await res.savedPerson.remove()
        res.json({ message: 'SuperHero Deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});



async function getSavedPerson(req,res , next){
    let savedPerson;
    try{
        savedPerson = await SavedPerson.findById(req.params.id);
        if (savedPerson == null) {
            return res.status(404).json({ message: 'Cannot find saved person' })
        }

    }catch(error){
        return res.status(500).json({ message: err.message })
    }
    res.savedPerson = savedPerson;
    next();
}



module.exports = router;