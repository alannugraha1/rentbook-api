const express = require('express')
const route = express.Router()
const user = require('../controller/user')

route 
    .post('/register', user.register)
    .post('/login',user.login)

module.exports = route