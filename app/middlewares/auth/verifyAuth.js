const jwt = require('jsonwebtoken');
const config = require('../../config/auth.config.js');
const db = require('../../models');
const User = db.user;

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token.',
      data: {},
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        success: false,
        message: 'User is unauthorized',
        data: {},
      });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
