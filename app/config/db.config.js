/**
 *
 * /config/db.config.js
 *
 */

module.exports = {
  HOST: '127.0.0.1',
  USER: 'root',
  PASSWORD: 'P@ssword01',
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
