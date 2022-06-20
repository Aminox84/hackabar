const express=require('express')
const router=express.Router()
const offreAlternancecontrolleur=require('../controllers/register')

router.post('/register',offreAlternancecontrolleur.createoffrealternances)

module.exports=router;