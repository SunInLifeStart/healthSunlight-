import axios from 'axios'
const config = require('../config/env.' + process.env.ENV_CONFIG)

// 创建axios实例
const service = axios.create({baseURL: config.BACK_END, timeout: 15000})

// request拦截器
service
  .interceptors
  .request
  .use(request => {
    var token = localStorage.getItem('token')
    request.headers['Authorization'] = token
    return request
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  })

// respone拦截器
service
  .interceptors
  .response
  .use(response => {
    /**
     * code为非200是错误的请求
     */
    if (response.status !== 200) {
      
      if (response.status === 201) {
        //发出被登出广播
        document.dispatchEvent(new Event(config.EVENT_LOGOUT));
      }
      return Promise.reject('error')
    } else {
      return response.data.data
    }
  }, error => {
    console.log('err' + error) // for debug

    document.dispatchEvent(new Event(config.EVENT_ERROR));
    
    return Promise.reject(error)
  })

export default service
