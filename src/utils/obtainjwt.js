const jwt = require('jsonwebtoken');
const obtainJWT = (token) => {

    const secret = process.env.JWT_SECRET;
    const { id } = jwt.verify(token, secret);
    return id;
}

module.exports = obtainJWT;