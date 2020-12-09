<template>
  <div>
    <el-container class="box">
      <el-header class="header"><Head class="container" /></el-header>
      <el-header><bottom class="container" /></el-header>
      <el-main class="main"><nuxt-child /></el-main>
      <el-footer class="footer"><foot class="container" /></el-footer>
    </el-container>
  </div>
</template>

<script>
import Head from '@/components/Header/index'
import bottom from '@/components/Header/head-bottom'
import foot from '@/components/Footer/index'
export default {
  components: {
    Head,
    bottom,
    foot,
  },
  asyncData({ redirect, route }) {
    if (route.path === '/') {
      redirect('/home')
    }
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.box {
  .header {
    width: 100%;
    height: 100px !important;
    background-color: $back_black;
  }
  .main {
    padding: 0;
  }
  .footer {
    width: 100%;
    height: auto !important;
    background-color: $back_black;
  }
}
</style>
