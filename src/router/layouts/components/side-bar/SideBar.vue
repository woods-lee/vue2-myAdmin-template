<template>
  <v-navigation-drawer
    v-model="sideBar"
    :expand-on-hover="sideBarOnHover || $vuetify.breakpoint.mdAndDown"
    :hide-overlay="true"
    mini-variant-width="80px"
    :mini-variant="$vuetify.breakpoint.mdAndDown"
    :permanent="$vuetify.breakpoint.mdAndDown"
    floating
    fixed
    clipped
    style="
      z-index: 2 !important;
      background-color: rgba(255, 255, 255, 0.8);
      border: 0;
    "
  >
    <div class="mt-14"></div>
    <!-- Navigation Items -->
    <v-list expand shaped class="side-bar-menu-items pr-5">
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
  data: () => ({}),
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
/* 사이드바 크기 줄어들시 스크롤 제거 */
.v-navigation-drawer__content {
  overflow-y: hidden !important;
}
</style>
