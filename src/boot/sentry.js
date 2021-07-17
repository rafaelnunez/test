import * as Sentry from "@sentry/browser"
import { Vue as VueIntegration } from "@sentry/integrations"

let sentryKey = process.env.VUE_APP_SENTRY_KEY || ""
let sentryProject = process.env.VUE_APP_SENTRY_PROJECT || ""
let APP_ENV = String(process.env.VUE_APP_ENVIROMENT).toLowerCase()

export default ({ Vue }) => {
  if (sentryKey.length && sentryProject.length) {
    Sentry.init({
      environment: String(APP_ENV).toUpperCase(),
      attachStacktrace: "on",
      dsn: `https://${sentryKey}.sentry.io/${sentryProject}`,
      integrations: [new VueIntegration({ Vue, attachProps: true, logErrors: true })]
    })
  }
}
