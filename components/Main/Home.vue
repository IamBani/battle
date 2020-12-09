<template>
  <div class="home">
    <el-carousel :height="height">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image
          ref="image"
          style="width: 100%; height: 100%"
          :src="bartab"
          fit="fit"
          @load="imageLoad"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row class="s-m-t-30">
      <el-col :offset="18" :span="6"
        ><div class="s_flex s_flex_align_center s_corsur">
          <el-image :src="yyCat" style="width: 35px; height: 35px"></el-image
          >点击进入幕后花絮YY频道
        </div>
        <div class="s-m-t-10 s_flex s_flex_align_center s_corsur">
          <el-image :src="qq2" style="width: 35px; height: 35px"></el-image
          >战队qq群
        </div>
      </el-col>
    </el-row>
    <div class="s-m-t-40 tidbits">
      <div class="introduced">幕后花絮的介绍</div>
    </div>
    <runLight class="s-m-t-20" :speed="2" width="200px"
      >优秀的我们一定来自于优秀的幕后花絮</runLight
    >
    <el-row type="flex" align="middle" class="s-m-t-50">
      <el-col :span="6">
        <div
          class="s_flex s_flex_direction s_flex_align_center s_flex_justify_between"
        >
          <img src="../../assets/image/we.png" alt="" />
          <div
            class="s_flex s_flex_direction s_flex_align_center s_flex_justify_between s-h-80 s-m-t-20"
          >
            <h2 class="s_bold">人性管理</h2>
            <span>战队人性化管理能让队员感受到战队的关怀与帮助</span>
            <span>从而增强队员对战队的忠诚度</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="s_flex s_flex_direction s_flex_align_center">
          <img src="../../assets/image/fangyu.png" alt="" />
          <div
            class="s_flex s_flex_direction s_flex_align_center s_flex_justify_between s-h-80 s-m-t-20"
          >
            <h2 class="s_bold">素质绿色</h2>
            <span>游戏的环境需要我们共同来维护</span>
            <span>素质是一个玩家个人品质的集中表现</span>
            <span>在幕后花絮所有的兄弟都是绿色玩家以及素质游戏</span>
          </div>
        </div></el-col
      >
      <el-col :span="6">
        <div class="s_flex s_flex_direction s_flex_align_center">
          <img src="../../assets/image/xin.png" alt="" />
          <div
            class="s_flex s_flex_direction s_flex_align_center s_flex_justify_between s-h-80 s-m-t-20"
          >
            <h2 class="s_bold">快乐团体</h2>
            <span
              >这里没有争吵,更没有欺骗和利益,只有大家累积的一点一滴的情谊</span
            >
            <span
              >这里没有高低之分,身为这里的每个人请注意素质和修养,并不是嘴上功夫</span
            >
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="s_flex s_flex_direction s_flex_align_center">
          <img src="../../assets/image/tuandui.png" alt="" />
          <div
            class="s_flex s_flex_direction s_flex_align_center s_flex_justify_between s-h-80 s-m-t-20"
          >
            <h2 class="s_bold">用心发展</h2>
            <span>这里不需要人的数量,也无关任何利益</span>
            <span>愿这里是你们不受拘束之地,享受竞技的快乐</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="s-m-t-200 tidbits">
      <div>战队公告</div>
    </div>
    <div class="s-m-t-60 tear container">
      <div class="rowpper" :style="{ height: h + 'px' }">
        <div
          v-for="(item, i) in annoucement"
          :key="i"
          class="s_flex s-p-t-30 s-p-b-30"
          :class="id === i ? 'teardes' : ''"
          @mouseenter="action(i)"
          @mouseleave="id = -1"
        >
          <div
            class="s_flex s_flex_direction s_flex_align_center s_flex_justify_center tearleft"
          >
            <span>{{ i + 1 }}</span>
            <span>{{ item.tiem }}</span>
          </div>
          <div
            class="s_flex s_flex_direction s-p-l-40 s_flex_justify_center s-p-r-20 tearcenter"
          >
            <span>{{ item.title }}</span>
            <span>{{ item.descriptions }}</span>
          </div>
          <div
            class="tearright s_flex s_flex_justify_centers s_flex_align_center"
          >
            <img src="../../assets/image/p1.png" alt="" />
          </div>
        </div>
      </div>
      <div
        style="text-align: center"
        class="s-p-t-20 s-p-b-20 s_cursor"
        @click="open"
      >
        {{ flag ? '查看更多' : '收起' }}
      </div>
    </div>
    <div class="s-m-t-200 tidbits">
      <div>战队友谊</div>
    </div>
    <runLight class="s-m-t-20" :speed="2" width="200px"
      >我们一路走来，我们维系到今天的朋友</runLight
    >
    <div class="container s_flex s_flex_wrap s-m-t-40 s-m-b-70">
      <span
        v-for="(item, i) in list"
        :key="i"
        class="s-p-30"
        style="text-align: center"
      >
        {{ item.friend }}
      </span>
    </div>
  </div>
