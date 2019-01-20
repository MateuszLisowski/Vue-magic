import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import store from "@/store/store";

Vue.use(Router);

const urlProtector = (next: any) => {
  if (store.state.authentication.idToken) {
    next();
  } else {
    next("/register");
  }
};

const routes: any = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "./views/Login/Login.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "./views/Register/Register.vue")
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "./views/Dashboard/Dashboard.vue"),
    beforeEnter(to: any, from: any, next: any) {
      urlProtector(next);
    }
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "Gallery" */ "./views/Gallery/Gallery.vue"),
    beforeEnter(to: any, from: any, next: any) {
      urlProtector(next);
    }
  },
  {
    path: "/myaccount",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "Account" */ "./views/Account/Account.vue"),
    beforeEnter(to: any, from: any, next: any) {
      urlProtector(next);
    }
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "./views/About/About.vue"),
    beforeEnter(to: any, from: any, next: any) {
      urlProtector(next);
    }
  },
  {
    path: "/Premium",
    name: "Premium",
    component: () =>
      import(/* webpackChunkName: "Premium" */ "./views/Premium/Premium.vue"),
    beforeEnter(to: any, from: any, next: any) {
      urlProtector(next);
    }
  },
  {
    path: "*",
    component: Home
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
