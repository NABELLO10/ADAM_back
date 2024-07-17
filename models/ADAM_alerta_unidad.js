import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

import ADAM_alarmas from "./ADAM_alarmas.js";
import ADAM_unidades from "./ADAM_unidades.js";

const ADAM_alerta_unidad = db.define('ADAM_alerta_unidad', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },    
    id_unidad:{
        type: Sequelize.INTEGER
    },   
    id_alerta:{
        type: Sequelize.INTEGER,
    }     
},
{
    timestamps: true,
    tableName : 'ADAM_alerta_unidad'
})

ADAM_alerta_unidad.belongsTo(ADAM_alarmas, {foreignKey : "id_alerta"})
ADAM_alerta_unidad.belongsTo(ADAM_unidades, {foreignKey : "id_unidad"})

export default ADAM_alerta_unidad;
