<template>
  <el-row class="s_flex s_flex_align_center head_height">
    <el-col :span="18"
      ><div class="s_header_left">东部幕后花絮战队官网</div></el-col
    >
    <el-col :span="6"><div class="music">音乐</div></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.head_height {
  height: 100%;
  color: $white;
  .s_header_left {
    font-size: 50px;
  }
}
</style>
