<template>
  <div id="Dashboard">
    <DashboardCard v-for="cardRow in cardsData" :cardRowData="cardRow" :key="cardRow[0].title"/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import { cardsData } from '@/static/dashboardCardData';
import DashboardCard from '@/components/DashboardCard/DashboardCard.vue';

@Component({
  components: {
    DashboardCard,
  },
})
export default class Dashboard extends Vue {
  public cardsData = cardsData
}
</script>

<style lang="scss" scoped>

</style>
