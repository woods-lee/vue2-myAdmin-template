import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import { en, ko } from "vuetify/es5/locale"
import "@mdi/font/css/materialdesignicons.css" // mdi 아이콘 불러오기

import preset from "./default-preset/preset"

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  // 언어 설정
  lang: {
    locales: { ko, en },
    current: "ko", // 한국어
  },
  // 아이콘 설정
  icons: {
    iconfont: "mdi",
  },
  theme: {
    options: {
      customProperties: true,
      variations: false,
    },
  },
})
