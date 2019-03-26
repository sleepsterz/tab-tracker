<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
    <v-btn flat dark to="home">
      <v-icon x-large>home</v-icon>
    </v-btn>
    </v-toolbar-items>
      <v-toolbar-title class="mr-4">
        TabTracker
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat dark>
          Browse
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn flat dark to="register">
            Sign Up
          </v-btn>
          <v-btn flat dark to="login">
            Log In
          </v-btn>
      </v-toolbar-items>      
  </v-toolbar>
</template>

<script>
export default{

}
</script>

<style scoped>
</style>
