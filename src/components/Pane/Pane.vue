<template>
  <a href='' class='hero-box'>
    <span class='hero-box__circle' :class="data.className"></span>
    <h2 class='hero-box__title'>
      {{data.title}}
    </h2>
    <p class='hero-box__body'>
      {{data.firstLine}}
      <br />
      {{data.secondLine}}
    </p>
  </a>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from "vue-property-decorator";

@Component
export default class Pane extends Vue {
  @Prop() public data: object;
}
</script>

<style lang="scss" scoped>
.hero-box {
  flex-basis: 33.3%;
  background: #101010;
  min-height: 300px;
  padding: 60px 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border: 1px solid #464646;
}

.hero-box:hover {
  .hero-box__circle {
    width: 100%;
    height: 100%;
    transition: width 0.3s ease, border-bottom-left-radius 0.3s ease,
      border-bottom-right-radius 0.1s ease, border-top-left-radius 0.1s ease,
      border-top-right-radius 0.1s ease;
    top: 0;
    right: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    // transform-origin:center;

    &:after {
      transform: scale(1);
      transition: 0.2s ease;
      transition-delay: 0.1s;
    }

    &:before {
      transition: 0.2s ease;
      transition-delay: 0.1s;
      // opacity:.3;
      right: 100px;
      top: 100px;
    }
  }

  .hero-box__body {
    color: rgb(230, 230, 230);
    transition: 0.15s ease;
    transition-delay: 0.15s;
  }

  .hero-box__title {
    color: rgb(255, 255, 255);
    transition: 0.1s ease;
    transition-delay: 0.15s;
  }
}

.hero-box__title {
  font-weight: 600;
  position: relative;
  color: white;
}

.hero-box__body {
  font-size: 14px;
  color: rgb(150, 150, 150);
  position: relative;
}

.hero-box__circle {
  width: 50px;
  height: 50px;
  background: rgb(200, 200, 200);
  border-top-left-radius: 100rem;
  border-top-right-radius: 100rem;
  border-bottom-right-radius: 100rem;
  border-bottom-left-radius: 100rem;
  position: absolute;
  display: block;
  right: 50px;
  top: 50px;
  transition: width 0.15s ease, height 0.15s ease,
    border-bottom-left-radius 0.3s ease, border-bottom-right-radius 0.3s ease,
    border-top-left-radius 0.3s ease, border-top-right-radius 0.3s ease;

  &:after {
    width: 300px;
    height: 300px;
    position: absolute;
    top: -100px;
    right: -100px;
    background: rgba(255, 255, 255, 0.2);
    content: "";
    border-radius: 100rem;
    transform: scale(0);
  }

  &:before {
    width: 25px;
    height: 25px;
    opacity: 0;
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYXJyb3ctdXAtcmlnaHQiPjxsaW5lIHgxPSI3IiB5MT0iMTciIHgyPSIxNyIgeTI9IjciPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPSI3IDcgMTcgNyAxNyAxNyI+PC9wb2x5bGluZT48L3N2Zz4=);
    background-size: cover;
    transition: 0.5s ease;
  }
}

.hero-box__circle--green {
  background-color: #00c569;
}

.hero-box__circle--blue {
  background-color: #0011c6;
}

.hero-box__circle--orange {
  background-color: #fd7d02;
}

@media only screen and (max-width: 1000px) {
  .hero-box {
    flex-basis: 50%;

    &:last-of-type {
      flex-basis: 100%;
    }
  }
}
</style>
