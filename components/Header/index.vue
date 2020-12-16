<template>
  <el-row class="s_flex s_flex_align_center head_height">
    <el-col :span="18"
      ><div class="s_header_left">南部忆城旧梦战队官网</div></el-col
    >
    <el-col :span="6"
      ><div class="music s_cursor" @click="play">
        <img src="../../assets/image/logo.jpg" alt="" :style="option" />
        <audio
          ref="audio"
          loop
          src="../../assets/audio/梦然 - 少年.flac"
        ></audio></div
    ></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      option: {
        'animation-play-state': 'paused',
      },
    }
  },
  mounted() {},
  methods: {
    play() {
      const audio = this.$refs.audio
      if (audio.paused) {
        audio.play()
        this.$set(this.option, 'animation-play-state', 'running')
      } else {
        audio.pause()
        this.$set(this.option, 'animation-play-state', 'paused')
      }
    },
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
    animation: xuan 3s infinite linear;
  }
}
@keyframes xuan {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
