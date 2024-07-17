// Este es tu controlador, por ejemplo, sensorController.js
import ADAM_token from "../../models/ADAM_token.js";
import ADAM_unidades from "../../models/ADAM_unidades.js";

import cron from "node-cron";
import { exec } from "child_process"; 
import { promisify } from "util";
import { fileURLToPath } from "url";
import { dirname, join } from "path"; //

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let arrayResultado = [];


const obtenerGrupos = async () => {
    const token = await ADAM_token.findOne({
      attributes: ["token"],
      where: {
        id: 1,
      },
    });
  
    const scriptPath = join(__dirname, "../tareas/jobsPy/obtenerUnidades.py"); 
  
    try {
      const { stdout, stderr } = await execAsync(`python ${scriptPath} ${token.token}`);
      
      if (stderr) {
        console.error("Error en el script Python:", stderr);
        return;
      }
  
      const resultado = JSON.parse(stdout);
      const unidades = resultado.data;  // Aquí accedemos a la propiedad 'data' que es un array
  
       unidades.map(async (unidad) => {
           
         const existe = await ADAM_unidades.findOne({
          where: {
            device_id: unidad.deviceid,
          },
        });
  
        if (!existe) {          
          await ADAM_unidades.create({
            nom_patente : unidad.carlicence,
            device_id : unidad.deviceid,
            grupo_id : unidad.groupid,
            canales : unidad.channels,
            ip_registro : unidad.registerip,
            puerto_registro : unidad.registerport,
            puerto_transmision : unidad.transmitport,
            linktype : unidad.linktype,
            devicetype : unidad.devicetype,          
            est_activo : 1            
          });
        }/*  else {
          await ADAM_grupos.update(
            {
                nom_patente : unidad.carlicence,               
                grupo_id : unidad.groupid,
                canales : unidad.channels,
                ip_registro : unidad.registerip,
                puerto_registro : unidad.registerport,
                puerto_transmision : unidad.transmitport,
                linktype : unidad.linktype,
                devicetype : unidad.devicetype,          
              },
            {
              where: {
                device_id : unidad.device_id,
              },
            }
          );  
        }  */
      });  
  
    } catch (error) {
      console.error(`Error al ejecutar el script Python: ${error}`);
      return;
    }
  };
  

// cada 15 minutos
cron.schedule("*/30 * * * *", () => {
  console.log("Tarea obtener unidades siendo ejecutada...");
  obtenerGrupos();
});
