/**
 *
 * /routes/auth/index.js
 *
 * @description:: index for the AUTH sub-application. All routes with "/auth" will come through here.
 *
 */

const AuthRouter = require('express').Router();

// Put route handlers here
AuthRouter.route('/login').post(
  require('./../../controllers/auth/index').signin
);

module.exports = AuthRouter;
