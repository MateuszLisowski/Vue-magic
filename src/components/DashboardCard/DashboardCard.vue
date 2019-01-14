<template>
    <div class="row">
      <div class="col-xs-9 col-md-5" v-for="card in cardRowData" :key="card.title">
        <div class='card'>
          <div class='card-img-top'>
            <img alt='' class='img-fluid' :src="card.img">
          </div>
          <div class='card-block'>
            <h4 class='card-title'>{{card.title}}</h4>
            <p class='card-text'>{{card.text}}</p>
            <router-link :to="actualRoute + card.link">
              <a class='btn btn-primary' href='#'>
                +
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "vue-property-decorator";

@Component
export default class DashboardCard extends Vue {
  @Prop() public cardRowData: {}[];

  get actualRoute() {
    return this.$route.path
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 0;
}

.card {
  position: relative;
  border: none;
  box-shadow: 0 1.5rem 3rem rgba(0,0,0,.5);
  
  .img-fluid {
    width: 100%;
  }
  
  .card-block {
    position: relative;
    padding: 2rem;
    color: black;
  }
  
  .card-text {
    margin-bottom: 0;
  }
  
  .btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    border-radius: 50%;
    padding: 0;
    width: 3rem;
    height: 3rem;
    transition: all .25s ease-in-out;
    
    .icon {
      width: 50%;
      height: 50%;
      margin-left: -10%;
      transition: all .25s ease-in-out;
    }
  }
}

</style>
