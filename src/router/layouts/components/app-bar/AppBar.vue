<template>
  <!-- color="transparent" -->
  <v-app-bar
    style="z-index: 999"
    fixed
    flat
    absolute
    @toggle="$vuetify.breakpoint.lgAndUp ? (mini = !mini) : (drawer = !drawer)"
  >
    <!-- Left Content -->
    <v-app-bar-nav-icon
      class="d-lg-none"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <router-link
      to="/home"
      class="mr-5 d-flex align-center text-decoration-none"
    >
      <v-img
        :src="require('@/assets/imgs/app-icon.png')"
        max-height="30px"
        max-width="30px"
        alt="logo"
        contain
        eager
        class="app-logo me-3"
      ></v-img>
      <v-slide-x-transition>
        <h2 class="app-title">FASSKER ADMIN</h2>
      </v-slide-x-transition>
    </router-link>

    <v-text-field
      rounded
      dense
      outlined
      prepend-inner-icon="mdi-magnify"
      class="app-bar-search flex-grow-0"
      color="black"
      hide-details
    ></v-text-field>

    <v-spacer></v-spacer>

    <!-- Right Content -->
    <a
      href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
      target="_blank"
      rel="nofollow"
      class="text-decoration-none"
    >
      <v-icon class="ms-6 me-4"> mdi-github </v-icon>
    </a>

    <v-btn icon small class="ms-3">
      <v-icon> mdi-bell-outline </v-icon>
    </v-btn>
    <AppBarUserMenuVue />
  </v-app-bar>
</template>
<script>
import AppBarUserMenuVue from "./AppBarUserMenu.vue"

export default {
  components: {
    AppBarUserMenuVue,
  },
  data: () => ({
    drawer: true,
    mini: true,
  }),
}
</script>

<style lang="scss"></style>
