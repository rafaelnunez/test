import ENV from "../../enviroment.json"

const appEnviroment = String(process.env.VUE_APP_ENVIROMENT).toLowerCase()
const baseApiUrl = ENV[appEnviroment]["BASE_API_URL"]
const baseUrl = ENV[appEnviroment]["BASE_URL"]

export default ({ Vue }) => {
  Vue.prototype.$sm = {
    ...Vue.prototype.$sm,
    baseApiUrl,
    baseUrl
  }
}
