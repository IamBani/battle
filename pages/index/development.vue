<template>
  <div class="container s-m-t-80 s-m-b-80">
    <el-timeline>
      <el-timeline-item
        v-for="(item, i) in list"
        :key="i"
        type="success"
        color="hsv"
        :timestamp="item.tiem"
        placement="top"
        size="large"
      >
        <el-card>
          <div class="s_flex s_flex_justify_between s_flex_align_center">
            <div>
              <h4 class="title s-p-b-10">{{ item.title }}</h4>
              <p>{{ item.des }}</p>
            </div>
            <div class="s_cursor">
              <i
                :class="flag ? 'el-icon-video-play' : 'el-icon-video-pause'"
                style="font-size: 35px"
              ></i>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      list: [
        {
          tiem: '2020-12-08',
          title: '频道升级',
          des: '2020年3月06号战队频道原90482，升级为1454',
        },
        {
          tiem: '2020-12-09',
          title: '战队官网诞生日',
          des: '2020年3月06号幕后花絮官网面世 www.yy1454.com',
        },
        {
          tiem: '2020-12-10',
          title: '自定义',
          des: '自定义',
        },
        {
          tiem: '2020-12-11',
          title: '自定义',
          des: '自定义',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: normal;
  color: #d72403;
  font-size: 20px;
}
</style>
