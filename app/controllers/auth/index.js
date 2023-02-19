const db = require('./../../models');
const config = require('./../../config/auth.config');
const User = db.user;
const Job = db.job;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ message: 'User Not found.', success: false, data: {} });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body?.password,
        user?.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          data: {},
          success: false,
          message: 'Invalid Password!',
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        data: { id: user.id, username: user.username, token: token },
        success: true,
        message: 'User login successfully.',
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message, success: false, data: {} });
    });
};

exports.checkMe = (req, res) => {
  res.status(200).send({
    data: {
      token: req.headers?.['x-access-token'],
    },
    success: true,
    message: 'User is authorized.',
  });
};
