import { login, getUser } from 'api/user'

const localToken = localStorage.getItem('longisland.token') || ''

export default {
  state: {
    name: '',
    avatar: '',
    organizations: [],
    roles: [],
    token: localToken
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('longisland.token', token)
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ORGANIZATIONS: (state, organizations) => {
      state.organizations = organizations
    },
    SET_ROLES: (state, roles) => {
      state.roles = [...state.roles, roles]
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
        commit('SET_TOKEN', res.data.token)
      })
    },

    // 获取用户信息
    GetUser({
      commit,
      state
    }) {
      return getUser(state.token).then(res => {
        const user = res.data
        commit('SET_NAME', user.name)
        commit('SET_AVATAR', user.avatar)
        commit('SET_ORGANIZATIONS', user.organizations)
        commit('SET_ROLES', user.roles)
        return user
      })
    },

    // 登出
    LogOut({
      commit
    }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_ROLES', [])
        commit('SET_ORGANIZATIONS', [])
        resolve()
      })
    }
  }
}
