const express = require('express');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
const USER = db.user;

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Database');
  initial();
});

function initial() {
  USER.create({
    id: 1,
    username: 'superadmin',
    password: bcrypt.hashSync('password1234', 8),
    token: 'example-token',
    createdAt: '',
    updatedAt: '',
  });
}

/**
 *
 * index.js
 *
 */
require('./app/routes')(app);

app.listen(port, () => {
  console.log('App is listening on port ' + port);
});
