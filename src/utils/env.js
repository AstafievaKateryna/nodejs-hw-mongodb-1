import dotenv from 'dotenv';
import {CLOUDINARY} from "../constants/index"

dotenv.config();

export const env = (name, defaultValue) => {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing process.env['CLOUDINARY.CLOUD_NAME']`);
};
