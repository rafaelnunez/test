import { services } from "@/services/index"
import { prefixPath } from "@/utils/appHelpers"

export function getAddon(id) {
  const version = "v1/"
  return services.get(`${version}${prefixPath}addons/${id}`)
}

export function getAddonsMembership(idMembership) {
  const version = "v1/"
  return services.get(`${version}${prefixPath}subscriptions/${idMembership}/addons`)
}

export function createAddon(idMembership, data) {
  const version = "v1/"
  return services.post(`${version}${prefixPath}subscriptions/${idMembership}/addons`, data)
}

export function updateAddon(id, data) {
  const version = "v1/"
  return services.put(`${version}${prefixPath}addons/${id}`, data)
}

export function deleteAddon(id) {
  const version = "v1/"
  return services.delete(`${version}${prefixPath}addons/${id}`)
}
