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
                    <label for="charge account">Charge Account:</label>
                    <input type="number" class="form-control" name="charge account"  placeholder="Charge account" data-form-field="Charge account" v-model.trim="chargeAccount">
                  </div>
                  <div class="buttonsWrapper">
                    <button class="btn btn-lg btn-danger" @click.prevent="updateProfile(user)">
                      Save and Update
                    </button>
                    <button @click.prevent="showData" class='btn btn-lg btn-light'>
                      Account informations
                    </button>
                  </div>
                </form>
                <transition name="slide">
                  <ul class="actualData" v-if='showProfileData'>
                    <li>
                      Account informations:
                    </li>
                    <li>
                      Firstname: {{user.firstname}}
                    </li>
                    <li>
                      Lastname: {{user.lastname}}
                    </li>
                    <li>
                      Available funds: {{user.funds}}
                    </li>
                    <li v-if="user.isPremium">
                      Account type: Premium!
                    </li>
                    <li v-else>
                      Account type: Free
                    </li>
                    <button @click.prevent="showData" class='btn btn-lg btn-primary'>
                      Update account
                    </button>
                  </ul>
                </transition>
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
  public chargeAccount: number = 0;
  public showProfileData: boolean = false;

  @Getter public isSuccess: boolean;
  @Getter public user: object;

  showData() {
    this.showProfileData = !this.showProfileData
  }

  updateProfile(user) {
      const updatedData = {
        firstname: this.firstname || user.firstname,
        lastname: this.lastname || user.lastname,
        funds: Number(this.chargeAccount) + Number(user.funds),
        id: user.id
      }
      this.$store.dispatch("updateUser", updatedData)
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
      background-color: #0e2a2f;
      z-index: 1;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      list-style-type: none;
      padding: 0;
      li {
        font-size: 2em;
        margin: 5px 0;
        &:first-of-type {
          font-size: 2.5em;
          border-bottom: 1px solid white;
        }
      }
    }
  }

.btn-danger {
  margin-right: 10px;
}

.buttonsWrapper {
  padding: 20px 0;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(200%, 0);
}
.slide-leave-to {
  transform: translate(-200%, 0);
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
