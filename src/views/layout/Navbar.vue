<template>
  <div>
    <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="ToggleSideBar" :isActive="app.sidebar.opened"></hamburger>
      <levelbar></levelbar>
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="'static/images/avatars/' + user.avatar">
          <span>{{user.name}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <el-dropdown-item>
            <span @click="confirmLogout" style="display:block;">注销</span>
        </el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
    <el-dialog
      title="注销"
      :visible.sync="logoutConfirmIsVisible"
      width="400px">
      <span>确定要退出当前账号吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logoutConfirmIsVisible = false">取 消</el-button>
        <el-button type="danger" @click="logout">注销</el-button>
      </span>
  </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Levelbar from './Levelbar'
import Hamburger from '@/components/Hamburger'

export default {
  data() {
    return {
      logoutConfirmIsVisible: false
    }
  },
  components: {
    Levelbar,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'app',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'ToggleSideBar',
      'LogOut'
    ]),
    confirmLogout() {
      this.logoutConfirmIsVisible = true
    },
    logout() {
      this.LogOut().then(() => {
        this.logoutConfirmIsVisible = false
        location.reload()  // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

