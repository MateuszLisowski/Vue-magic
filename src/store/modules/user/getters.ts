export const getters = {
  user: (state) => state.user,
  userFunds: (state) => state.user.funds,
  isPremium: (state) => state.user.isPremium
}