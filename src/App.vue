<template>
  <div id="app">
    <Navigation />
    <Notifications />
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';
import Navigation from '@/components/Navigation/Navigation.vue';
import Notifications from '@/components/Notifications/Notifications.vue';

@Component({
  components: {
    Navigation,
    Notifications,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  background-image: linear-gradient(to bottom, #202020, #252a31, #213742, #13454c, #0f524c);
  margin: 0;
  padding: 0;
  font-size: 1vw;
  min-height: 100vh;
}
</style>
