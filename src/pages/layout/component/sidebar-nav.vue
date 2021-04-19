<template>
  <el-menu
    :collapse="isCollapse"
    :collapse-transition="false"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="currentMenu"
  >
  <div class="logo-aside"></div>
    <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
  </el-menu>
</template>

<script>
import DynamicMenu from './dynamic-menu'
import { mapState } from 'vuex'

export default {
  props: ['is-collapse'],
  data() {
    return {}
  },
  computed: {
    ...mapState(['isSidebarNavCollapse']),
    ...mapState('permission', ['sidebarMenu', 'currentMenu'])
  },
  methods: {},
  components: {
    DynamicMenu
  }
}
</script>

<style lang="scss" scoped>
.logo-aside {
  width: 160px;
  height: 57px;
  margin: 10px 0 0 12px;
  padding-right: 40px;
  background: url(./logo.png) no-repeat;
}
</style>
