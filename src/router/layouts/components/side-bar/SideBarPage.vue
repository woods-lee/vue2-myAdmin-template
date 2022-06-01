<template>
  <v-list-item
    class="side-bar-menu-link"
    v-bind="$attrs"
    active-class="bg-gradient-primary white--text"
  >
    <v-list-item-icon>
      <v-icon class="mx-auto">
        {{ icon || "mdi-checkbox" }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-title>
      {{ title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
// import { mdiCheckboxBlankCircleOutline } from "@mdi/js"

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
.side-bar-menu-link {
  &.v-list-item--active {
    box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
  }
}
</style>
