import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // 权限
import '@/services/currency.js' // 千分位过滤器

Vue.use(ElementUI, {
  locale
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')
