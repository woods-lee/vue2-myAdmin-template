<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    mini-variant-width="80px"
    app
    floating
    class="app-side-bar-menu"
  >
    <!-- expand-on-hover -->
    <v-divider class="mt-14"></v-divider>
    <!-- Navigation Items -->
    <v-list expand shaped class="vertical-nav-menu-items pr-5">
      <page title="Home" :to="{ name: 'Home' }" icon="mdi-home-outline"></page>
      <page
        title="About"
        :to="{ name: 'About' }"
        icon="mdi-view-dashboard"
      ></page>
      <page
        title="Intro"
        :to="{ name: 'Intro' }"
        icon="mdi-information-variant"
      ></page>
      <page
        title="TableExam"
        :to="{ name: 'TableExam' }"
        icon="mdi-apps"
      ></page>
      <TabPage title="Pages" icon="mdi-book-open-page-variant-outline">
        <page title="Test" :to="{ name: 'Test' }" icon="mdi-alert"></page>
        <page
          title="Login"
          :to="{ name: 'Login' }"
          icon="mdi-numeric-1-circle-outline"
          target="_blank"
        ></page>
        <page
          title="Register"
          :to="{ name: 'Register' }"
          icon="mdi-numeric-2-circle-outline"
          target="_blank"
        ></page>
        <page
          title="Error"
          :to="{ name: 'error-404' }"
          icon="mdi-numeric-3-circle-outline"
          target="_blank"
        ></page>
      </TabPage>
    </v-list>
    <!-- Navigation Items -->
  </v-navigation-drawer>
</template>
<script>
import Page from "./SideBarPage.vue"
import TabPage from "./SideBarTab.vue"

export default {
  components: {
    Page,
    TabPage,
  },
  data: () => ({
    drawer: true,
    mini: false,
  }),
}
</script>

<style lang="scss">
.app-navigation-menu {
  .v-list-item {
    &.side-bar-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}
</style>
