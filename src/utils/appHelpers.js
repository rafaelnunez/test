import Cookies from "js-cookie"
import ENV from "../../enviroment.json"

// pseudo-random character function
const randomChars = () => (Math.random() + 1).toString(36).substring(2, 7)
const widgetModuleNameRandom = randomChars()

const appEnviroment = String(process.env.VUE_APP_ENVIROMENT).toLowerCase()
const baseApiUrl = ENV[appEnviroment]["BASE_API_URL"]
const baseUrl = ENV[appEnviroment]["BASE_URL"]
const isWidget = process.env.VUE_APP_IS_WIDGET === "true"
const baseApiConfigUrl = getEnv("BASE_API_CONFIG_URL")
const widgetModuleName = ENV["WIDGET_MODULE_NAME"] || widgetModuleNameRandom
const prefixPath = "admin/"
// Use the "en-US" format, as is the default formatfor displaying prices in Alegra.
const numberFormatterInstance = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

/**
 * Returns a tring with the number formated, with 2 digits
 * @param {Number} number to be formated
 */
const numberFormatter = number => numberFormatterInstance.format(number)

/**
 * Returns the value from enviroment.json or process.env, taking in account the appEnviroment of the user (local, testing or production), in this order:
 *  - Fisrt, try to get the ENV[appEnviroment][key]
 *  - Then if not found, try to get the ENV[key]
 *  - Lastly, if not found, try to get the process.env[key]
 * @param {String} key to look for
 * @param {String} env must be "local", "testing" or "production". Defaults to: `process.env.VUE_APP_ENVIROMENT`
 */
function getEnv(key, env = appEnviroment) {
  if (ENV[env]?.[key]) {
    return ENV[env]?.[key]
  } else if (ENV?.[key]) {
    return ENV?.[key]
  } else if (process.env[key]) {
    return process.env[key]
  }
  return null
}

/**
 * Returns wheater the app can be mounted, dependeing if the cookie of Alegra session is present.
 */
function canBeMounted() {
  const cookieTokenKey = getEnv("COOKIE_TOKEN") // ENV[appEnviroment][]

  if (appEnviroment === "production" && !Cookies.get(cookieTokenKey)) return false

  return true
}

/**
 * Take only specified keys of the object passed as argument
 * @param {Object} obj to take keys from
 * @param {Array<String>} keys Array of Strings that contains the keys to get from the object
 */
function pick(obj, keys) {
  return Object.keys(obj)
    .filter(i => keys.includes(i))
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}

export {
  // constants
  appEnviroment,
  baseApiUrl,
  baseUrl,
  baseApiConfigUrl,
  isWidget,
  widgetModuleName,
  prefixPath,
  // methods
  numberFormatter,
  canBeMounted,
  pick,
  getEnv
}
