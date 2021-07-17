import Pusher from "pusher-js"

let pusher = null
let channel = null
let pusherKey = process.env.VUE_APP_PUSHER_KEY || ""
let pusherChannel = process.env.VUE_APP_PUSHER_CHANNEL || ""

// Uncomment the next line to show pusher log
const APP_ENVIROMENT = String(process.env.VUE_APP_ENVIROMENT).toLowerCase()
if (APP_ENVIROMENT === "local" || APP_ENVIROMENT === "testing") {
  // Pusher.logToConsole = true
}

export default ({ Vue }) => {
  if (pusherKey.length && pusherChannel.length) {
    pusher = new Pusher(pusherKey, {
      cluster: "us2",
      forceTLS: true
    })
    channel = pusher.subscribe(pusherChannel)

    // Adds the channel to Vue prototype, so it can bind easily yo events.
    Vue.prototype.$pc = channel
  }
}

const destroyChannel = (channelName = pusherChannel) => {
  if (pusher) {
    pusher.unsubscribe(channelName)
    channel = null
  }
}

export { pusher, channel, destroyChannel }
