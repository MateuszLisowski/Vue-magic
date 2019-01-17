export const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  clearAuthData (state) {
    state.idToken = null
    state.userId = null
  },
  saveUserData (state, user) {
    state.user = user
  },
  clearUserData (state) {
    state.user = {}
  },
  logUser (state) {
    state.isLogged = true
  },
  logoutUser (state) {
    state.isLogged = false
  }
}