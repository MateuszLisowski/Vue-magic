import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import store from '@/store/store';

Vue.use(Router);

const routes: { path: string, name: string, component: any }[] = [
  {
    path: "/",
    name: "home",
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
      beforeEnter(to, from, next) {
        if(store.state.authentication.idToken) {
          next()
        } else {
          next('/register')
        }
    },
    children: [
      {
        path: '/Gallery',
        component: () =>
          import(/* webpackChunkName: "Gallery" */ "./views/Gallery/Gallery.vue")
      },
    ]
  }
]

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
