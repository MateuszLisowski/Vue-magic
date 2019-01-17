<template>
  <div class="signup-form">
    <transition-group name="alerts">
      <div class="alert alert-success" role="alert" v-if="isSuccess" key="success">
        <strong>Well done!</strong> You were registered successfully.
      </div>
      <div class="alert alert-danger" role="alert" v-if="isError" key="error">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </div>
    </transition-group>
    <form>
      <h2>Register</h2>
      <p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
          <div class="row">
            <div class="col-xs-5">
              <input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" v-model.trim="firstname">
            </div>
            <div class="col-xs-5">
              <input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" v-model.trim="lastname">
            </div>
          </div>
        </div>
        <div class="form-group">
          <input type="username" class="form-control" name="username" placeholder="Username" required="required" v-model.trim="username">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="Password" required="required" v-model.trim="password">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" v-model.trim="confirmPassword">
        </div>
        <div class="form-group">
          <label class="checkbox-inline">
            <input type="checkbox" required="required" v-model="agreement"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
          </label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block" @click.prevent="register">
            Register Now
          </button>
        </div>
    </form>
    <div class="text-center">
      Already have an account? <router-link to="/login">Log in</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import { registerData } from '@/types'
import { Getter } from 'vuex-class';

@Component
export default class Register extends Vue {
  public firstname: string = '';
  public lastname: string = '';
  public username: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public agreement: boolean = false;
  @Getter public isError: boolean;
  @Getter public isSuccess: boolean;

  register() {
    if(!this.agreement || this.password !== this.confirmPassword) {
      this.$store.commit('showErrorAlert')
      setTimeout(() => {
        this.$store.commit('hideErrorAlert')
      }, 2000);
      return;
    }
    const data: registerData = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
      funds: 0,
      isPremium: false,
    }
    this.$store.dispatch('register', data);
  }
}
</script>

<style lang="scss" scoped>
.alerts-enter-active, .alerts-leave-active {
  transition: opacity .5s;
}
.alerts-enter, .alerts-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.alert-success,
.alert-danger {
  top: 60px;
  width: 400px;
  position: fixed;
}

.form-control {
  height: 40px;
  box-shadow: none;
  color: #969fa4;
}

.form-control:focus {
  border-color: #5cb85c;
}

.form-control,
.btn {
  border-radius: 3px;
}

.signup-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}

.signup-form h2 {
  color: #636363;
  margin: 0 0 15px;
  position: relative;
  text-align: center;
}

.signup-form h2:before,
.signup-form h2:after {
  content: "";
  height: 2px;
  width: 30%;
  background: #d4d4d4;
  position: absolute;
  top: 50%;
  z-index: 2;
}

.signup-form h2:before {
  left: 0;
}

.signup-form h2:after {
  right: 0;
}

.signup-form .hint-text {
  color: #999;
  margin-bottom: 30px;
  text-align: center;
}

.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #f2f3f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}

.signup-form .form-group {
  margin-bottom: 20px;
}

.signup-form input[type="checkbox"] {
  margin-top: 3px;
  cursor: pointer;
}

.signup-form .btn {
  font-size: 16px;
  font-weight: bold;
  min-width: 140px;
  outline: none !important;
}

.signup-form .row div:first-child {
  padding-right: 10px;
}

.signup-form .row div:last-child {
  padding-left: 10px;
}

.signup-form .row {
  flex-wrap: nowrap;
  margin: 0;
}

.signup-form a {
  color: #fff;
  text-decoration: underline;
}

.signup-form a:hover {
  text-decoration: none;
}

.signup-form form a {
  color: #5cb85c;
  text-decoration: none;
}

.signup-form form a:hover {
  text-decoration: underline;
}
</style>
