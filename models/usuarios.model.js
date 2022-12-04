
import { Schema, model } from "mongoose"


const usuarios = new Schema({
    name: {
        type: String
    },
    apellidos:{
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    imagenes: {
        type: [{}]
    }
})


export const userModel = model("usuarios", usuarios)