export const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  clearAuthData (state) {
    state.idToken = null
    state.userId = null
  },
  logUser (state) {
    state.isLogged = true
  },
  logoutUser (state) {
    state.isLogged = false
  },
}