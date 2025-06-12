
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const User = require('../models/user');
const { response, request } = require('express');
const generateJWT = require('../utils/generateJWT');




const register = async (req = request, res = response) => {
    try {
        const { name, lastname, email, password } = req.body;

        //validate if exist
        const existingUser = await User.findOne({ where: { email } });
        

        if(existingUser(email)) {
            return res.status(409).json({
                success: false,
                error: true,
                message: 'Email already exist',
                }); 
        }   

        const userData= {name, lastname, email, password, superRol: 1};

        //create user
        const user = new User(userData);

        //save user

        await user.save();
        //generate JWT  
        const token = await generateJWT(user.id);

        const dataUser = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            superRol: user.superRol
        };

        return res.status(201).json({
            success: true,
            error: false,
            message: "success"
        });


    }catch(error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Internal error',
            details: error.message
        });
    }



    }

module.exports = {
    register
  }