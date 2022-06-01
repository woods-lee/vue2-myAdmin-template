<template>
  <v-app>
    <AppBar />
    <SideBar />
    <v-main style="margin: 75px 30px 75px 30px">
      <router-view></router-view>
    </v-main>
    <RightSettingMenuVue />
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
  data: () => ({
    drawer: true,
    mini: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
  }),
}
</script>

<style lang="scss"></style>
