const Sequelize = require('sequelize')

let config = require('./config')

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port : config.port,
    logging: console.log,
    pool: {
      max: config.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    dialectOptions: {
      multipleStatements: true
    }
  });
  
  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.customers = require('./models/customer')(sequelize, Sequelize);

module.exports = db;