const express=require('express')
const router=express.Router()
const pokemonController=require('../controllers/pokemon.controller')

// router.post('/add',pokemonController.addPokemon)

router.get('/:ID',pokemonController.getPokemon)

module.exports=router;