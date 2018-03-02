/**
 * 付款api
 * @param {*} data
 */
import fetch from './fetch'
import url from './url'

export function findPayments() {
  return fetch({
    url: url.findPayments,
    method: 'post'
  })
}

export function findPayment() {
  return fetch({
    url: url.findPayment,
    method: 'post'
  })
}

