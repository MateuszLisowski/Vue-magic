import Vue from "vue";
import Vuex from "vuex";
import { authentication } from './modules/authentication/authentication';
import { notifications } from './modules/notifications/notifications';
import { user } from './modules/user/user';

Vue.use(Vuex);

const store = {
  modules: {
    authentication,
    notifications,
    user
  },
};

export default new Vuex.Store(store);
