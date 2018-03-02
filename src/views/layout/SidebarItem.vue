<template>
  <div>
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <!-- <router-link :key="item.path" v-if="item.hidden&&!item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.children[0].name}}
        </el-menu-item>
      </router-link> -->
      <router-link :key="item.path" v-if="item.firstFlag" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path">
          <icon-svg v-if='item.children[0].icon' :icon-class="item.children[0].icon" /> {{item.children[0].name}}
        </el-menu-item>
      </router-link>
      
      <el-submenu :key="item.path" :index="item.name" v-else-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.name}}
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item :key="child.path" class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
          <router-link :key="child.path" v-else class="menu-indent" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.svg-icon {
  margin-right: 10px;
}
.hideSidebar .menu-indent {
  display: block;
  text-indent: 10px;
}
</style>

