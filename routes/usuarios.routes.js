import { Router } from "express";
import { loadUsers, Login, Register, revalidarToken } from "../controllers/usuarios.controllers.js";
import { validarJWT } from "../helpers/validarJWT.js";

const router = Router();

router.get("/users", loadUsers);
router.post("/login", Login);
router.post("/register", Register);
router.get("/renew/token", validarJWT, revalidarToken);

export default router;
