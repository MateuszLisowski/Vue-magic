export const mutations = {
  // showSuccessAlert(state) {
  //   state.isSuccess = true
  // },
  // showErrorAlert(state) {
  //   state.isError = true
  // },
  // hideSuccessAlert(state) {
  //   state.isSuccess = false
  // },
  // hideErrorAlert(state) {
  //   state.isError = false
  // },
  authUser (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  saveUserData (state, user) {
    state.user = user
  },
  clearUserData (state) {
    state.user = {}
  },
  clearAuthData (state) {
    state.idToken = null
    state.userId = null
  }
}