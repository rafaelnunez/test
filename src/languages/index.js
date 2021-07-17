import { countriesMapping /* , allCountries  */ } from "@alegradev/smile-ui-alegra"
import { merge } from "lodash-es"

/**
 * Fetch the languages files and return it's content merged
 * @param {String} languageString User lenguage. Formats: 'es' | 'es_CO'.
 * @param {String} appVersion Alegra User versión (country).
 * @returns {Object} Language files content merged
 */
export async function getLanguageFilesContents(languageString, appVersion) {
  // Parse languageString to get Language and Country
  // It could be in one of this formats: 'es' | 'es_CO'
  const lc = parseLanguageString(languageString)

  // If country is not present on languageString, parse appVersion to get the country.
  if (!lc.country) {
    lc.country = countriesMapping[appVersion]
  }

  let languageFile
  let languageCountryFile
  try {
    languageFile = await import(`./${lc.language}`)
    languageFile = languageFile.default
  } catch (e) {
    // Lang file not found, languageCountryFile woun't be found either...
    languageFile = await import(`./en`)
    return languageFile.default
  }

  try {
    languageCountryFile = await import(`./${lc.language}/locale/${lc.language}_${lc.country}.js`)
    languageCountryFile = languageCountryFile.default
  } catch (e) {
    // languageCountryFile not found, set it as an empty object
    languageCountryFile = {}
  }

  // Merge strategy:
  // languageFile < languageCountryFile < AlegraCompanyDictionary
  // Where:
  //   - AlegraCompanyDictionary overrides languageCountryFile
  //   - languageCountryFile overrides languageFile

  return merge(languageFile, languageCountryFile)
}

function parseLanguageString(languageString) {
  if (languageString.includes("_")) {
    const res = languageString.split("_")
    return {
      language: res[0],
      country: res[1]
    }
  }
  return {
    language: languageString,
    country: null
  }
}

export function getDictonaryFromWidget(widgetDictionary, languageString, appVersion) {
  const lc = parseLanguageString(languageString)

  // If country is not present on languageString, parse appVersion to get the country.
  if (!lc.country) {
    lc.country = countriesMapping[appVersion]
  }

  let languageFile
  let languageCountryFile
  try {
    languageFile = widgetDictionary[lc.language]["common"]
  } catch (e) {
    // Lang file not found, languageCountryFile woun't be found either...
    languageFile = {}
  }

  try {
    languageCountryFile = widgetDictionary[lc.language]["locale"][`${lc.language}_${lc.country}`]
  } catch (e) {
    // languageCountryFile not found, set it as an empty object
    languageCountryFile = {}
  }

  return merge(languageFile, languageCountryFile)
}
