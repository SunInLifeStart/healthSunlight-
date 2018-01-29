<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:
      <span v-for='role in roles' :key='role'>{{role}}</span>
    </div>
    <button @click="getItems('aaaa')">search</button>
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

  export default {
    computed: {
      ...mapGetters([
        'name',
        'roles'
      ])
    },
    data() {
      return {
        lists:[]
      }
    },

    created() {

    },
    methods: {
      //查询列表
      getItems(data) {
        var that=this
        this.$store.dispatch('GetItems',data).then(data=>{
          that.lists = data.items;
        })
      }

    }
  }

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
