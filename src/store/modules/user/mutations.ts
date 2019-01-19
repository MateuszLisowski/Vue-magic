import { MutationTree } from "vuex";
import { userTypes } from "@/types";

export const mutations: MutationTree<userTypes> = {
  saveUserData(state, user) {
    state.user = user;
  },
  clearUserData(state) {
    state.user = {};
  }
};
