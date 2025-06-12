const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { token } = require('morgan');

const validateJWT = async (req = res = response, next) => {

    const authHeader = req.header('Authorization');
    token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            error : true,
            message : "no token",
        });
            
            msg: 'No token provided, authorization denied'
    }


    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(id);

    req.user = user;
    next();

    if(error.name === 'TokenExpiredError') {
        return res.status(401).json({
            success: false,
            error : true,
            message : "Token expired",
        });
    }   

    return res.status(401).json({
        success: false,
        error : true,
        message : "Invalid token",
    });

}

module.exports = validateJWT;