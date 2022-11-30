
import { Schema, model } from "mongoose"


const usuarios = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    }
})


export const userModel = model("usuarios", usuarios)