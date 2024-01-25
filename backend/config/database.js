// // backend/config/database.js
// const config = require('./index');

// module.exports = {
//   development: {
//     storage: config.dbFile,
//     dialect: "sqlite",
//     seederStorage: "sequelize",
//     logQueryParameters: true,
//     typeValidation: true
//   },
//   production: {
//     use_env_variable: 'DATABASE_URL',
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     },
//     define: {
//       schema: process.env.SCHEMA
//     }
//   }
// };


// backend/config/database.js
const config = require('./index');

require('dotenv').config();

module.exports = {
  development: {
    // use_env_variable: 'DATABASE_URL',
    storage: config.dbFile,
    // use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.DATABASE_SCHEMA,
    }
  },
  production: {
    // use_env_variable: 'DATABASE_URL',
    storage: config.dbFile,
    // use_env_variable: process.env.DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.DATABASE_SCHEMA,
    }
  }
};
