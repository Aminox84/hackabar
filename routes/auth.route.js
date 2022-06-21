const express=require('express')
const router=express.Router()
const authControlleur=require('../controllers/auth.controller')

router.post('/signon',authControlleur.signon)
router.post('/signin',authControlleur.signin)

module.exports=router;