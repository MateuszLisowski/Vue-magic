export const getters = {
  isError: (state) => state.isError,
  isSuccess: (state) => state.isSuccess,
  user: (state) => state.user,
  isAuthenticated: (state) => state.idToken !== null
}