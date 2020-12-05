<template>
  <div>
    <el-container class="box">
      <el-header class="header"><Head class="container" /></el-header>
      <el-header><bottom class="container" /></el-header>
      <el-main>Main</el-main>
      <el-footer>底部</el-footer>
    </el-container>
  </div>
</template>

<script>
import Head from '@/components/Header/index'
import bottom from '@/components/Header/head-bottom'
export default {
  components: {
    Head,
    bottom,
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
}
</style>
