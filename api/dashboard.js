/**
 * 工作台api
 * @param {*} data 
 */
import fetch from './fetch'
import url from './url';

export function getItems(data) {
  console.log('getItems')
  return fetch({
    // url: 'http://192.168.1.12:19000/api/user/info',
    url: url.getItems,
    method: 'post',
    data: data
  })
}
