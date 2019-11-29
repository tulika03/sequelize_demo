const config = {
    database: 'db_dev_sequelize',
    username: 'root',
    password: '1234',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 1000,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = config;