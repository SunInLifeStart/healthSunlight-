<template>
  <el-menu mode="vertical" :default-active="$route.path" background-color="#304156" text-color="#bfcbd9"
    active-text-color="#409EFF">
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </el-menu>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'

  export default {
    components: {
      SidebarItem,
      ScrollBar
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'

      ])
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }

</style>
