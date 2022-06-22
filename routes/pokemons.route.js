const express=require('express')
const router=express.Router()
const pokemonController=require('../controllers/pokemon.controller')

// router.post('/add',pokemonController.addPokemon)

router.get('/',pokemonController.getPokemons)
router.post('/ids',pokemonController.getPokemonsByID)
module.exports=router;