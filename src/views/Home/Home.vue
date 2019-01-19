<template>
  <div id="Home">
    <header class="sans-serif">
      <div class="cover bg-left bg-center-l" style="background-image: url(https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fce4ce8856a711cc50a14e03e58783a&auto=format&fit=crop&w=1158&q=80)">
        <div class="bg-black-80 pb5 pb6-m pb7-l">
          <div class="tc-l mt4 mt5-m mt6-l ph3">
            <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">
                This is a super awesome headline for your company!
            </h1>
            <h2 class="fw1 f3 white-80 mt3 mb4">
                Now another subheadline where you explain something else awesome about your company!
            </h2>
            <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">
                Awesome Action
            </a>
            <span class="dib v-mid ph3 white-70 mb3">
                or
            </span>
            <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">
                Another Awesome Action
            </a>
          </div>
        </div>
      </div>
    </header>
    <section class='hero'>
      <div class='hero-box-container'>
        <Pane v-for="pane in paneData" :key="pane.title" :data="pane"/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import { paneData } from '@/static/paneData';
import Pane from '@/components/Pane/Pane.vue';

@Component({
  components: {
    Pane,
  },
})
export default class Home extends Vue {
    public paneData = paneData
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900");

.border-box {
    box-sizing: border-box;
}

.cover {
    background-size: cover !important;
}

.bg-left {
    background-repeat: no-repeat;
    background-position: center left;
}

.ba {
    border-style: solid;
    border-width: 1px;
}

.b--white {
    border-color: #fff;
}

.b--white-90 {
    border-color: rgba(255, 255, 255, .9);
}

.b--blue {
    border-color: #357edd;
}

.dn {
    display: none;
}

.dib {
    display: inline-block;
}

.dt {
    display: table;
}

.dtc {
    display: table-cell;
}

.sans-serif {
    font-family: -apple-system,
                 BlinkMacSystemFont,
                 'avenir next',
                 avenir,
                 'helvetica neue',
                 helvetica,
                 ubuntu,
                 roboto,
                 noto,
                 'segoe ui',
                 arial,
                 sans-serif;
}

.fw1 {
    font-weight: 100;
}

.fw2 {
    font-weight: 200;
}

.fw4 {
    font-weight: 400;
}

.h2 {
    height: 2rem;
}

.lh-title {
    line-height: 1.25;
}

.link {
    text-decoration: none;
    transition: color .15s ease-in;
}

.link:link, .link:visited {
    transition: color .15s ease-in;
}

.link:hover {
    transition: color .15s ease-in;
}

.link:active {
    transition: color .15s ease-in;
}

.link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
}

.mw8 {
    max-width: 64rem;
}

.w2 {
    width: 2rem;
}

.w-100 {
    width: 100%;
}

.white-90 {
    color: rgba(255, 255, 255, .9);
}

.white-80 {
    color: rgba(255, 255, 255, .8);
}

.white-70 {
    color: rgba(255, 255, 255, .7);
}

.white {
    color: #fff;
}

.bg-black-80 {
    background-color: rgba(0, 0, 0, .8);
}

.bg-blue {
    background-color: #357edd;
}

.hover-white:hover {
    color: #fff;
}

.hover-white:focus {
    color: #fff;
}

.pa1 {
    padding: .25rem;
}

.pa3 {
    padding: 1rem;
}

.pb5 {
    padding-bottom: 4rem;
}

.pv2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
}

.ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.ml2 {
    margin-left: .5rem;
}

.mb0 {
    margin-bottom: 0;
}

.mb3 {
    margin-bottom: 1rem;
}

.mb4 {
    margin-bottom: 2rem;
}

.mt3 {
    margin-top: 1rem;
}

.mt4 {
    margin-top: 2rem;
}

.no-underline {
    text-decoration: none;
}

.tr {
    text-align: right;
}

.f2 {
    font-size: 2.25rem;
}

.f3 {
    font-size: 1.5rem;
}

.f6 {
    font-size: .875rem;
}

.center {
    margin-right: auto;
    margin-left: auto;
}

.v-mid {
    vertical-align: middle;
}

.grow {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .25s ease-out;
}

.grow:hover, .grow:focus {
    transform: scale(1.05);
}

.grow:active {
    transform: scale(.9);
}

.grow-large {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .25s ease-in-out;
}

.grow-large:hover, .grow-large:focus {
    transform: scale(1.2);
}

.grow-large:active {
    transform: scale(.95);
}

@media screen and (min-width: 30em) {
    .dib-ns {
        display: inline-block;
    }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
    .pb6-m {
        padding-bottom: 8rem;
    }

    .mt5-m {
        margin-top: 4rem;
    }
}

@media screen and (min-width: 60em) {
    .bg-center-l {
        background-repeat: no-repeat;
        background-position: center center;
    }

    .dib-l {
        display: inline-block;
    }

    .pb7-l {
        padding-bottom: 16rem;
        padding-top: 10rem;
    }

    .mt6-l {
        margin-top: 8rem;
    }

    .tc-l {
        text-align: center;
    }

    .f1-l {
        font-size: 3rem;
    }
}

@mixin fluid-type($min-font-size: 18px, $max-font-size: 32px, $lower-range: 499px, $upper-range: 1160px) {
  font-size: calc(
    #{$min-font-size} + #{(
        ($max-font-size / ($max-font-size * 0 + 1)) - ($min-font-size / ($min-font-size *
                  0 + 1))
      )} *
      (
         (100vw - #{$lower-range}) / #{(
            ($upper-range / ($upper-range * 0 + 1)) - ($lower-range / ($lower-range *
                      0 + 1))
          )}
      )
  );

  @media screen and (max-width: $lower-range) {
    font-size: $min-font-size;
  }
  @media screen and (min-width: $upper-range) {
    font-size: $max-font-size;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
  font-family: poppins;
}

.hero-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: -1%;
  width: 101%;
  z-index: 2;
}

@media only screen and (max-width: 1000px) {
  .hero-box-container {
    flex-wrap: wrap;
  }
}

@media only screen and (max-width: 850px) {
  header {
    margin: 0 20px;
  }

  .hero-box-container {
    position: relative;
  }
}

</style>
