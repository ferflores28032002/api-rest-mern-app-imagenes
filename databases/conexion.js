
import mongoose from "mongoose";
import { RUTA_MONGOOSE } from "../env/configEnv.js";


try {
    
    mongoose.connect(RUTA_MONGOOSE)

    console.log("¡Conectado exitosamente a MongoDB!")


} catch (error) {
    console.log("Error al conectar con mongoose -> " + error)
}