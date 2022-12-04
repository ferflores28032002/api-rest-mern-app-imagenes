// Controladores
import { generarJWT } from "../helpers/jwt.js"
import { userModel } from "../models/usuarios.model.js"
import { imagenesModel } from "../models/imagenes.model.js"

import bcryptjs from 'bcryptjs'
import { uploadImage } from "../helpers/cloudinary.js"

export const Login = async (req, res) => {

    const { email, password } = req.body


    const usuario = await userModel.findOne({ email })


    if((usuario) && (await bcryptjs.compare(password, usuario.password))) {


        // Si todo es valido --> generamos el token de autenticacion con jwt
        const token = await generarJWT(
            usuario.name,
            usuario.email,
            usuario._id,
        );
        
        res.json({
            msg: "usuario encontrado correctamente",
            usuario,
            token
        })
    }else {
        return res.status(400).json({
            msg: "El usuario no existe"
        })
    }


}


export const Register = async (req, res) => {

    const { name, apellidos, email, password } = req.body

    try {


        const userRegistrado = await userModel.findOne({ email })

        if(userRegistrado) {
            return res.status(400).json({
                msg: "¡El email ya corresponde a un usuario!"
            })
        }

        const passHash = await bcryptjs.hash(password, 8)
        const usuario = await userModel.create({name, apellidos, email, password: passHash, imagenes: []   })
        
        res.json({
            msg: "¡Se ha Registrado correctamente!"
        })

    } catch (error) {
        console.log(error)
    }
    
}



export const addImagenes = async (req, res) => {

    const { imagen, name, description } = req.body
    const { id } = req.params

    try {
        
        const user = await userModel.findById({ _id: id })

        if(user) {

            const results = await uploadImage(imagen);

            const { public_id, secure_url } = results;

            // Lo guardamos en los datos del usuario para ver las imagenes que el subio
            user.imagenes.push({id: public_id, url: secure_url})

            await user.save()  //Guardamos el usuario

            const imagenGuardada = await imagenesModel.create({name, description, image_id: public_id, image_url: secure_url})

            res.status(200).json({
                msg: "Imagen subida correctamente"
            })

        }else {
            res.status(401).json({
                msg: "Error al subir la imagen a cloudinary"
            })
        }

    } catch (error) {
        console.log(error)
    }
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



export const searchUserForId = async (req, res) => {

    const { id } = req.params
    try {
        
        const usuario = await userModel.findOne({ _id: id })

        if(!usuario) {
            return res.status(404).json({
                msg: "no existe un usuario con ese id"
            })
        }else {
            return res.json({
                usuario
            })
        }


    } catch (error) {
        console.log(error)
    }
}


export const loadImages = async (req, res) => {

    try {

        const imagenes = await imagenesModel.find()


        res.json({
            imagenes
        })

    } catch (error) {
        console.log(error)
    }

}

export const searchImagenesForName = async (req, res) => {

    const { name } = req.body

    try {
        
        const imagenes = await imagenesModel.find()

        const resultado = imagenes.filter((imagen) => imagen.name.toLowerCase().includes(name.toLocaleLowerCase()));


        if (resultado.length === 0) {
            return res.json({
                msg: "¡No hay imagenes con ese nombre!",
            });
        }else {

            return res.json({
                resultado,
            });
        }



    } catch (error) {
        console.log(error)
    }
}