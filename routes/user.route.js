const express=require('express')
const router=express.Router()
const userController=require('../controllers/user.controller')

router.post('/user',userController.updateUser)
router.get('/users',userController.getUsers)
module.exports=router;