<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isAuthenticated">Log in</router-link>
      <router-link to="/register" v-if="!isAuthenticated">Register</router-link>
      <router-link to="/dashboard" v-if="isAuthenticated">Dashboard</router-link>
      <router-link to="/gallery" v-if="isAuthenticated">Gallery</router-link>
      <router-link to="/myaccount" v-if="isAuthenticated">My account</router-link>
      <router-link to="/about" v-if="isAuthenticated">About</router-link>
      <router-link to="/premium" v-if="isAuthenticated">Premium</router-link>
      <a class="logout" v-if="isAuthenticated" @click="logout">Logout</a>
      <span class="accountFunds" v-if="isAuthenticated">
        funds: {{userFunds}} $
      </span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Navigation extends Vue {
  @Getter public isAuthenticated: boolean;
  @Getter public userFunds: number;

  logout(): void {
    this.$store.dispatch('logout')
  }
}
</script>


<style lang="scss">
  #nav {
    padding: 30px;
    font-size: 1.6em;
    a {
      font-weight: bold;
      color: white;
      padding: 0 0.2em;
      margin: 0 1em;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
    .logout:hover {
      text-decoration: underline;
    }
    .accountFunds {
      position: absolute;
      top: 2%;
      right: 2%;
      font-size: 1.1em;
    }
  }
</style>
