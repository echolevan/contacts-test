import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN](state, info) {
    state.isLogin = info
  },
  [types.CLEAR_LOGIN](state) {
    state.isLogin = false
  }
}

export default mutations
