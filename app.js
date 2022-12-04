import express from "express";
import cors from "cors";
import { PUERTO } from "./env/configEnv.js";
import usuariosRouter from "./routes/usuarios.routes.js";

// Importamos la conexion a mongodb
import "./databases/conexion.js";

const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb"}));
app.use(cors());

// RUTAS QUE UNEN A LOS CONTROLADORES Y LOS MODELOS
app.use(usuariosRouter);

app.listen(PUERTO, () =>
  console.log("Servidor ejecutandose en el puerto -> " + PUERTO)
);
