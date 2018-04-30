import Vue from 'vue'
import Router from 'vue-router'
// 选择不同的引入方式、大型项目中 懒加载页面足够多的话会导致热更新耗时较长、所以只在生产环境下启动懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

// 布局
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/

//  基本路由、没有任何权限的路由
export const constantRouterMap = [{
  path: '/login',
  component: _import('login/index'),
  hidden: true
},
{
  path: '/404',
  component: _import('404'),
  hidden: true
}]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '',
    component: Layout,
    firstFlag: 'true',
    children: [
      {
        path: '',
        component: _import('dashboard/index'),
        name: '首页',
        icon: 'zonghe'
      }
    ]
  },
  {
    path: '/payment',
    component: Layout,
    firstFlag: 'true',
    children: [
      {
        path: 'budget/plan',
        name: '饮食健康',
        icon: 'zonghe',
        component: _import('budget/plan')
      }
    ]
  },
  {
    path: '/contract',
    component: Layout,
    firstFlag: 'true',
    children: [
      {
        path: '',
        name: '季节养生',
        icon: 'zonghe',
        component: _import('contract/index')
      }
    ]
  },
  {
    path: '/cost',
    component: Layout,
    firstFlag: 'true',
    children: [
      {
        path: 'investmentCost',
        name: '养生资讯 ',
        icon: 'zonghe',
        component: _import('cost/investmentCost/index')
      }
    ]
  }
]
