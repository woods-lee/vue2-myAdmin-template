import http from "./axios/index"

const REST_URL = "/api/exam/test/"
const GET = "get"
const POST = "post"
const PUT = "put"
const DELETE = "delete"

export default {
  getFilters(service) {
    return http.request(GET, REST_URL + service + "/filters")
  },
  getDynamicFilters(service) {
    return http.request(GET, REST_URL + service + "/dynamicFilters")
  },
  getDatas(service, payload) {
    return http.request(GET, REST_URL + service + "/datas", payload)
  },
  getDataOne(service, payload) {
    return http.request(GET, REST_URL + service + "/dataOne", payload)
  },
  save(service, payload) {
    return http.request(PUT, REST_URL + service + "/save", payload)
  },
  remove(service, payload) {
    return http.request(DELETE, REST_URL + service + "/remove", payload)
  },
}
