/**
 *
 * /routes/auth/index.js
 *
 * @description:: index for the AUTH sub-application. All routes with "/auth" will come through here.
 *
 */

const AuthRouter = require('express').Router();
const { authJwt } = require('./../../middlewares/index');

// Put route handlers here
AuthRouter.route('/login').post(
  require('./../../controllers/auth/index').signin
);
AuthRouter.route('/me').get(
  authJwt,
  require('./../../controllers/auth/index').checkMe
);

module.exports = AuthRouter;
