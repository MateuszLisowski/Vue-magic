import { GetterTree } from 'vuex';
import { rootState, authenticationGetters } from '@/types';

export const getters: GetterTree<authenticationGetters, rootState> = {
  isAuthenticated: (state) => state.idToken !== null && state.isLogged,
}