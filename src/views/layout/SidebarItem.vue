<template>
  <div>
    <template v-for="item in routes" v-if="!item.hidden&&item.children&&!app.contractDetail">
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
    <div v-if="app.contractDetail">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156" text-color="#bfcbd9"
        active-text-color="#409EFF">
        <el-menu-item index="1" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title" @click="showDetail('1')">合同信息</span>
        </el-menu-item>
        <el-menu-item index="2" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title" @click="showChanges('1')">预估变更</span>
        </el-menu-item>
        <el-menu-item index="3" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title" @click="showPayments('1')">合同付款</span>
        </el-menu-item>
        <el-menu-item index="4" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title">合同变更</span>
        </el-menu-item>
        <el-menu-item index="5" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title">补充合同</span>
        </el-menu-item>
        <el-menu-item index="6" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title">合同结算</span>
        </el-menu-item>
        <el-menu-item index="7" style="padding-left: 16px"><i class="el-icon-menu"></i>
          <span slot="title">采购清单</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarItem',
  data() {
    return {
      contractDetail: false
    }
  },
  props: {
    routes: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(['app'])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    showDetail(id) {
      this.$router.push({ name: '合同信息', params: { id }})
    },
    showChanges(id) {
      this.$router.push({ name: '预估变更', params: { id }})
    },
    showPayments(id) {
      this.$router.push({ name: '合同付款', params: { id }})
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

