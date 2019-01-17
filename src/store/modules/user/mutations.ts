export const mutations = {
  saveUserData (state, user) {
    state.user = user
  },
  clearUserData (state) {
    state.user = {}
  },
}