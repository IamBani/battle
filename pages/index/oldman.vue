<template>
  <div class="container s-m-t-100 s-m-b-100">
    <ul class="old">
      <li
        v-for="(item, i) in list"
        :key="i"
        class="s_flex s-m-r-20 s-m-t-20 old-title"
      >
        <span class="s-m-r-10">{{ item.title }}</span>
        <span>{{ item.des }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Oldman',
  data() {
    return {
      list: [
        {
          title: '天琦',
          des: '战队开创元勋',
        },
        {
          title: '仙域',
          des: '战队功勋元老',
        },
        {
          title: '露露',
          des: '战队功勋元老',
        },
        {
          title: '佛爷',
          des: '战队功勋元老',
        },
        {
          title: '洄噫',
          des: '战队功勋元老',
        },
        {
          title: '糖糖',
          des: '战队功勋元老',
        },
        {
          title: '清风',
          des: '战队功勋元老',
        },
        {
          title: '老哥',
          des: '战队功勋元老',
        },
        {
          title: '独白',
          des: '战队功勋元老',
        },
        {
          title: '導演',
          des: '战队功勋元老',
        },
        {
          title: '熊猫',
          des: '战队功勋元老',
        },
        {
          title: '追忆',
          des: '战队功勋元老',
        },
        {
          title: '心愿',
          des: '战队功勋元老',
        },
        {
          title: '霸道',
          des: '战队功勋元老',
        },
        {
          title: '阿默',
          des: '战队功勋元老',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.old {
  display: flex;
  flex-wrap: wrap;
  .old-title {
    line-height: 80px;
    padding: 0 20px;
    border-radius: 5px;
    transition: all 1s;
    span {
      &:first-child {
        font-size: 2em;
      }
    }
    &:nth-child(n) {
      color: #23b7cb;
      font-size: 15px;
      padding: 5px 15px;
      background: #fff;
      border: 1px transparent solid;
      position: relative;
      &:hover {
        background: linear-gradient(
          45deg,
          rgba(231, 72, 234, 1) 0%,
          rgba(75, 26, 188, 1) 100%
        );
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: -3px;
      right: -3px;
      background: linear-gradient(135deg, #000781, #23b7cb);
      border-radius: 5px;
      z-index: -1;
    }
    &:nth-child(2n) {
      background: linear-gradient(
        45deg,
        rgba(5, 118, 255, 1) 0%,
        rgba(36, 248, 255, 1) 100%
      );
      color: #fff;
      &:hover {
        background: linear-gradient(
          45deg,
          rgba(5, 118, 255, 1) 0%,
          rgba(36, 248, 255, 1) 100%
        );
      }
    }
  }
}
</style>
