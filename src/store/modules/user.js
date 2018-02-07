import {
  login,
  logout,
  getInfo
} from 'api/user'
import {
  // getToken, setToken,
  removeToken
} from 'utils/auth'

const user = {
  state: {
    token: localStorage.getItem('token'),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      localStorage.setItem('token', token)
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, {
      username,
      password
    }) {
      return login(username, password).then(res => {
        commit('SET_TOKEN', res.token)
        return res
      })
    },

    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return getInfo(state.token).then(data => {
        commit('SET_ROLES', data.roles)
        commit('SET_NAME', data.name)
        return data.roles
        // commit('SET_AVATAR', data.avatar)
      })
    },

    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        localStorage.clear('token')
        resolve()
      })
    }
  }
}

export default user
