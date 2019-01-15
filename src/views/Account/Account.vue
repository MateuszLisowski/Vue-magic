<template>
  <div id="Account">
    <div class="alert alert-success" role="alert" v-if="isSuccess">
      <strong>Well done!</strong> You were registered successfully.
    </div>
    <section>
      <div>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-8 col-sm-offset-2 wrapper">
                <div>
                  <h2>My account</h2>
                </div>
                <form method="post" data-form-title="MY ACCOUNT">
                  <input type="hidden" data-form-email="true">
                  <div class="form-group">
                    <label for="firstname">Firstname:</label>
                    <input type="text" class="form-control" name="firstname" placeholder="Firstname" data-form-field="Firstname" v-model.trim="firstname">
                  </div>
                  <div class="form-group">
                    <label for="lastname">Lastname:</label>
                    <input type="text" class="form-control" name="lastname" placeholder="Lastname" data-form-field="Lastname" v-model.trim="lastname">
                  </div>
                  <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" name="username"  placeholder="Username" data-form-field="Username" v-model.trim="username">
                  </div>
                  <div class="form-group">
                    <label for="password">New password:</label>
                    <input type="password" class="form-control" name="password"  placeholder="New password" data-form-field="Password" v-model.trim="password">
                  </div>
                  <div class="form-group">
                    <label for="charge account">Charge Account:</label>
                    <input type="number" class="form-control" name="charge account"  placeholder="Charge account" data-form-field="Charge account" v-model.trim="chargeAccount">
                  </div>
                  <div>
                    <button type="submit" class="btn btn-lg btn-danger" @click.prevent="updateProfile(user)">Save and Update</button>
                  </div>
                </form>
                <div class="actualData">
                  actual data
                  <p>
                    Firstname is: {{user.firstname}}
                  </p>
                  <p>
                    Lastname is: {{user.lastname}}
                  </p>
                  <p>
                    Your funds are equal: {{user.funds}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import { Getter } from 'vuex-class';

@Component
export default class Account extends Vue {
  public firstname: string = '';
  public lastname: string = '';
  public username: string = '';
  public password: string = '';
  public chargeAccount: number = 0;

  @Getter public isSuccess: boolean;
  @Getter public user: object;

  updateProfile(user) {
      const updatedData = {
        firstname: this.firstname || user.firstname,
        lastname: this.lastname || user.lastname,
        username: this.username || user.username,
        password: this.password || user.password,
        funds: this.chargeAccount || user.funds
      }
      console.log(updatedData)
      this.$store.commit('showSuccessAlert')
      setTimeout(() => {
        this.$store.commit('hideSuccessAlert')
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    justify-content: center;
    margin-top: 30px;
  }
  .wrapper {
    padding: 30px 0;
    background-color: #123d44;
    box-shadow: 2px 2px 22px 6px rgba(0,0,0,0.75);
    position: relative;
    .actualData {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: orange;
      z-index: -1;
    }
    // &:hover .actualData {
    //   z-index: 1;
    // }
  }

  h2 {
    padding: 20px 0;
  }
  button {
    margin-top: 10px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input, label {
      width: 50%;
    }
    label {
      text-align: left;
      font-size: 1.8em;
    }
  }
</style>
