import axios from '@/axios-auth';
import globalAxios from 'axios';
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
  storeUser ({commit, state}, data) {
    if (!state.idToken) {
      return
    }
    globalAxios.post('/users.json' + '?auth=' + state.idToken, data)
      .then(res => res)
      .catch(error => {
        commit('showErrorAlert')
        setTimeout(() => {
          commit('hideErrorAlert')
        }, 2000);
      })
  },
  saveUser ({commit, state}, loginData) {
    if (!state.idToken) {
      return
    }
    globalAxios.get('/users.json' + '?auth=' + state.idToken)
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
}



    //     const foundUser = users.find(user =>
    //       user.password === this.password &&
    //       user.username === this.username)


