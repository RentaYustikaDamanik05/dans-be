/**
 *
 * /routes/jobs/index.js
 *
 * @description:: index for the JOBS sub-application. All routes with "/jobs" will come through here.
 *
 */

const JobsRouter = require('express').Router();
const { authJwt } = require('./../../middlewares/index');

// Put route handlers here
JobsRouter.route('/').get(
  authJwt,
  require('./../../controllers/jobs/index').allJob
);
JobsRouter.route('/:id').get(
  authJwt,
  require('./../../controllers/jobs/index').detailJob
);

module.exports = JobsRouter;
