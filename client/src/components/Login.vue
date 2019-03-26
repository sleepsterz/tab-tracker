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
                  id="email"
                  v-model="email"/>
                <input 
                <v-text-field  
                  label="Password"
                  id="password"
                  v-model="password"/>
                <br>
                <div class="error" v-html="error" />
                <br>
                <v-btn
                  class="cyan"
                  @click="Login">
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
    return{
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
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(response.data)
    }
  }
};
</script>

<style scoped>
.error { 
  color: red;
}
</style>