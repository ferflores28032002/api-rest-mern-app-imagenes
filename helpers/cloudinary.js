import { v2 as cloudinary } from "cloudinary";
import { api_key, api_secrect, cloud_name } from "../env/configEnv.js";

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secrect,
  secure: true,
});


export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "imagenes-mern",
  });
};

export const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id)
}