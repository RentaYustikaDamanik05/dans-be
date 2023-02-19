/**
 *
 * /routes/index.js
 *
 */
module.exports = function (app) {
  app.use('/auth', require('./auth'));
  app.use('/jobs', require('./jobs'));
};
