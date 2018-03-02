/**
 * 工作台api
 * @param {*} data
 */
import fetch from './fetch'
import url from './url'

export function getHeadlines() {
  return fetch({
    url: url.headlines,
    method: 'post'
  })
}

export function getNews() {
  return fetch({
    url: url.news,
    method: 'post'
  })
}

export function getEvents() {
  return fetch({
    url: url.events,
    method: 'post'
  })
}
