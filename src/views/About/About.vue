<template>
  <div id="About">
    <h4>
      About Us
    </h4>
    <span class="subhead">
      OUR STORY
    </span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis odio nulla, rhoncus feugiat erat luctus ornare. Fusce ex nibh, placerat ut diam sit amet, finibus porttitor lacus. Aliquam hendrerit massa eget tincidunt iaculis. Nulla facilisi. Nullam accumsan velit justo, id rutrum risus mollis vel. Sed id efficitur lacus. Curabitur hendrerit dolor non?
      <br>
      <br>
      Quisque porta porttitor ante, vitae bibendum risus rhoncus ornare. Suspendisse enim dolor, ornare sed dictum sed, rhoncus vel ante. Aliquam ornare quam eget elit finibus euismod. Maecenas rutrum urna erat, vel sollicitudin purus pulvinar maximus. Nam..
    </p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";

@Component
export default class About extends Vue {
}
</script>

<style lang="scss" scoped>
    #About {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
      height: 75vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.2em;
      .subhead {
        font-size: 1.5em;
        text-align: center;
        display: block;
        position: relative;
        &:before {
          content: "";
          width: 60px;
          height: 6px;
          border-top: 1px solid white;
          display: inline-block;
          margin: 0 10px;
        }
        &:after {
          content: "";
          width: 60px;
          height: 6px;
          border-top: 1px solid white;
          display: inline-block;
          margin: 0 10px;
        }
      }
      p {
        max-width: 600px;
        margin: 40px auto;
        line-height: 1.5em;
        font-size: 1.2em;
        padding: 10px;
      }
    }
</style>
