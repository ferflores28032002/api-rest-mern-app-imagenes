import { Schema, model } from "mongoose";

const imagenes = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image_url: {
    type: String,
  },
  image_id: {
    type: String,
  },
});

export const imagenesModel = model("imagenes", imagenes);
