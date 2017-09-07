import * as types from './mutation-types'
import localforage from 'localforage'

export const toSetLogin = function (context, userInfo) {
  localforage.setItem('userInfoStorage', userInfo)
  context.commit(types.SET_LOGIN, userInfo)
  return userInfo
}

export const toLogout = function (context) {
  localforage.removeItem('userInfoStorage')
  context.commit(types.CLEAR_LOGIN)
  return true
}

export const checkIsLogin = function ({ dispatch, state }) {
  return localforage.getItem('userInfoStorage')
    .then((token) => {
      if (!token) {
        return Promise.reject('NO_LOGIN')
      }
      return dispatch('toSetLogin', token)
    })
}

