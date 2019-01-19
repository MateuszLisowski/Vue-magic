import { GetterTree } from 'vuex';
import { rootState, userGetters } from '@/types';

export const getters: GetterTree<userGetters, rootState> = {
  user: (state) => state.user,
  userFunds: (state) => state.user.funds,
  isPremium: (state) => state.user.isPremium
}