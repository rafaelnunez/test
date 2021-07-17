// import { getAddon, getAddonsMembership, createAddon, updateAddon, deleteAddon } from "@/api/addon"
// import store from "@/store"
// import feature from "@/models/feature"

// const actions = {
//   getAddonAction(context, id) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         store.set("addons/loading", true)
//         const { data } = await getAddon(id)
//         if (data.results) {
//           store.set("addons/addon", feature.toFeatures(data.results))
//           delete data.results
//           store.set("addons/loading", false)
//         }
//         resolve()
//       } catch (e) {
//         reject(e)
//       } finally {
//         store.set("addons/loading", false)
//       }
//     })
//   },
//   getAddonsMembershipAction(context, idMembership) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         store.set("addons/loading", true)
//         const { data } = await getAddonsMembership(idMembership)
//         if (data.results) {
//           store.set("addons/addonsMembership", data.results)
//         }
//         resolve()
//       } catch (e) {
//         reject(e)
//       } finally {
//         store.set("addons/loading", false)
//       }
//     })
//   },
//   createAddonAction(context, payload) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         store.set("addons/loading", true)
//         const { data } = await createAddon(payload.idMembership, payload.body)
//         if (data.results) {
//           store.set("addons/loading", false)
//         }
//         resolve()
//       } catch (e) {
//         reject(e)
//       } finally {
//         store.set("addons/loading", false)
//       }
//     })
//   },
//   updateAddonAction(context, payload) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         store.set("addons/loading", true)
//         const { data } = await updateAddon(payload.id, payload.body)
//         if (data.results) {
//           store.set("addons/loading", false)
//         }
//         resolve()
//       } catch (e) {
//         reject(e)
//       } finally {
//         store.set("addons/loading", false)
//       }
//     })
//   },
//   deleteAddonAction(context, id) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         store.set("addons/loading", true)
//         const { data } = await deleteAddon(id)
//         if (data.results) {
//           store.set("addons/loading", false)
//         }
//         resolve()
//       } catch (e) {
//         reject(e)
//       } finally {
//         store.set("addons/loading", false)
//       }
//     })
//   }
// }

// export default actions
