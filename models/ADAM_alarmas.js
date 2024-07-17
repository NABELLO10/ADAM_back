import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

import ADAM_alarmas_ceiba from "./ADAM_alarmas_ceiba.js";
import ADAM_estados_evidencia from "./ADAM_estados_evidencia.js";

const ADAM_alarmas = db.define('ADAM_alarmas', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },    
    alarmid_ceiba:{
        type: Sequelize.INTEGER
    },   
    id_estado_actual:{
        type: Sequelize.INTEGER,       
    }, 

},
{
    timestamps: true,
    tableName : 'ADAM_alarmas'
})

ADAM_alarmas.belongsTo(ADAM_alarmas_ceiba, {foreignKey : "alarmid_ceiba"})
ADAM_alarmas.belongsTo(ADAM_estados_evidencia, {foreignKey : "id_estado_actual"})


export default ADAM_alarmas;
