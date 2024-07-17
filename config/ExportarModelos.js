import Log from "../models/Log.js";
import Pais from "../models/Pais.js";
import Region from "../models/Region.js";
import Provincias from '../models/Provincias.js'
import Ciudades from '../models/Ciudades.js'
import Perfiles from "../models/Perfiles.js";
import Empresas from "../models/Empresas.js";
import Usuarios from "../models/Usuarios.js";
import EmpresasSistema from "../models/EmpresasSistema.js"
import TipoNotificacion from "../models/TipoNotificacion.js"
import Transportistas from "../models/Transportistas.js"
import Camiones from "../models/Camiones.js"
import Arrastres from "../models/Arrastres.js"
import Token from "../models/Token.js"
import Sensores from "../models/Sensores.js"
import LogSensores from "../models/LogSensores.js"
import CatNotificacion from "../models/CatNotificacion.js"
import ResumenGPS from "../models/ResumenGPS.js"
import Conductores from "../models/Conductores.js"
import ResumenTablet from "../models/ResumenTablet.js"
import UnidadesWialon from "../models/UnidadesWialon.js"
import SesionConductores from "../models/SesionConductores.js"
import GPSTablet from "../models/GPSTablet.js"
import OxSchool from "../models/OxSchool.js";
import CorreosNotificacion from "../models/CorreosNotificacion.js"

import ADAM_alarmas from "../models/ADAM_alarmas.js";
import ADAM_alarmas_ceiba from "../models/ADAM_alarmas_ceiba.js";
import ADAM_detalle_gestion from "../models/ADAM_detalle_gestion.js";
import ADAM_estados_evidencia from "../models/ADAM_estados_evidencia.js";
import ADAM_alerta_unidad from "../models/ADAM_alerta_unidad.js";
import ADAM_grupo_contactos from "../models/ADAM_grupo_contactos.js";
import ADAM_grupos from "../models/ADAM_grupos.js";
import ADAM_unidades from "../models/ADAM_unidades.js";
import ADAM_tipo_alarma from "../models/ADAM_tipo_alarma.js";
import ADAM_token from "../models/ADAM_token.js";
import ADAM_unidad_alarmas from "../models/ADAM_unidad_alarmas.js";
import ADAM_perfiles from "../models/ADAM_perfiles.js";
import ADAM_usuarios from "../models/ADAM_usuarios.js";
import ADAM_usuarios_transportistas from "../models/ADAM_usuarios_transportistas.js";
import ADAM_alarma_transportista from "../models/ADAM_usuarios_transportistas.js";
import ADAM_contacto_transportista from "../models/ADAM_contacto_transportista.js";



const exportarModelos = () =>{
Log, Pais, Region,Provincias,Ciudades,Perfiles,Empresas,Usuarios, EmpresasSistema, TipoNotificacion, Transportistas, CorreosNotificacion,Camiones,Arrastres,Token, Sensores, 
LogSensores, CatNotificacion, ResumenGPS, OxSchool, Conductores, UnidadesWialon, ResumenTablet, SesionConductores, GPSTablet, 

ADAM_alarmas, ADAM_tipo_alarma, ADAM_estados_evidencia, ADAM_token, ADAM_alarmas_ceiba, ADAM_grupos, ADAM_unidades, ADAM_detalle_gestion,   ADAM_grupo_contactos,ADAM_unidad_alarmas, ADAM_perfiles, ADAM_usuarios, ADAM_usuarios_transportistas, ADAM_alarma_transportista, ADAM_contacto_transportista
}

export default exportarModelos