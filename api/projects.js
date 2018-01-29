/**
 * 项目api
 * @param {*} data 
 */
import fetch from './fetch'
import url from './url';

export function getProjects(data) {
  console.log('getItems')
  return fetch({
    url: url.getProjects,
    method: 'post',
    data: data
  })
}
