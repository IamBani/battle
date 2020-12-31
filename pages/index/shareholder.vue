<template>
  <div
    class="container shareholder s-m-b-200 s-m-t-200 s_flex s_flex_direction s_flex_justify_center s_flex_align_center"
  >
    <div
      v-for="(item, index) in list"
      :key="index"
      class="s_flex s_flex_justify_center s_flex_wrap box"
    >
      <div v-for="(ele, i) in item" :key="i" class="s-m-r-20 s-m-t-20">
        <ul class="s_flex s_flex_justify_center s_flex_align_center listitem">
          <li class="s-m-r-15 name">{{ ele.name }}</li>
          <li>{{ ele.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        [{ name: '虚席以待', title: '超凡至尊' }],
        [
          { name: '虚席以待', title: '紫金王爵' },
          { name: '虚席以待', title: '紫金王爵' },
        ],
        [
          { name: '弑心', title: '圣影星钻' },
          { name: '抹杀', title: '圣影星钻' },
          { name: '欣郎', title: '圣影星钻' },
        ],
        [
          { name: '宇梦', title: '凌云传说' },
          { name: '柒哥', title: '凌云传说' },
          { name: '虚席以待', title: '凌云传说' },
          { name: '虚席以待', title: '凌云传说' },
        ],
        [
          { name: '小杨', title: '尊贵荣耀' },
          { name: '虚席以待', title: '尊贵荣耀' },
          { name: '虚席以待', title: '尊贵荣耀' },
          { name: '虚席以待', title: '尊贵荣耀' },
        ],
        [
          { name: '殇情', title: '传奇星耀' },
          { name: '至臻', title: '传奇星耀' },
          { name: '蚊子', title: '传奇星耀' },
          { name: '小杨', title: '传奇星耀' },
          { name: '虚席以待', title: '尊贵荣耀' },
        ],
        [
          { name: '韩冰', title: '非凡贵族' },
          { name: '梦旅', title: '非凡贵族' },
          { name: '堕落', title: '非凡贵族' },
          { name: '虚席以待', title: '尊贵荣耀' },
          { name: '虚席以待', title: '尊贵荣耀' },
        ],
        [
          { name: '八月', title: '永恒钻石' },
          { name: '沐白', title: '永恒钻石' },
          { name: '魔王', title: '永恒钻石' },
          { name: '舒舒', title: '永恒钻石' },
          { name: '韵记', title: '永恒钻石' },
          { name: '七星', title: '永恒钻石' },
          { name: '眼泪', title: '永恒钻石' },
          { name: '虚席以待', title: '永恒钻石' },
          { name: '虚席以待', title: '永恒钻石' },
          { name: '虚席以待', title: '永恒钻石' },
          { name: '虚席以待', title: '永恒钻石' },
        ],
        [
          { name: '民谣', title: '实力铂金' },
          { name: '鲲鹏', title: '实力铂金' },
          { name: '淡殇', title: '实力铂金' },
          { name: '秦珂', title: '实力铂金' },
          { name: '正太', title: '实力铂金' },
          { name: '幕云', title: '实力铂金' },
          { name: '艾克', title: '实力铂金' },
          { name: '小黑', title: '实力铂金' },
          { name: '拧七', title: '实力铂金' },
          { name: '阿叁', title: '实力铂金' },
          { name: '药药', title: '实力铂金' },
          { name: '菜菜', title: '实力铂金' },
          { name: '蒂尊', title: '实力铂金' },
          { name: '游子', title: '实力铂金' },
          { name: '余味', title: '实力铂金' },
          { name: '奇门', title: '实力铂金' },
          { name: '雷霆', title: '实力铂金' },
          { name: '南街', title: '实力铂金' },
          { name: '狼道', title: '实力铂金' },
          { name: '虚席以待', title: '实力铂金' },
          { name: '虚席以待', title: '实力铂金' },
          { name: '虚席以待', title: '实力铂金' },
          { name: '虚席以待', title: '实力铂金' },
        ],
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.shareholder {
  div {
    color: #eee;
  }
  .listitem {
    padding: 5px 20px;
    height: 80px;
    line-height: 80px;
    // background-image: linear-gradient(-45deg, #71acea, #0755a7);
    border-radius: 4px;
    .name {
      font-size: 2em;
    }
  }
  .box {
    div {
      //   background-image: linear-gradient(-45deg, #71acea, #0755a7);
      &:nth-of-type(n) {
        background-image: linear-gradient(-45deg, #c75ee7, #590673);
      }
      &:nth-of-type(2n) {
        background-image: linear-gradient(-45deg, #ea5fa7, #630636);
      }
      &:nth-of-type(2n + 1) {
        background-image: linear-gradient(-45deg, #71acea, #0755a7);
      }
      &:nth-of-type(3n + 1) {
        background-image: linear-gradient(-45deg, #6de043, #195504);
      }
    }
  }
}
</style>
