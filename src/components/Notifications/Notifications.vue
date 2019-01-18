<template>
    <div id="notifications">
      <transition-group name="alerts">
        <div class="alert alert-success" role="alert" v-if="isSuccess" key="success">
          <strong>Well done!</strong> {{successMessage}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="isError" key="error">
          <strong>Oh snap!</strong> {{errorMessage}}
        </div>
      </transition-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class notifications extends Vue {
  @Getter public isError: boolean;
  @Getter public isSuccess: boolean;
  @Getter public successMessage: string;
  @Getter public errorMessage: string;
}
</script>

<style lang="scss">
.alerts-enter-active, .alerts-leave-active {
  transition: opacity .5s;
}
.alerts-enter, .alerts-leave-to {
  opacity: 0;
}

.alert.alert-success,
.alert.alert-danger {
  top: 60px;
  width: 400px;
  position: fixed;
  left: 50%;
  margin-left: -200px;
}

</style>
