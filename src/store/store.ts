import Vue from "vue";
import Vuex from "vuex";
import { authentication } from './modules/authentication/authentication';
import { notifications } from './modules/notifications/notifications';

Vue.use(Vuex);

const store = {
  modules: {
    authentication,
    notifications,
  },
};

export default new Vuex.Store(store);
