import axios from "axios"

// "http://localhost:8081"
const BACKEND_DOMAIN = process.env.VUE_APP_API_URL

const HEADERS = {
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json;charset=utf-8",
}

export default {
  async request(method, url, data) {
    const instance = axios.create({})
    // const token = store.getters["auth/getToken"]
    if (!url.startsWidth("http")) url = BACKEND_DOMAIN + url
    try {
      const response = await instance({ headers: HEADERS, method, url, data })
      // Success 🎉
      console.log(response)
    } catch (error) {
      // Error 😨
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log("Error", error.message)
      }
      console.log(error)
    }
  },
}
