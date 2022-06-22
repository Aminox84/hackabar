const express=require('express')
const router=express.Router()
const QuizController=require('../controllers/quiz.controller')


router.get('/quiz',QuizController.getQuiz)
//router.get('/addquiz',QuizController.addQuiz)

module.exports=router;