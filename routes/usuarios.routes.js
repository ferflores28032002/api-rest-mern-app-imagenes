import { Router } from "express";
import { addImagenes, loadImages, loadUsers, Login, Register, revalidarToken, searchImagenesForName, searchUserForId } from "../controllers/usuarios.controllers.js";
import { validarJWT } from "../helpers/validarJWT.js";

const router = Router();

router.get("/users", loadUsers);
router.post("/login", Login);
router.post("/register", Register);
router.get("/user/:id", searchUserForId);
router.post("/imagen/name", searchImagenesForName);


router.post("/add-images/:id", addImagenes);
router.get("/imagenes", loadImages);
router.get("/renew/token", validarJWT, revalidarToken);

export default router;
