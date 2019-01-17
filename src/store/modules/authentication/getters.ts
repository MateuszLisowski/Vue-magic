export const getters = {
  isAuthenticated: (state) => state.idToken !== null && state.isLogged,
  user: (state) => state.user,
  userFunds: (state) => state.user.funds,
  isPremium: (state) => state.user.isPremium
}