<template>
  <div class="s-m-t-20 s-m-b-20 foot">
    <div class="s_flex s_flex_justify_center">
      <div
        v-for="(item, i) in list"
        :key="i"
        class="foottop s_flex s_flex_align_center s-p-l-20 s-p-r-20"
      >
        <i :class="item.icon" class="s-p-r-15" style="font-size: 35px"></i>
        {{ item.title }}
      </div>
    </div>
    <div class="s_flex s_flex_justify_center s_flex_align_center footbutton">
      <img src="../../assets/image/yyCat.png" alt="" />
      <span class="s_cursor" @click="targ">点击进入忆城旧梦YY频道：8414</span>
      <span>忆城旧梦队长：梦仔</span>
      <span>｜</span>
      <span>忆城旧梦战队抖音ID：Im8414</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: 'el-icon-star-off',
          title: '用心专注发展战队',
        },
        {
          icon: 'el-icon-thumb',
          title: '游戏玩家热烈推荐',
        },
        {
          icon: 'el-icon-sunset',
          title: '湖北大区前三',
        },
        {
          icon: 'el-icon-baseball',
          title: '南部战区人气战队',
        },
      ],
    }
  },
  methods: {
    targ() {
      window.open('https://www.yy.com/10659642', '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.foot {
  .foottop {
    border: 1px solid #333;
    line-height: 80px;
    text-align: center;
    margin-right: 20px;
    color: #aaa;
  }
  .footbutton {
    color: #aaa;
    margin-top: 20px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    span {
      margin-right: 20px;
    }
  }
}
</style>
