<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isAuthenticated">Log in</router-link>
      <router-link to="/register" v-if="!isAuthenticated">Register</router-link>
      <router-link to="/dashboard" v-if="isAuthenticated">Dashboard</router-link>
      <router-link to="/dashboard/gallery" v-if="isAuthenticated">Gallery</router-link>
      <router-link to="/dashboard/myaccount" v-if="isAuthenticated">My account</router-link>
      <router-link to="/dashboard/about" v-if="isAuthenticated">About</router-link>
      <router-link to="/dashboard/premium" v-if="isAuthenticated">Premium</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class App extends Vue {
  @Getter public isAuthenticated: boolean;
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: linear-gradient(to bottom, #202020, #252a31, #213742, #13454c, #0f524c);
  margin: 0;
  padding: 0;
  font-size: 1vw;
  min-height: 100vh;
  #nav {
    padding: 30px;
    font-size: 2em;
    a {
      font-weight: bold;
      color: white;
      padding: 0 0.2em;
      margin: 0 1em;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
