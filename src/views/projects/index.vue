<template>
  <div class="dashboard-container">
    <button @click="getProjects('aaaa')">search</button>
    <ul>
      <li v-for="item in lists">
        {{item.name}}
        <el-progress v-if='lists.length>0' :text-inside="true" :stroke-width="18" :percentage="item.percentage" :status="item.status"></el-progress>
      </li>
    </ul>


  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  import {
    Message,
    MessageBox
  } from 'element-ui'
  import store from '@/store'
  const config = require('../../../config/env.' + process.env.ENV_CONFIG)



  export default {
    computed: {
      ...mapGetters([
        'name',
        'roles'
      ])
    },
    data() {
      return {
        lists: []
      }
    },

    created() {

    },
    methods: {
      //查询项目列表
      getProjects(data) {
        var that = this
        this.$store.dispatch('GetProjects', data).then(data => {
          that.lists = data.items;
        })
      }
    }
  }
  //监听被登出事件
  document.addEventListener(config.EVENT_LOGOUT, function (e) {
    console.log('监听到被登出',e)
    MessageBox
      .confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        store
          .dispatch('FedLogOut')
          .then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
      })
  }, false);

  //监听错误事件
  document.addEventListener('error', function (e) {
    console.log('监听到错误信息',e);
    Message({
      message: e.message,
      type: 'error',
      duration: 5 * 1000
    })
  }, false);

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }

</style>
