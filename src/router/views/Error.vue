<template>
  <v-container style="max-width: 500px" fill-height>
    <v-card class="elevation-0">
      <h2
        class="text-h6 font-weight-semibold text--primary d-flex align-center justify-center"
      >
        <span class="ma-2 text-h4">Page Not Found</span>
        <v-icon color="warning"> mdi-alert </v-icon>
      </h2>
      <p class="text-center">we couldn't find the page you are looking for</p>

      <div class="misc-character d-flex justify-center">
        <v-img max-width="700" src="@/assets/imgs/fassker.png"></v-img>
      </div>
      <p class="text-center text-h3 font-weight-bold">Admin</p>
      <div class="d-flex justify-center">
        <v-btn dark color="black" to="/" class="mb-4"> Back to home </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ErrorView",
  data: () => ({}),
}
</script>

<style lang="scss"></style>
