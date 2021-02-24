const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const {jwtAuth} = require('../middleware/authentication.middleware')
router.get('/',[
    jwtAuth
    ,(req,res) => {
    res.send('index of users')}
])

router.post('/',[userController.createUser])

router.get('/id/:id',(req,res) => {
    res.send(`user with id ${req.params.id}`)
})

router.post('/login',[userController.userLogin])

module.exports = router