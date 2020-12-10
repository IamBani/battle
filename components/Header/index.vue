<template>
  <el-row class="s_flex s_flex_align_center head_height">
    <el-col :span="18"
      ><div class="s_header_left">东部幕后花絮战队官网</div></el-col
    >
    <el-col :span="6"
      ><div class="music">
        <img src="../../assets/image/logo.png" alt="" />
        <!-- <audio src=""><audio -->
      </div></el-col
    >
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
.music {
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 5px solid #631d1d;
  }
}
</style>
