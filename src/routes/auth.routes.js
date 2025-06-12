const { Router } = require("express");
const express = require('express');
const verify_token = require('../middlewares/validateJWT');

//const { login, register, showData, validateToken } = require("../controllers/auth.Controller");

const { register } = require("../controllers/auth.Controller");
const router = Router();



//login

//Router.post('/login', login );

//Register
router.post('/register', register );

//show data
//Router.get('/me', showData );

//verify token
//Router.get('/verify-token', validateToken );



module.exports = router;
// This code defines the authentication routes for the application.

