export default {
  pagination(page, perPage, defaultList) {
    let arr = []
    let first = (page - 1) * perPage
    let last = page * perPage - 1
    defaultList.forEach((v, i) => {
      if (first <= i && i <= last) {
        arr.push(v)
      }
    })
    return arr
  },
  getImgDefault(filename) {
    let image = ""
    // if (filename === "noImg") return null
    if (filename === "") image = "default-n.png"
    // exam) logo_infini/infinigru-kr-logo-n.png
    if (process.env.NODE_ENV === "local") {
      try {
        image = require(`@/assets/img/${filename}`)
      } catch (error) {
        image = require(`@/assets/img/default-n.png`)
      }
      return image
    } else {
      try {
        image = require(`@/assets/img/${filename}`)
      } catch (error) {
        image = require(`@/assets/img/default.png`)
      }
      return image
    }
  },
}
