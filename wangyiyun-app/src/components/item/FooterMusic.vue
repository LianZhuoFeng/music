<template>
  <div class="FooterMusic"  v-show="this.$store.state.isFooterShow">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ changeStr(playList[playListIndex].name) }}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
      <svg
        class="icon liebiao"
        aria-hidden="true"
        v-if="isbtnShow"
        @click="play"
      >
        <use xlink:href="#icon-playCircle"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-weibiaoti--" @click="play"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model:show="detailShow"
      position="left"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail
        :musicList="playList[playListIndex]"
        :play="play"
        :isbtnShow="isbtnShow"
        :addDuration="addDuration"
        :updateRangeTime="updateRangeTime"
      ></MusicDetail>
    </van-popup>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import MusicDetail from "@/components/item/MusicDetail";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      interVal: 0,
    };
  },
  components: { MusicDetail, Vue3Marquee },
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow",'currentTime']),
  },
  mounted() {
    // this.updateTime()
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
  },
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.addDuration();
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
        this.updateTime();
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
        clearInterval(this.interVal);
      }
    },
    changeStr(str) {
      let data = str ? str : [];
      if (data.length > 10) {
        return data.slice(0, 10) + "...";
      } else {
        return data;
      }
    },
    addDuration() {
      this.updateDuration(this.$refs.audio.duration);
    },
    updateTime() {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
    updateRangeTime(time) {
      this.$refs.audio.currentTime = time;
    },
    ...mapMutations([
      "updateIsbtnShow",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration",
    ]),
  },
  watch: {
    playListIndex: function () {
      //监听下标是否发生改变
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false);
      }
    },
    playList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsbtnShow(false);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      position: absolute;
      left: 0.1rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1rem;
      width: 3rem;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>