import jwt from "jsonwebtoken";
import { PALABRA_SECRETA } from "../env/configEnv.js";

// Generamos el token de acceso a lo usuarios al loguearse
export const generarJWT = (name, email, id) => {
  return new Promise((resolve, reject) => {
    
    const payload = { name, email, id };

    jwt.sign( payload, PALABRA_SECRETA,{ expiresIn: "2h" },
      (error, token) => {
        if (error){
          console.log(error);
          reject("No se pudo generar el token");
        }
        resolve(token);
      }
    );
  });
};
