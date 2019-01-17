<template>
  <div id="Premium">
    <div class="alert alert-success" role="alert" v-if="isSuccess">
      <strong>Well done!</strong> You are actually a {{isPremium ? "Premium user" : "Free User"}}.
    </div>
    <div class="col-xs-12 col-md-5 col-lg-4">
      <article class="comparison premium">
        <div class="pricing">
            <h3>Free trial</h3>
            <h4>0,00&nbsp;$ <span class="month">/ month</span></h4>
            <p class="small">30 days for free*</p>
        </div>
        <ul class="list-features">
            <li>Limited access</li>
            <li>Offline upload</li>
            <li>Rare advertisements</li>
            <li>High quality support</li>
        </ul>
        <button @click="switchToFree(isPremium)" class="btn btn-green btn-block js-button-module-get-premium">
          Start free trial
        </button>
      </article>
    </div>
    <div class="col-xs-12 col-md-5 col-lg-4">
      <article class="comparison premium">
        <div class="pricing">
            <h3>Premium</h3>
            <h4>40,00&nbsp;$ <span class="month">/ month</span></h4>
        </div>
        <ul class="list-features">
            <li>Unlimited space</li>
            <li>Support 24/7</li>
            <li>No ads</li>
            <li>Unlimited downloads</li>
            <li>Unlimited access</li>
        </ul>
        <button @click="buyPremium(isPremium)" class="btn btn-green btn-block js-button-module-get-premium">
          Buy premium
        </button>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import { Getter } from 'vuex-class';

@Component
export default class Premium extends Vue {

  @Getter public isPremium: boolean;
  @Getter public isSuccess: boolean;

  buyPremium(isPremium) {
    if(isPremium) {
      console.log("You are already premium user")
      return;
    }
    this.$store.dispatch("updatePremium", isPremium)
  }

  switchToFree(isPremium) {
    if(!isPremium) {
      console.log("You are already free user")
      return;
    }
    this.$store.dispatch("updatePremium", isPremium)
  }
}
</script>

<style lang="scss" scoped>
  #Premium {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    margin-top: 100px;
  }
  .comparison {
    display: block;
    margin: 24px 0 0;
    padding: 35px 32px;
    background-color: #FFF;
    border-radius: 8px;
    transition-timing-function: ease-out;
    transition-duration: 0.15s;
    transform: translateY(0);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    color: black;
    &:hover {
      transition-timing-function: ease-out;
      transition-duration: 0.2s;
      transform: translateY(-5px);
      box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.2);
    }
    .list-features {
      color: #000;
      padding: 34px 0 26px;
      border: 0 solid #D9DADC;
      border-top-width: 1px;
      border-bottom-width: 1px;
      list-style: none;
      li {
        margin-left: 25px;
        padding-bottom: 7px;
        line-height: 22px;
        text-align: left;
        padding-left: 15px;
        &:before {
          content: '✓';
          margin-right: 5px;
        }
      }
    }
    button {
      color: #1DB954;
      box-shadow: 0 0 0 2px #1DB954 inset;
      background-color: transparent;
      border-radius: 500px;
      font-size: 1.6em;
      &:hover {
        background-color: #1DB954;
        color: white;
      }
    }
    h4 {
      font-size: 32px;
      font-weight: 900;
    }
    h3 {
      font-weight: 400;
      margin: 0;
    }
  }

  @media (min-width: 992px) {
    .col-md-5 {
        width: 41.66666667%;
    }
  }
</style>
