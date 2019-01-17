import axios from '@/axios-auth';
import router from '@/router'

export const actions = {
  register ({commit, dispatch}, registerData) {
    axios.post('/signupNewUser?key=AIzaSyAXWxvk3bZ94NVvVjjGpOBoKrxPJ_5_f5o', {
      email: registerData.username + '@gmail.com',
      password: registerData.password,
      returnSecureToken: true,
    })
      .then(res => {
        commit('showSuccessAlert')
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
        commit('showErrorAlert')
        setTimeout(() => {
          commit('hideErrorAlert')
        }, 2000);
      })
  },
  login ({commit, dispatch}, loginData) {
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
    }).catch(e => {
      commit('showErrorAlert')
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
  },
}



