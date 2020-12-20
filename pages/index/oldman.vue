<template>
  <div class="container s-m-t-150 s-m-b-150">
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
          title: '枫落',
          des: '战队开创元勋',
        },
        {
          title: '枪芯',
          des: '战队开创元勋',
        },
        {
          title: '梦颖',
          des: '战队开创元勋',
        },
        {
          title: '殇魂',
          des: '战队开创元勋',
        },
        {
          title: '晓月',
          des: '战队开创元勋',
        },
        {
          title: '玖爱',
          des: '战队开创元勋',
        },
        {
          title: '残风',
          des: '战队开创元勋',
        },
        {
          title: '弃离',
          des: '战队开创元勋',
        },
        {
          title: '季步',
          des: '战队开创元勋',
        },
        {
          title: '星辰',
          des: '战队开创元勋',
        },
        {
          title: '瑞宝',
          des: '战队开创元勋',
        },
        {
          title: '七七',
          des: '战队荣誉元老',
        },
        {
          title: '踽踽',
          des: '战队荣誉元老',
        },
        {
          title: '妖孽',
          des: '战队荣誉元老',
        },
        {
          title: '冷芯',
          des: '战队荣誉元老',
        },
        {
          title: '星宸',
          des: '战队荣誉元老',
        },
        {
          title: '谦谦',
          des: '战队荣誉元老',
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
