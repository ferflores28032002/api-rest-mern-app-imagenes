import dotenv from "dotenv";

dotenv.config({ path: "./env/.env" });

export const PUERTO = process.env.PORT;
export const RUTA_MONGOOSE = process.env.RUTA;
export const PALABRA_SECRETA = process.env.PALABRA_SECRETA;



// Configuraciones de cloudinary

export const cloud_name = process.env.CLOUD_NAME;
export const api_key = process.env.API_KEY;
export const api_secrect = process.env.API_SECRECT;
