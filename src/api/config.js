const config = {}

config.membershipsBaseUrl = () => {
  if (process.env.VUE_APP_ENVIROMENT == "PRODUCTION") {
    return {
      url: "http://localhost:8006/api/memberships/",
      token: "c8c303982d459a037c05b0de4250d7ff"
    }
  } else {
    return {
      url: "http://localhost:8006/api/memberships/v1",
      token: "c8c303982d459a037c05b0de4250d7ff"
    }
  }
}

export default config
