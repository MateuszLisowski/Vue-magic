export const mutations = {
  showSuccessAlert(state) {
    state.isSuccess = true
  },
  showErrorAlert(state) {
    state.isError = true
  },
  hideSuccessAlert(state) {
    state.isSuccess = false
  },
  hideErrorAlert(state) {
    state.isError = false
  },
}