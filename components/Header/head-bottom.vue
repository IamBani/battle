<template>
  <el-row type="flex" align="middle" justify="center" class="headBottom">
    <el-col
      v-for="(item, index) in titleList"
      :key="item.id"
      class="grid-content s_flex s_flex_align_center s_flex_justify_center"
      :span="3"
      :class="index === id ? 'active' : ''"
      ><div class="bg-purple">
        <nuxt-link
          :to="{
            path: item.path,
            query: {
              id: item.path,
            },
          }"
        >
          {{ item.title }}
        </nuxt-link>
      </div></el-col
    >
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      titleList: [
        {
          id: '0',
          title: '首页',
          path: '/home',
        },
        {
          id: '1',
          title: '发展历程',
          path: '/development',
        },
        {
          id: '2',
          title: '队长简介',
          path: '/captain',
        },
        {
          id: '3',
          title: '战队管理',
          path: '/team',
        },
        {
          id: '4',
          title: '战队元老',
          path: '/oldman',
        },
        {
          id: '5',
          title: '战队股东',
          path: '/shareholder',
        },
        {
          id: '6',
          title: '战队商铺',
          path: '/shop',
        },
        {
          id: '7',
          title: '加入我们',
          path: 'join',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scope>
.headBottom {
  height: 100%;
  .active {
    background-color: $white !important;
  }
  .grid-content {
    background-color: #f40;
    height: 100%;
  }
}
</style>
