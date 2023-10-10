// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    // use_env_variable: 'DATABASE_URL',
    storage: config.dbFile,
    // use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    username: "default",
    password: "XBy6wI9ibYcH",
    database: "verceldb",
    host: "ep-bitter-feather-72486321-pooler.us-west-2.postgres.vercel-storage.com",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: "public"
    }
  },
  // development: {
  //   storage: config.dbFile,
  //   dialect: "postgres",
  //   seederStorage: "sequelize",
  //   logQueryParameters: true,
  //   typeValidation: true,
  // },
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
    // use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
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
