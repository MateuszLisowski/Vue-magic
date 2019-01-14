<template>
  <div id="Gallery">
    <section>
      <div class="container">
        <img v-for="(src, index) in images" v-if="index % 2 === 0" :src="src" :key="index" />
      </div>
      <div class="container">
        <img v-for="(src, index) in images" v-if="index % 2 !== 0" :src="src" :key="index" />
      </div>
    </section>
    <button @click="loadMoreImages" class="btn btn-info">
      load more images
    </button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";

@Component
export default class Gallery extends Vue {
  public images = [
    this.randomImage(),
    this.randomImage(),
    this.randomImage(),
    this.randomImage(),
    this.randomImage(),
    this.randomImage(),
  ]

  public loadMoreImages() {
    const newImages = [
      this.randomImage(),
      this.randomImage(),
      this.randomImage(),
      this.randomImage(),
      this.randomImage(),
      this.randomImage(),
    ]
    this.images.push(...newImages)
  }

  public randomImage() {
    const base = 'https://source.unsplash.com/random/'
    const width = '400x'
    const height = Math.floor(Math.random() * 301) + 300
    return base + width + height
  }
}
</script>

<style lang="scss" scoped>
  #Gallery {
    padding: 100px 40px;
  }

  section {
    display: flex;

    .container {
      display: flex;
      flex-direction: column;

      img {
        margin: 10px 0;
        border: 2px solid white;
        width: 100%;
      }
    }
  }

  button {
    width: 50%;
    margin: 50px 0;
    padding: 20px 0;

  }
</style>
