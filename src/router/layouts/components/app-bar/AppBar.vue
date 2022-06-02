<template>
  <v-app-bar style="z-index: 5" fixed flat absolute>
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
        <p
          class="mb-0 text-h5 primary--text"
          :style="
            $vuetify.theme.themes['light']['primary'] === '#ffffff'
              ? 'text-shadow: 1px 1px 1px #111111'
              : ''
          "
        >
          FASSKER WORLD
        </p>
      </v-slide-x-transition>
    </router-link>

    <v-spacer></v-spacer>

    <!-- Right Content -->
    <v-text-field
      rounded
      dense
      outlined
      prepend-inner-icon="mdi-magnify"
      class="app-bar-search flex-grow-0"
      color="primary"
      hide-details
    ></v-text-field>
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
  data: () => ({}),
  computed: {},
}
</script>

<style lang="scss"></style>
