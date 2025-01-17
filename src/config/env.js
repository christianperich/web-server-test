import { config } from "dotenv"
import pkg from 'env-var';

const { get } = pkg;

config()

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