</template>
<script>
import bartab from '@/assets/image/Texture-2.png'
import yyCat from '@/assets/image/yyCat.png'
import qq2 from '@/assets/image/qq2.png'
import runLight from '@/components/runLight/index'
export default {
  components: {
    runLight,
  },
  data() {
    return {
      bartab,
      yyCat,
      qq2,
      height: '0',
      id: -1,
      index: 3,
      flag: true,
      list: [
        {
          friend: '2012',
        },
        {
          friend: '故友重逢',
        },
        {
          friend: '我的竞技梦',
        },
        {
          friend: '东部王者崛起',
        },
        {
          friend: 'Story ｜ Team',
        },
        {
          friend: '东部信仰者',
        },
        {
          friend: '难以割舍的情',
        },
        {
          friend: '诗情画意',
        },
        {
          friend: '红番区战队',
        },
        {
          friend: '呆到自然萌',
        },
        {
          friend: '君临天下',
        },
        {
          friend: '聚力电竞',
        },
        {
          friend: '指点江山',
        },
      ],
      annoucement: [
        {
          tiem: '2020-12-05',
          title: '幕后花絮3月15号队内赛最强兵王',
          descriptions:
            '在幕后花絮本次队内赛一一角逐后，恭喜:本战队队员 以诺，爆爆，沈辞，晓龍在队内赛为最佳，每人获得英雄武器一把',
        },
        {
          tiem: '2020-12-06',
          title: '幕后花絮3月15号队内赛冠军组',
          descriptions:
            '在幕后花絮本次队内赛经过淘汰赛，半决赛这一组队取得最终的胜者者他们分别是 沈索，天成，成为本次 队内冠军组！特此奖励这组120000CF点作为奖励。',
        },
        {
          tiem: '2020-12-07',
          title: '幕后花絮战队官网正式成立啦！',
          descriptions:
            '在幕后花絮本次队内赛一一角逐后，恭喜:本战队队员 以诺，爆爆，沈辞，晓龍在队内赛为最佳，每人获得英雄武器一把',
        },
        {
          tiem: '2020-12-08',
          title: '是网络，让我们有种知音遇知音的相惜。',
          descriptions:
            '网络，是一个梦幻的国度，是一个，能够促进人与人之间相互沟通与了解的平台！也是一个可供世人放松紧绷神经的载体',
        },
      ],
    }
  },
  computed: {
    h() {
      return this.index * 180
    },
  },
  mounted() {},
  methods: {
    imageLoad(e) {
      if (this.height === this.$refs.image[0].imageHeight + 'px') {
        return
      }
      this.height = this.$refs.image[0].imageHeight + 'px'
    },
    action(index) {
      this.id = index
    },
    open() {
      this.flag = !this.flag
      this.index = this.flag ? 3 : this.annoucement.length
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  .tidbits {
    background-image: url('../../assets/image/ititle.png');
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    .introduced {
      width: 130px;
      margin: 0 auto;
      border-bottom: 1px solid #ffb814;
    }
  }
  .tear {
    border: 1px solid #d9d9d9;
    padding: 0;
    .tearleft {
      width: 120px;
      height: 120px;
      padding: 10px;
      border-right: 1px solid #d9d9d9;
      span {
        &:first-child {
          font-weight: normal;
          font-style: normal;
          display: block;
          line-height: 42px;
          font-size: 36px;
          color: #e6e6e6;
        }
        &:last-child {
          font-weight: normal;
          font-style: normal;
          display: block;
          font-size: 16px;
          line-height: 30px;
          color: #999999;
        }
      }
    }
    .tearcenter {
      flex: 1;
      span {
        &:first-child {
          margin: 0;
          color: #1a1a1a;
          font-weight: bold;
          font-size: 16px;
          line-height: 34px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:last-child {
          margin: 0;
          line-height: 32px;
          font-size: 14px;
          color: #999999;
        }
      }
    }
    .tearright {
      width: 120px;
      margin-right: 20px;
      img {
        // width: 100px;
        // height: 100px;
        border-radius: 4px;
      }
    }
    .rowpper {
      overflow: hidden;
      transition: all 1s ease-in-out;
    }
    .teardes {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
