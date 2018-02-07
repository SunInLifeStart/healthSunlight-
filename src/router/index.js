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
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  hidden: true,
  children: [{
    path: 'dashboard',
    component: _import('dashboard/index')
  }]
},
{
  path: '/',
  component: Layout,
  redirect: '/budgetTotal',
  name: 'DudgetTotal',
  hidden: true,
  children: [{
    path: 'budgetTotal',
    component: _import('contact/budgetTotal/index')
  }]
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
    path: '/contact',
    component: Layout,
    redirect: 'noredirect',
    name: '合同管理',
    icon: 'zujian',
    children: [
      {
        path: 'contactLedger',
        name: '合同台账',
        icon: 'zonghe',
        component: _import('contact/contactLedger/index')
      },
      {
        path: 'contractInfo',
        name: '合同信息',
        icon: 'zonghe',
        component: _import('contact/contractInfo/index')
      },
      {
        path: 'contactPayment',
        name: '合同付款',
        icon: 'zonghe',
        component: _import('contact/contactPayment/index')
      }, {
        path: 'contactChange',
        name: '预估变更',
        icon: 'zonghe',
        component: _import('contact/contactChange/index')
      }
    ]
  },
  {
    path: '/payment',
    component: Layout,
    redirect: 'noredirect',
    name: '付款管理',
    icon: 'zujian',
    children: [
      {
        path: 'payments',
        name: '付款申请',
        icon: 'zonghe',
        component: _import('payment/payments/index')
      },
      {
        path: 'payment',
        name: '付款申请详情',
        hidden: true,
        icon: 'zonghe',
        component: _import('payment/payment/index')
      },
      {
        path: 'billManage',
        name: '票据管理',
        icon: 'zonghe',
        component: _import('payment/billManage/index')
      },
      {
        path: 'billModify',
        name: '票据修改页面',
        icon: 'zonghe',
        component: _import('payment/billModify/index')
      }
    ]
  },
  {
    path: '/process',
    component: Layout,
    redirect: 'noredirect',
    name: '过程管理',
    icon: 'zujian',
    children: [
      {
        path: 'visaChange',
        name: '变更签证',
        icon: 'zonghe',
        component: _import('process/visaChange/index')
      }, {
        path: 'visaApproval',
        name: '签证发起审批',
        icon: 'zonghe',
        component: _import('process/visaApproval/index')
      }, {
        path: 'visaBillingSearch',
        name: '签证下发单查看',
        icon: 'zonghe',
        component: _import('process/visaBillingSearch/index')
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    icon: 'zujian',
    children: [
      {
        path: 'index',
        name: 'Form',
        icon: 'zonghe',
        component: _import('page/form')
      },
      {
        path: 'demo',
        name: 'demo',
        icon: 'zonghe',
        component: _import('demo/index')
      },
      {
        path: 'charts',
        name: 'charts',
        icon: 'zonghe',
        component: _import('demo/charts')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
