import dotenv from "dotenv";

dotenv.config({ path: "./env/.env" });

export const PUERTO = process.env.PORT;
export const RUTA_MONGOOSE = process.env.RUTA;
export const PALABRA_SECRETA = process.env.PALABRA_SECRETA;
