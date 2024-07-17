import { Sequelize } from "sequelize";

const dbCeiba = new Sequelize('wcms4','idfleet','',{
    host: '186.10.115.124',
    dialect: 'mysql',
    timezone: '-03:00',
    port: 3307,
    logging: false,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000
    }
})


export default dbCeiba