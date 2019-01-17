export const getters = {
  isAuthenticated: (state) => state.idToken !== null && state.isLogged,
}