<template>
  <el-container class="layout-container">
    <el-aside class="aside" width="auto">
      <sidebarNav class="aside-menu" :is-collapse="isCollapse"></sidebarNav>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i
            :class="{
              'el-icon-s-fold': !isCollapse,
              'el-icon-s-unfold': isCollapse,
            }"
            style="cursor: pointer"
            @click="isCollapse = !isCollapse"
          ></i>
          <span>&nbsp;智慧数据实验室</span>
        </div>
        <el-dropdown>
          <div class="avatar-warp">
            <!-- <img class="avatar" :src="photo" alt="" /> -->
            <img class="avatar" src="https://portrait.gitee.com/uploads/avatars/user/2878/8634507_lizheng2000_1611926860.png!avatar30" alt="" />
            <!-- <span>{{ username }}</span> -->
            <span>用户昵称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">用户退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebarNav from './component/sidebar-nav'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState(['isSidebarNavCollapse'])
  },
  components: {
    sidebarNav
  },
  methods: {
    loginOut() {
      this.$store.commit('LOGIN_OUT')
      /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .aside {
    background-color: #d3dce6;
    // width: 200px !important;
    .aside-menu {
      height: 100%;
    }
  }
  .header {
    height: 64px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar-warp {
      display: flex;
      align-items: center;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
  .main {
    background-color: #e9eef3;
  }
}
</style>
