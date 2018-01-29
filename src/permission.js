import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import {
  getToken
} from '@/utils/auth' // 验权

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 路由开始跳转之前、显示进度条
  NProgress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      // 判断本地是否含有权限、如果没有则去获取用户信息
      if (store.getters.roles.length === 0) {
        // 获取用户信息
        store.dispatch('GetInfo').then(roles => {
          // 按照权限生成的对应左侧权限
          store.dispatch('GenerateRoutes', {
            roles
          }).then(() => {
            router.addRoutes(store.getters.addRouters)
            next({
              ...to
            })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})
