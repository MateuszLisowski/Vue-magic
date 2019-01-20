import globalAxios from 'axios';
import { ActionTree } from 'vuex';
import { rootState, userTypes, userData, loginData, updatedAccountInformations, updatedAccountData} from '@/types';

export const actions: ActionTree<userTypes,rootState> = {
  storeUser ({commit, rootState}, data: userData) {
    const idToken = rootState.authentication.idToken

    if (!idToken) {
      return;
    }
    globalAxios.post('/users.json' + '?auth=' + idToken, data)
      .then(res => res)
      .catch(error => {
        commit('showErrorAlert')
        setTimeout(() => {
          commit('hideErrorAlert')
        }, 2000);
      })
  },
  saveUser ({commit, rootState}, loginData: loginData) {
    const idToken = rootState.authentication.idToken

    if (!idToken) {
      return;
    }
    globalAxios.get('/users.json' + '?auth=' + idToken)
      .then(res => {
        // @ts-ignore
        const users: userData[] = Object.entries(res.data)
          .map(user => {
            // @ts-ignore
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
  updateUser ({commit, state, rootState}, updatedUserData: updatedAccountInformations) {
    const idToken = rootState.authentication.idToken

    // @ts-ignore
    globalAxios.patch('/users/' + state.user.id + '.json' + '?auth=' + idToken, updatedUserData)
      .then(res => {
        commit('showSuccessAlert', 'Your profile data were updated')
        setTimeout(() => {
          commit('hideSuccessAlert')
        }, 2000)
      })
      .catch(error => console.log(error))
    commit('saveUserData', updatedUserData)
  },
  updatePremium ({state, dispatch}, updatedPremium: updatedAccountData) {
    const updatedUser: any = state.user
    updatedUser.isPremium = !updatedPremium
    if(updatedUser.isPremium) {
      updatedUser.funds = Number(updatedUser.funds) - 40
    }
    dispatch("updateUser", updatedUser)
  }
}