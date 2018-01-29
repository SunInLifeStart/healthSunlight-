import fetch from '@/utils/fetch'

export function login(username, password) {
  // return fetch({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
  if (username == 'admin' && password == 'admin')
    return Promise.resolve({
      code: 200,
      data: {
        token: '随便写'
      }
    })
  return Promise.reject({
    code: 201,
    msg: '登录失败'
  })
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}
