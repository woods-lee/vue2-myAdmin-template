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
              Adminst starts here 🚀
            </p>
            <p class="mb-2">Make your app management easy and fun!</p>
          </v-card-text>

          <!-- login form -->
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                outlined
                label="Username"
                placeholder="JohnDoe"
                hide-details
                class="mb-3"
                color="primary"
              ></v-text-field>

              <v-text-field
                v-model="email"
                outlined
                label="Email"
                placeholder="john@example.com"
                hide-details
                class="mb-3"
                color="primary"
              ></v-text-field>

              <v-text-field
                v-model="password"
                outlined
                :type="isPasswordVisible ? 'text' : 'password'"
                label="Password"
                placeholder="············"
                :append-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                hide-details
                @click:append="isPasswordVisible = !isPasswordVisible"
                color="primary"
              ></v-text-field>

              <v-checkbox hide-details class="mt-1">
                <template #label>
                  <div class="d-flex align-center flex-wrap">
                    <span class="me-2">I agree to</span
                    ><a href="javascript:void(0)">privacy policy &amp; terms</a>
                  </div>
                </template>
              </v-checkbox>

              <v-btn block color="primary" class="mt-6"> Sign Up </v-btn>
            </v-form>
          </v-card-text>

          <!-- create new account  -->
          <v-card-text
            class="d-flex align-center justify-center flex-wrap mt-2"
          >
            <span class="me-2"> Already have an account? </span>
            <router-link :to="{ name: 'Login' }"> Sign in instead </router-link>
          </v-card-text>

          <!-- divider -->
          <v-card-text class="d-flex align-center mt-2">
            <v-divider></v-divider>
            <span class="mx-5">or</span>
            <v-divider></v-divider>
          </v-card-text>

          <!-- social link -->
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
// eslint-disable-next-line object-curly-newline

export default {
  name: "RegisterView",
  data: () => ({
    isPasswordVisible: false,
    username: "",
    email: "",
    password: "",
    socialLink: [
      {
        icon: "mdi-facebook",
        color: "#4267b2",
        colorInDark: "#4267b2",
      },
      {
        icon: "mdi-twitter",
        color: "#1da1f2",
        colorInDark: "#1da1f2",
      },
      {
        icon: "mdi-github",
        color: "#272727",
        colorInDark: "#fff",
      },
      {
        icon: "mdi-google",
        color: "#db4437",
        colorInDark: "#db4437",
      },
    ],
  }),
}
</script>

<style lang="scss"></style>
