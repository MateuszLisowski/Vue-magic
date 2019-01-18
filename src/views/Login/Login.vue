<template>
<div id="LoginForm">
  <div class="container">
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <h1>Login form</h1>
          <p>Please enter your username and password</p>
        </div>
        <form id="Login">
          <div class="form-group">
            <input type="username" class="form-control" id="inputEmail" placeholder="Username" v-model.trim="username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model.trim="password">
          </div>
          <div class="forgot">
            <a href="reset.html">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="login">Login</button>
        </form>
      </div>
      <p class="bottom-text"> Designed by Mateusz Lisowski</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import axios from '@/axios-auth';
import { Getter } from 'vuex-class';
import { loginData } from '@/types'

@Component
export default class Login extends Vue {
  public password: string = '';
  public username: string = '';
  @Getter public isError: boolean;

  login(): void {
    const data: loginData = {
      password: this.password,
      email: this.username + '@gmail.com',
    }
    this.$store.dispatch('login', data);
  }
}
</script>

<style lang="scss" scoped>


.form-heading {
  color: #fff;
  font-size: 23px;
}

.panel h1 {
  color: #444444;
  font-size: 18px;
  margin: 0 0 8px 0;
}

.panel p {
  color: #777777;
  font-size: 14px;
  margin-bottom: 30px;
  line-height: 24px;
}

.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}

.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  width: 450px;
  padding: 50px 70px 70px 71px;
}

.login-form .form-group {
  margin-bottom: 10px;
}

.login-form {
  text-align: center;
}

.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}

.login-form .btn.btn-success {
  color: #ffffff;
  font-size: 1.2em;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0;
  font-weight: bold;
}

.forgot {
  text-align: left;
  margin-bottom: 30px;
}

.bottom-text {
  color: #ffffff;
  font-size: 14px;
  margin: auto;
}

.login-form .btn.btn-primary.reset {
  background: #ff9900 none repeat scroll 0 0;
}

.back {
  text-align: left;
  margin-top: 10px;
}

.back a {
  color: #444444;
  font-size: 13px;
  text-decoration: none;
}
</style>
