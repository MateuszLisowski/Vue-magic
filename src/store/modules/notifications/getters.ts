import { GetterTree } from 'vuex';
import { rootState, notificationsTypes } from '@/types';

export const getters: GetterTree<notificationsTypes, rootState> = {
  isError: (state) => state.isError,
  isSuccess: (state) => state.isSuccess,
  successMessage: (state) => state.successMessage,
  errorMessage: (state) => state.errorMessage,
}