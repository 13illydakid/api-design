// backend/config/database.js
const config = require('./index');

module.exports = {
  // development: {
  //   storage: config.dbFile,
  //   dialect: "postgres",
  //   seederStorage: "sequelize",
  //   logQueryParameters: true,
  //   typeValidation: true,
  //   username: "postgres",
  //   password: "billyjr123",
  //   database: 'postgres',
  //   host: "localhost",
  //   port: 5432,
  // },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.SCHEMA
    }
  }
};
