<template>
  <div>
    <h1>Home</h1>
    <router-link to="/about">about</router-link>
    <br />
    <router-link to="/intro">home</router-link>
    <p>{{ test }}</p>
    <v-btn @click="freeze">freeze</v-btn>
    <v-btn @click="observeTest">observe</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    test: (vm) => vm.$store.getters["base/getTest"],
  },
  methods: {
    freeze() {
      this.$store.dispatch("base/freezeState", { test: { f: { f1: "" } } })
      console.log("freeze Obj : ", this.test)
    },
    observeTest() {
      this.$store.dispatch("base/setState", { test: { o: { o1: "" } } })
      console.log("reactivity obj : ", this.test)
    },
  },
}
</script>
