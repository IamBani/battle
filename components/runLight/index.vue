<template>
  <div class="boxtitle">
    <div ref="d" :style="option" class="title">
      <div ref="t" :style="{ transform: 'translateX(' + x + 'px)' }">
        <slot></slot>
      </div>
    </div>
    <div ref="vi" class="virtual-dom"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    align: {
      type: Boolean,
      default: false,
    },
    speed: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      option: {
        width: this.width,
      },
      // eslint-disable-next-line vue/no-dupe-keys
      spd: this.speed,
      x: 0,
    }
  },
  created() {
    this.x = parseInt(this.width)
  },
  mounted() {
    this.move()
  },
  methods: {
    move() {
      let id = setInterval(() => {
        this.x -= this.speed
        if (Math.abs(this.x) > this.$refs.vi.getBoundingClientRect().width) {
          this.x = this.$refs.vi.getBoundingClientRect().width
        }
      }, 50)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(id)
        id = null
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.boxtitle {
  .title {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
  }
  .virtual-dom {
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    z-index: -100;
  }
}
</style>
