const express = require('express')
const router = express.Router()
const quizController = require('../controllers/quiz.controller')
const {jwtAuth} = require('../middleware/authentication.middleware')

router.get('/',[
    jwtAuth,
    quizController.getAll  
])

router.post('/',[
    jwtAuth,
    quizController.createQuiz
])

module.exports = router