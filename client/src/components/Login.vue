<template>
  <v-app id="inspire" dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <div class="gray elevation-2">
              <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field
                  label="Email"
                  v-model="email"
                ></v-text-field>
                <br>
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
                ></v-text-field>
                <br>
                <div class="error" v-html="error" />
                <br>
                <v-btn
                  dark
                  class="cyan"
                  @click="login">
                  Login
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error { 
  color: red;
}
</style>