import { services } from "@/services/index"
import { prefixPath } from "@/utils/appHelpers"

export function getProduct(id) {
  return services.get(`${prefixPath}product/${id}`)
}

export function getProducts() {
  return services.get(`${prefixPath}product/`)
}

export function getProductCategories() {
  return services.get(`${prefixPath}product-category/`)
}

// export function createProduct(idMembership, data) {
//   return services.post(`${prefixPath}subscriptions/${idMembership}/addons`, data)
// }

// export function updateProduct(id, data) {
//   return services.put(`${prefixPath}product/${id}`, data)
// }

// export function deleteProduct(id) {
//   return services.delete(`${prefixPath}product/${id}`)
// }
