const config = {}

config.membershipsBaseUrl = () => {
  if (process.env.VUE_APP_ENVIROMENT == "PRODUCTION") {
    return {
      url: "http://sva.talana.com:8000/api/",
      token: ""
    }
  } else {
    return {
      url: "http://sva.talana.com:8000/api/",
      token: ""
    }
  }
}

export default config
