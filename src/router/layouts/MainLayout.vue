<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main
      id="mainBody"
      :class="!$vuetify.breakpoint.mdAndDown ? 'sidebar-open' : 'sidebar-hover'"
    >
      <router-view></router-view>
    </v-main>
    <RightSettingMenuVue />
    <!-- SideBarHoverToggleBtn-->
    <v-btn
      v-if="
        sideBarOnHover == false &&
        sideBar == false &&
        !$vuetify.breakpoint.mdAndDown
      "
      x-small
      fab
      class="sidebar-open-btn elevation-10"
      color="primary"
      @click="sideBar = !sideBar"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
    <v-btn
      v-if="
        sideBarOnHover == false &&
        sideBar == true &&
        !$vuetify.breakpoint.mdAndDown
      "
      x-small
      fab
      class="sidebar-close-btn elevation-15"
      color="white"
      @click="sideBar = !sideBar"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <!-- SideBarHoverToggleBtn-->
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import AppBar from "./components/app-bar/AppBar.vue"
import SideBar from "./components/side-bar/SideBar.vue"
import RightSettingMenuVue from "./components/RightSettingMenu.vue"

export default {
  name: "MainLayout",
  components: {
    AppBar,
    RightSettingMenuVue,
    SideBar,
  },
  data: () => ({}),
  mounted() {
    this.refreshSideBar()
  },
  computed: {
    sideBar: {
      get() {
        return this.$store.getters["base/getSideBar"]
      },
      set(v) {
        this.$store.dispatch("base/setState", { sideBar: v })
      },
    },
    sideBarOnHover: {
      get() {
        return this.$store.getters["base/getSideBarOnHover"]
      },
      set(v) {
        this.$store.dispatch("base/setState", { sideBarOnHover: v })
      },
    },
  },
  watch: {
    sideBar: {
      handler(value) {
        let main = document.querySelector("#mainBody")
        if (!value) return main.classList.remove("sidebar-open")
        else {
          main.classList.remove("sidebar-open")
          main.classList.add("sidebar-open")
        }
      },
    },
    sideBarOnHover: {
      handler(value) {
        let main = document.querySelector("#mainBody")
        if (value) {
          main.classList.remove("sidebar-open")
          main.classList.add("sidebar-hover")
        }
        if (!value) {
          main.classList.remove("sidebar-hover")
          main.classList.add("sidebar-open")
        }
      },
    },
  },
  methods: {
    refreshSideBar() {
      // 화면크기별로 사이드바 동적세팅
      let main = document.querySelector("#mainBody")
      if (this.sideBarOnHover) {
        main.classList.remove("sidebar-open")
        main.classList.add("sidebar-hover")
      }
      if (!this.sideBar) {
        main.classList.remove("sidebar-open")
      }
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.sideBarOnHover = true
      }
      if (this.$vuetify.breakpoint.mdAndDown && this.sideBarOnHover) {
        this.sideBarOnHover = !this.sideBarOnHover
      }
      if (!this.$vuetify.breakpoint.mdAndDown && this.sideBarOnHover) {
        this.sideBarOnHover = false
      }
    },
  },
}
</script>

<style lang="scss">
.v-main {
  margin: 75px 30px 75px 50px;
}
.v-main.sidebar-open {
  margin: 75px 30px 75px 255px;
}
.v-main.sidebar-hover {
  margin: 75px 30px 75px 80px;
}
.sidebar-open-btn {
  position: fixed !important;
  top: 72px;
  left: 2px;
  z-index: 10;
}
.sidebar-close-btn {
  position: fixed !important;
  top: 72px;
  left: 200px;
  z-index: 10;
}
</style>
