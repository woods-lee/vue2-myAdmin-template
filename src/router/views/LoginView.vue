<template>
  <v-container style="max-width: 450px" fill-height>
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card class="auth-card">
          <!-- logo -->
          <v-card-title class="d-flex align-center justify-center py-7">
            <v-img
              :src="require('@/assets/imgs/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>

            <h2 class="font-weight-bold black--text">FASSKER</h2>
          </v-card-title>

          <!-- title -->
          <v-card-text>
            <p class="text-h6 font-weight-semibold text--primary mb-2">
              Welcome to FASSKER!
            </p>
            <p class="mb-2">
              Please sign-in to your account and start the adminst
            </p>
          </v-card-text>

          <!-- login form -->
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userId"
                outlined
                color="primary"
                label="ID"
                placeholder=""
                hide-details
                class="mb-3"
              ></v-text-field>

              <v-text-field
                v-model="password"
                outlined
                color="primary"
                :type="isPasswordVisible ? 'text' : 'password'"
                label="Password"
                placeholder=""
                :append-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                hide-details
                @click:append="isPasswordVisible = !isPasswordVisible"
              ></v-text-field>

              <v-btn @click="onSubmit" block color="primary" class="mt-6">
                Login
              </v-btn>
            </v-form>
          </v-card-text>

          <!-- create new account  -->
          <v-card-text
            class="d-flex align-center justify-center flex-wrap mt-2"
          >
            <span class="me-2"> New on our platform? </span>
            <router-link :to="{ name: 'Register' }">
              Create an account
            </router-link>
          </v-card-text>

          <!-- divider -->
          <v-card-text class="d-flex align-center mt-2">
            <v-divider></v-divider>
            <span class="mx-5">or</span>
            <v-divider></v-divider>
          </v-card-text>

          <!-- social links -->
          <v-card-actions class="d-flex justify-center">
            <v-btn
              v-for="link in socialLink"
              :key="link.icon"
              icon
              class="ms-1"
            >
              <v-icon
                :color="$vuetify.theme.dark ? link.colorInDark : link.color"
              >
                {{ link.icon }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    isPasswordVisible: false,
    userId: "",
    password: "",
    socialLink: [
      { icon: "mdi-facebook", color: "#4267b2", colorInDark: "#4267b2" },
      { icon: "mdi-twitter", color: "#1da1f2", colorInDark: "#1da1f2" },
      { icon: "mdi-github", color: "#272727", colorInDark: "#fff" },
      { icon: "mdi-google", color: "#db4437", colorInDark: "#db4437" },
    ],
  }),
  methods: {
    async onSubmit() {
      this.show = true
      setTimeout(() => {
        this.$router.push("/home")
      }, 1000)
    },
  },
  beforeCreate: function () {
    let imageOne = new Image()
    imageOne.src = require("@/assets/imgs/userOne.jpg")
  },
}
</script>
