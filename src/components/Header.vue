<template>
  <v-toolbar color="#1B682F" height="100">
    <router-link v-if="$route.name == 'landing'" to="/">
      <img class="logo" :src="require('../assets/logo.png')" />
      <img :src="require('../assets/name.png')" height="50px" />
    </router-link>
    <router-link v-else to="/home">
      <img class="logo" :src="require('../assets/logo.png')" />
      <img :src="require('../assets/name.png')" height="50px" />
    </router-link>
    <v-spacer></v-spacer>
    <v-btn text v-if="$route.name == 'landing'" class="item" to="/">Home</v-btn>
    <v-btn text v-if="$route.name != 'landing'" class="item" to="/home">Home</v-btn>
    <Login v-if="$route.name == 'landing'" />
    <Signup v-if="$route.name == 'landing'" />
    <v-btn text v-if="$route.name != 'landing'" class="item" to="/gameboard">Play</v-btn>
    <v-btn text v-if="$route.name != 'landing'" class="item" to="/account">Account</v-btn>
    <v-btn text v-if="$route.name != 'landing'" class="item" to="/">Sign out</v-btn>
  </v-toolbar>
</template>

<script>
import Signup from "./Signup.vue";
import Login from "./Login.vue";

export default {
  components: {
    Signup,
    Login
  },
  data: () => ({
    loggedIn: false
  })
};
</script>
<style>
.title {
  font-family: "Montserrat", sans-serif;
  font-size: 30px !important;
  font-weight: bold;
}
.item {
  font-family: "Montserrat", sans-serif;
  font-size: 15px !important;
  font-weight: bold !important;
  color: white !important;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
