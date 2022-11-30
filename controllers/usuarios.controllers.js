// Controladores
import { generarJWT } from "../helpers/jwt.js"
import { userModel } from "../models/usuarios.model.js"

export const Login = async (req, res) => {


    
    // Si todo es valido --> generamos el token de autenticacion con jwt
    const token = await generarJWT(
        // usuario.name,
        // usuario.email,
        // usuario.id,
    );

    //Mandamos en la respuesta un status 201 - token - datos del usuario
}


export const Register = async (req, res) => {
    console.log("register")
    
}


export const loadUsers = async (req, res) => {

    try {
        
        const usuarios = await userModel.find()

        res.json({
            usuarios
        })

    } catch (error) {
        console.log(error)
    }



}


export const revalidarToken = async (req, res) => {
    const { name, id , email } = req;
  
    // Generamos un nuevo jwt
    const token = await generarJWT(name, email, id);
  
    res.json({
      msg: "¡Nuevo token del usuario autenticado!",
      name,
      id,
      email,
      token,
    });
  };
  