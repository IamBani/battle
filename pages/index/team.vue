<template>
  <div class="container s-m-t-150 s-m-b-150">
    <ul class="term">
      <li
        v-for="(item, i) in list"
        :key="i"
        :style="{
          'background-color': item.background,
          transform: 'rotate(' + item.rotate + 'deg)',
        }"
        class="termscc"
        @click="rotate(i), center(i)"
      >
        <img
          class="s-m-t-10 s-m-b-10"
          :src="item.url"
          alt=""
          style="width: 100px; height: 100px; border-radius: 50%"
        />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      list: [
        {
          name: '管理名单',
          url: require('../../assets/image/p1的副本.png'),
          background: '#409EFF',
          rotate: 0,
        },
        {
          name: '木木',
          url: require('../../assets/image/p2.png'),
          background: '#67C23A',
          rotate: 0,
        },
        {
          name: '花花',
          url: require('../../assets/image/p3.png'),
          background: '#E6A23C',
          rotate: 0,
        },
        {
          name: '抄抄',
          url: require('../../assets/image/p4.png'),
          background: '#F56C6C',
          rotate: 0,
        },
        {
          name: '依依',
          url: require('../../assets/image/p5.png'),
          background: '#909399',
          rotate: 0,
        },
        {
          name: '鼓鼓',
          url: require('../../assets/image/p6.png'),
          background: '#5536BE',
          rotate: 0,
        },
        {
          name: '剑网',
          url: require('../../assets/image/p7.png'),
          background: '#A821AA',
          rotate: 0,
        },
        {
          name: '荣耀',
          url: require('../../assets/image/p8.png'),
          background: '#1FBF17',
          rotate: 0,
        },
        {
          name: 'hihi',
          url: require('../../assets/image/p9.png'),
          background: '#420D52',
          rotate: 0,
        },
      ],
    }
  },
  created() {},
  methods: {
    rotate(i) {
      if (i !== this.list.length - 1) return
      const leng = this.list.length
      if (!this.flag) {
        for (let index = 0; index < leng; index++) {
          this.$set(this.list[index], 'rotate', 0)
        }
        this.flag = !this.flag
        return
      }
      const median = Math.floor(this.list.length / 2)
      for (let index = 0; index < leng; index++) {
        if (median > index) {
          this.$set(this.list[index], 'rotate', -15 * (median - index))
        } else if (median < index) {
          this.$set(this.list[index], 'rotate', 15 * (index - median))
        }
      }
      this.flag = !this.flag
    },
    center(i) {
      if (i === this.list.length - 1) return
      const deg = 90 / i
      const rightdeg = 60 / (this.list.length - i)
      this.cycle(i, deg, rightdeg)
    },
    cycle(i, deg, rightdeg) {
      const leng = this.list.length
      for (let index = 0; index < leng; index++) {
        if (i > index) {
          this.$set(this.list[index], 'rotate', -deg * (i - index))
        } else if (i < index) {
          this.$set(this.list[index], 'rotate', 30 + rightdeg * (index - i))
        } else {
        }
        this.$set(this.list[i], 'rotate', 0)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.term {
  position: relative;
  height: 400px;
  margin: 0 40px;
  .termscc {
    transition: all 700ms ease 0s;
    left: 50%;
    right: 50%;
    margin-left: -75px;
    position: absolute;
    height: 400px;
    width: 130px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: bottom;
  }
}
</style>
