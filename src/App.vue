<template>
  <component :is="layoutSelector">
    <router-view />
  </component>
</template>

<script>
import LayoutLogin from "@layouts/LoginLayout.vue"
import LayoutBlank from "@layouts/BlankLayout.vue"
import LayoutMain from "@layouts/MainLayout.vue"
export default {
  name: "App",
  components: {
    LayoutLogin,
    LayoutBlank,
    LayoutMain,
  },
  data: () => ({}),
  computed: {
    layoutSelector() {
      console.log(this.$vuetify)
      if (this.$route.name === null) return null

      if (this.$route.meta.layout === "blank") return "LayoutBlank"
      if (this.$route.meta.layout === "login") {
        // if (this.$vuetify.breakpoint.mdAndDown) return null
        return "LayoutLogin"
      }
      return "LayoutMain"
    },
  },
}
</script>
