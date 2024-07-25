/* import { Sequelize } from "sequelize";

const db = new Sequelize('IdFleetDB', 'sa', '123456', {
    dialect: 'mssql',
    host: '127.0.0.1',
    port: '63837',
    logging: false,
    timezone: '-04:00',
    dialectOptions: {
      options: {
          requestTimeout: 60000, // 60 segundos
      }
  },
  pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 60000 // 60 segundos
  }

  })

export default db  */

/////////////////////////////////// 

 import { Sequelize } from "sequelize";

const db = new Sequelize('IdFleetDB', 'userIdFleet', 'IdF.2023', {
    dialect: 'mssql',
    host: 'hctec.database.windows.net',
    port: '1433',
    logging: false,
    timezone: '+04:00',
    dialectOptions: {
        options: {
            requestTimeout: 60000, // 60 segundos
        }
    },  
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 60000 // 60 segundos
    }})


export default db 