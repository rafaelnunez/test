import axios from "axios"
import ENVIRONMENT from "../../enviroment.json"

const APP_ENV = process.env.VUE_APP_ENVIROMENT

export const services = axios.create({
  baseURL: ENVIRONMENT[APP_ENV]["BASE_URL"],
  headers: {
    Authorization: `Bearer test`,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})
