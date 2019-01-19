import { MutationTree } from "vuex";
import { authenticationTypes } from "@/types";

export const mutations: MutationTree<authenticationTypes> = {
  authUser(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  clearAuthData(state) {
    state.idToken = null;
    state.userId = null;
  },
  logUser(state) {
    state.isLogged = true;
  },
  logoutUser(state) {
    state.isLogged = false;
  }
};
