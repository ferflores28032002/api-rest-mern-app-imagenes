import { response } from "express";
import jwt from "jsonwebtoken";
import { PALABRA_SECRETA } from "../env/configEnv.js";

export const validarJWT = (req, res = response, next) => {
  // Como voy a recibir el jwt --> Utilizaremos los header
  // Lo pedimos como (x-token en los header)

  const token = req.header("x-token");

  // Validamos el jwt

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "¡No hay token en la petición",
    });
  }

  try {
    const { id, name, email } = jwt.verify(token, PALABRA_SECRETA);

    // Mandamos los datos por medio del request

    req.id = id;
    req.name = name;
    req.email = email;
    
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  next();
};