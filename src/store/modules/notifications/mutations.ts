import { MutationTree } from 'vuex';
import { notificationsTypes } from '@/types';

export const mutations: MutationTree<notificationsTypes> = {
  showSuccessAlert(state, message: string) {
    state.successMessage = message
    state.isSuccess = true
  },
  showErrorAlert(state, message: string) {
    state.errorMessage = message
    state.isError = true
  },
  hideSuccessAlert(state) {
    state.isSuccess = false
  },
  hideErrorAlert(state) {
    state.isError = false
  },
}