import fetch from './fetch'
import url from './url'

/**
 * 登录接口
 * @export
 * @param {*} username 用户名
 * @param {*} password 密码
 * @returns
 */
export function login(username, password) {
  return fetch.post(url.login, { username, password })
}

/**
 * 获取用户信息
 *
 * @export
 * @returns
 */
export function getUser() {
  return fetch.post(url.user)
}
