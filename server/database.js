const { Sequelize } = require('sequelize');

require('dotenv').config();

const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT} = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});
  
module.exports = db
