import axios from '@/axios-auth';
import router from '@/router'
import { ActionTree } from 'vuex';
import { rootState, authenticationTypes, userData, loginData} from '@/types';

export const actions: ActionTree<authenticationTypes,rootState> = {
  register ({commit, dispatch}, registerData: userData) {
    axios.post('/signupNewUser?key=AIzaSyAXWxvk3bZ94NVvVjjGpOBoKrxPJ_5_f5o', {
      email: registerData.username + '@gmail.com',
      password: registerData.password,
      returnSecureToken: true,
    })
      .then(res => {
        commit('showSuccessAlert', 'You were registered successfully.')
        setTimeout(() => {
          commit('hideSuccessAlert')
        }, 2000);
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('storeUser', registerData)
      })
      .catch(error => {
        commit('showErrorAlert', 'Something went wrong on server. Try again!')
        setTimeout(() => {
          commit('hideErrorAlert')
        }, 2000);
      })
  },
  login ({commit, dispatch}, loginData: loginData) {
    axios.post('/verifyPassword?key=AIzaSyAXWxvk3bZ94NVvVjjGpOBoKrxPJ_5_f5o', {
      email: loginData.email,
      password: loginData.password,
      returnSecureToken: true,
    }).then(res => {
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId
      })
      commit('logUser')
      dispatch('saveUser', {
        email: loginData.email,
        password: loginData.password,
      })
      router.push('/dashboard')
      commit('showSuccessAlert', 'You were logged successfully.')
      setTimeout(() => {
        commit('hideSuccessAlert')
      }, 2000);
    }).catch(e => {
      commit('showErrorAlert', 'Something went wrong during login. Try again!')
      setTimeout(() => {
        commit('hideErrorAlert')
      }, 2000);
    })
  },
  logout ({commit}) {
    commit('clearUserData')
    commit('clearAuthData')
    commit('logoutUser')
    router.replace('/')
    commit('showSuccessAlert', 'You were logged out successfully.')
    setTimeout(() => {
      commit('hideSuccessAlert')
    }, 2000);
  },
}



