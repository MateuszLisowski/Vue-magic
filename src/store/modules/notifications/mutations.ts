export const mutations = {
  showSuccessAlert(state, message) {
    state.successMessage = message
    state.isSuccess = true
  },
  showErrorAlert(state, message) {
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