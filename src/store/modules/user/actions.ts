import globalAxios from 'axios';

export const actions = {
  storeUser ({commit, rootState}, data) {
    if (!rootState.authentication.idToken) {
      return
    }
    globalAxios.post('/users.json' + '?auth=' + rootState.authentication.idToken, data)
      .then(res => res)
      .catch(error => {
        commit('showErrorAlert')
        setTimeout(() => {
          commit('hideErrorAlert')
        }, 2000);
      })
  },
  saveUser ({commit, rootState}, loginData) {
    if (!rootState.authentication.idToken) {
      return
    }
    globalAxios.get('/users.json' + '?auth=' + rootState.authentication.idToken)
      .then(res => {
        const users = Object.entries(res.data)
          .map(user => {
            user[1].id = user[0]
            return user[1]
          })
        const loggedUser = users.find(user =>
          user.password === loginData.password &&
          user.username + "@gmail.com" === loginData.email)
        commit('saveUserData', loggedUser)
      })
      .catch(error => console.log(error))
  },
  updateUser ({commit, state, rootState}, updatedUserData) {
    globalAxios.patch('/users/' + state.user.id + '.json' + '?auth=' + rootState.authentication.idToken, updatedUserData)
      .then(res => {
        commit('showSuccessAlert', 'Your profile data were updated')
        setTimeout(() => {
          commit('hideSuccessAlert')
        }, 2000)
      })
      .catch(error => console.log(error))
    commit('saveUserData', updatedUserData)
  },
  updatePremium ({state, dispatch}, updatedPremium) {
    const updatedUser = state.user
    updatedUser.isPremium = !updatedPremium
    if(updatedUser.isPremium) {
      updatedUser.funds = Number(updatedUser.funds) - 40
    }
    dispatch("updateUser", updatedUser)
  }
}