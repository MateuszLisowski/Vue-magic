import Vue from "vue";
import Vuex from "vuex";
import { authentication } from './modules/authentication/authentication';

Vue.use(Vuex);

const store = {
  modules: {
    authentication,
  },
};

export default new Vuex.Store(store);
