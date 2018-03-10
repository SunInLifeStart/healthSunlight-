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
      },
      {
        path: 'news',
        name: '公告栏',
        icon: 'zonghe',
        hidden: true,
        component: _import('dashboard/news')
      },
      {
        path: 'addNews',
        name: '新增新闻',
        icon: 'zonghe',
        hidden: true,
        component: _import('dashboard/addNews')
      },
      {
        path: 'pictureUpload',
        name: '图片上传',
        icon: 'zonghe',
        hidden: true,
        component: _import('dashboard/pictureUpload')
      },
      {
        path: 'toDo',
        name: '待办',
        icon: 'zonghe',
        hidden: true,
        component: _import('dashboard/toDo')
      }
    ]
  },
  {
    path: '/contract',
    component: Layout,
    name: '合同管理',
    redirect: '/contract/',
    icon: 'zujian',
    meta: { role: ['contract'] },
    children: [
      {
        path: '',
        name: '合同台账',
        icon: 'zonghe',
        component: _import('contract/index')
      },
      {
        path: 'detail/:id',
        name: '合同信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/detail')
      },
      {
        path: 'buildAndCollectDetail/:id',
        name: '造采项目合同信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/buildAndCollectDetail')
      },
      {
        path: 'conceptDesignDetail/:id',
        name: '概念设计合同信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/conceptDesignDetail')
      },
      {
        path: 'engineeringCompensateDetail/:id',
        name: '工程赔付合同信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/engineeringCompensateDetail')
      },
      {
        path: 'purchasingInnerDetail/:id',
        name: '采购公司（内）合同信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/purchasingInnerDetail')
      },
      {
        path: 'purchasingOuterDetail/:id',
        name: '采购公司（外）合同信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/purchasingOuterDetail')
      },
      {
        path: 'detail/:id/payments',
        name: '合同付款',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/payments')
      },
      {
        path: 'detail/:id/payments/invoices',
        name: '关联发票',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/invoices')
      },
      {
        path: 'detail/:id/payments/invoice',
        name: '新增发票',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/invoice')
      },
      {
        path: 'detail/:id/changes',
        name: '预估变更',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/changes')
      },
      {
        path: 'changeShow/:id',
        name: '变更签证展示',
        icon: 'zonghe',
        hidden: true,
        component: _import('contract/changeShow')
      }
    ]
  },
  {
    path: '/payment',
    component: Layout,
    redirect: '/payment',
    name: '付款管理',
    icon: 'zujian',
    children: [
      {
        path: '',
        name: '付款申请',
        hidden: true,
        icon: 'zonghe',
        component: _import('payment/index')
      },
      {
        path: 'detail/:id',
        name: '付款详情',
        hidden: true,
        component: _import('payment/detail')
      },
      {
        path: 'bill',
        name: '票据管理',
        icon: 'zonghe',
        component: _import('bill/index')
      },
      {
        path: 'bill/:id',
        name: '票据修改',
        hidden: true,
        icon: 'zonghe',
        component: _import('bill/edit')
      },
      {
        path: 'budget/plan',
        name: '资金计划',
        icon: 'zonghe',
        component: _import('budget/plan')
      },
      {
        path: 'budget/plan/:id',
        name: '资金计划查看',
        icon: 'zonghe',
        hidden: true,
        component: _import('budget/detail')
      },
      {
        path: 'budget/declare',
        name: '资金计划上报',
        icon: 'zonghe',
        hidden: true,
        component: _import('budget/declare')
      },
      {
        path: 'budget/confirm',
        name: '资金计划确认',
        icon: 'zonghe',
        hidden: true,
        component: _import('budget/confirm')
      },
      {
        path: 'budget/summary',
        name: 'BudgetTotal',
        hidden: true,
        component: _import('budget/summary')
      },
      {
        path: 'budget/departmentSum',
        name: '部门资金',
        icon: 'zonghe',
        hidden: true,
        component: _import('budget/departmentSum')
      }
    ]
  },
  {
    path: '/change',
    component: Layout,
    redirect: 'noredirect',
    name: '过程管理',
    icon: 'zujian',
    children: [
      {
        path: '',
        name: '变更签证',
        icon: 'zonghe',
        component: _import('change/index')
      },
      {
        path: 'visaApproval',
        name: '签证发起审批',
        hidden: true,
        icon: 'zonghe',
        component: _import('change/visaApproval/index')
      }, {
        path: 'visaDetail',
        name: '签证详情',
        hidden: true,
        icon: 'zonghe',
        component: _import('change/visaDetail/index')
      }, {
        path: 'confirm',
        name: '完工确认',
        hidden: true,
        icon: 'zonghe',
        component: _import('change/confirm/index')
      }, {
        path: 'initiateApproval',
        name: '发起审批',
        hidden: true,
        icon: 'zonghe',
        component: _import('change/initiateApproval/index')
      }, {
        path: 'newVisa',
        name: '新增签证',
        hidden: true,
        icon: 'zonghe',
        component: _import('change/newVisa/index')
      }
    ]
  },
  {
    path: '/investmentCost',
    component: Layout,
    redirect: 'noredirect',
    name: '投模成本测算与调整',
    hidden: true,
    icon: 'zujian',
    children: [
      {
        path: 'investmentCost',
        name: '投模成本的测算与调整',
        icon: 'zonghe',
        component: _import('cost/investmentCost/index')
      },
      {
        path: 'detail/:id',
        name: '版本信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('cost/investmentCost/investmentVersion/index')
      },
      {
        path: 'areaIndicator',
        name: '面积指标',
        icon: 'zonghe',
        component: _import('cost/investmentCost/areaIndicator/index')
      },
      {
        path: 'dataBase',
        name: '基本信息',
        icon: 'zonghe',
        component: _import('cost/investmentCost/dataBase/index')
      },
      {
        path: 'specialItem',
        name: '特殊事项清单',
        icon: 'zonghe',
        component: _import('cost/investmentCost/specialItem/index')
      },
      {
        path: 'costSummary',
        name: '成本汇总',
        icon: 'zonghe',
        component: _import('cost/investmentCost/costSummary/index')
      },
      {
        path: 'financeCaliberShare',
        name: '财务口径分摊',
        icon: 'zonghe',
        component: _import('cost/investmentCost/financeCaliberShare/index')
      },
      {
        path: 'manageCaliberShare',
        name: '管理口径分摊',
        icon: 'zonghe',
        component: _import('cost/investmentCost/manageCaliberShare/index')
      },
      {
        path: 'costAlloc',
        name: '修正系数表',
        icon: 'zonghe',
        component: _import('cost/investmentCost/costAlloc/index')
      }
    ]
  },
  {
    path: '/targetCost',
    component: Layout,
    redirect: 'noredirect',
    name: '目标成本测算与调整',
    hidden: true,
    icon: 'zujian',
    children: [
      {
        path: 'targetCost',
        name: '目标成本测算与调整',
        icon: 'zonghe',
        component: _import('cost/target/index')
      },
      {
        path: 'version/:id/:isDisabled',
        name: '版本信息',
        icon: 'zonghe',
        hidden: true,
        component: _import('cost/target/version')
      },
      {
        path: 'indicator',
        name: '项目规划指标',
        icon: 'zonghe',
        component: _import('cost/target/indicator')
      },
      {
        path: 'config',
        name: '项目配置标准',
        icon: 'zonghe',
        component: _import('cost/target/config')
      },
      {
        path: 'standard',
        name: '项目建造标准',
        icon: 'zonghe',
        component: _import('cost/target/standard')
      },
      {
        path: 'special',
        name: '项目特殊事项清单',
        icon: 'zonghe',
        component: _import('cost/target/special')
      },
      {
        path: 'summary',
        name: '成本汇总表',
        icon: 'zonghe',
        component: _import('cost/target/summary')
      },
      {
        path: 'nonefabrication',
        name: '非建安成本测算',
        icon: 'zonghe',
        component: _import('cost/target/nonefabrication')
      },
      {
        path: 'fabrication',
        name: '建安成本测算',
        icon: 'zonghe',
        component: _import('cost/target/fabrication')
      },
      {
        path: 'contractCfg',
        name: '合约规划表',
        icon: 'zonghe',
        component: _import('cost/target/contractCfg/index')
      },
      {
        path: 'aimBudgetAdj',
        name: '成本测算调整',
        icon: 'zonghe',
        component: _import('cost/target/aimBudgetAdj/index')
      }, {
        path: 'financeApportion',
        name: '财务口径分摊',
        icon: 'zonghe',
        component: _import('cost/target/allocReport/caliberAlloc/index')
      }, {
        path: 'manageApportion',
        name: '管理口径分摊',
        icon: 'zonghe',
        component: _import('cost/target/allocReport/caliberManage/index')
      }, {
        path: 'groupAlloc',
        name: '组团及楼栋分摊',
        icon: 'zonghe',
        component: _import('cost/target/allocReport/groupAlloc/index')
      },
      {
        path: 'costRuler',
        name: '项目成本标尺',
        icon: 'zonghe',
        component: _import('cost/target/costRuler/index')
      },
      {
        path: 'adjAnalysis',
        name: '调整分析',
        icon: 'zonghe',
        component: _import('cost/target/adjAnalysis/index')
      },
      {
        path: 'approve',
        name: '审核要点',
        icon: 'zonghe',
        component: _import('cost/target/approve')
      }
    ]
  },
  {
    path: '/baseCostManage',
    component: Layout,
    redirect: 'noredirect',
    name: '基准成本管理',
    hidden: true,
    icon: 'zujian',
    children: [
      {
        path: 'baseCostManage',
        name: '基准成本管理',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/index')
      },
      {
        path: 'weaveExplain/:standardCostId/:isDisabled',
        name: '编制说明',
        icon: 'zonghe',
        hidden: true,
        component: _import('cost/baseCostManage/weaveExplain/index')
      },
      {
        path: 'productIndicator',
        name: '业态规划指标',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/productIndicator/index')
      },
      {
        path: 'productCfg',
        name: '业态配置标准',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/productCfg/index')
      },
      {
        path: 'productBuild',
        name: '业态建造标准',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/productBuild/index')
      },
      {
        path: 'costTotal',
        name: '成本汇总表',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/costTotal/index')
      },
      {
        path: 'noConstructionCost',
        name: '非建安基准成本',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/noConstructionCost/index')
      },
      {
        path: 'constructionCost',
        name: '建安基准成本',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/constructionCost/index')
      },
      {
        path: 'financeCostAlloc',
        name: '成本分摊表-财务',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/allocReport/financeCostAlloc/index')
      },
      {
        path: 'manageCostAlloc',
        name: '成本分摊表-管理',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/allocReport/manageCostAlloc/index')
      },
      {
        path: 'designFee',
        name: '设计费限额',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/designFee/index')
      },
      {
        path: 'chargeDatabase',
        name: '前后期收费数据库',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/chargeDatabase/index')
      },
      {
        path: 'specialItem',
        name: '特殊事项清单',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/specialItem/index')
      },
      {
        path: 'cityCfg',
        name: '城市配置标准表',
        icon: 'zonghe',
        component: _import('cost/baseCostManage/cityCfg/index')
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    hidden: true,
    icon: 'wujiaoxing',
    children: [
      {
        path: 'index',
        name: 'Form',
        icon: 'zonghe',
        component: _import('page/form')
      },
      {
        path: 'treeTable',
        name: 'treeTable',
        icon: 'zonghe',
        component: _import('demo/treeTable')
      },
      {
        path: 'table',
        name: 'table',
        icon: 'zonghe',
        component: _import('demo/table')
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
    path: '/',
    component: Layout,
    redirect: '/template',
    name: 'template',
    hidden: true,
    children: [{
      path: 'template',
      component: _import('cost/target/template')
    }]
  },
  {
    path: '/ui',
    component: Layout,
    name: 'ui页面',
    hidden: true,
    redirect: '/ui',
    icon: 'zujian',
    meta: { role: ['contract'] },
    children: [{
      path: '',
      component: _import('ui/commonElements'),
      name: '常用元素',
      icon: 'zonghe'
    }, {
      path: 'index',
      name: '表单',
      icon: 'zonghe',
      component: _import('page/form')
    }, {
      path: 'commonComponents',
      name: '常用组件',
      icon: 'zonghe',
      component: _import('ui/commonComponents')
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
