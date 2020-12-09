<template>
  <form class="container s-m-t-100 s-m-b-100 curriculum">
    <fieldset>
      <legend>个人简介</legend>
      <div class="s-m-40">
        <p>真名:xxx</p>
        <p>艺名：xxx</p>
        <p>别称：xxx</p>
        <p>星座：射手座</p>
        <p>
          性格：恋旧，有点宅，不太爱交际，只和老朋友联系。厌倦工业化，喜欢自然质朴的人和物。
        </p>
        <p>年龄：25</p>
        <p>生日：10.15</p>
        <p>现实职业：打工人 网络职业：战队发展者</p>
        <p>身高：170cm.</p>
        <p>地址：广东-广州</p>
        <p>爱好：上网 睡觉 发呆 歪歪</p>
        <p>反感：欺骗 敷衍 利用 勾心斗角 巴结 忘本</p>
        <p>
          喜欢的人：Stephen Chow，张学友，Edison Chen，谢文东 G-Dragon，张国荣
        </p>
        <p>喜欢的歌型：电子，中文/外RAP，舞曲，DJ 等等</p>
        <p>
          最喜欢的一句话：世代传承的意志，时代的变迁，人的梦想，这些都是无法阻止的--哥尔·D·罗杰
        </p>
        <p>微博：xxx</p>
        <p>抖音：xxx</p>
        <p>
          游戏历程：真资格老玩家不知道有没有比我早的，当然，看战绩就知道，我是底层炮灰。
        </p>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  asyncData({ query }) {
    // eslint-disable-next-line no-console
    console.log(query)
  },
}
</script>

<style lang="scss" scoped>
.curriculum {
  fieldset {
    border: 1px solid #f40;
    legend {
      margin-left: 20px;
    }
  }
}
</style>
