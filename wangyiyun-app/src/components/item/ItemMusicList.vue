<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-playCircle"></use>
        </svg>
        <span class="listLeft_spanOne">播放全部</span
        ><span class="listLeft_spanTwo">(共{{ itemList.length }}首)</span>
      </div>
      <div class="listRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-plus-line"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in itemList" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ changeStr(item.name) }}</p>
            <div class="left_spanAr">
              <span v-for="(item1, index) in item.ar" :key="index">{{
                item1.name+'.'
              }}</span>
            </div>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true" >
            <use xlink:href="#icon--Todo-List"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  setup() {
    function changeStr(str) {
      let data = str ? str : [];
      if (data.length > 10) {
        return data.slice(0, 10) + "...";
      } else {
        return data;
      }
    }
    return { changeStr };
  },
  props: ["itemList", "subscribedCount"],
  methods:{
    playMusic:function(i){
      this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList','updatePlayListIndex'])
  }
};
</script>

<style lang="less" scoped>
.itemMusicList {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      width: 4rem;
      height: 100%;
      display: flex;
      // background-color: antiquewhite;
      align-items: center;
      .listLeft_spanOne {
        margin-left: 0.2rem;
        font-weight: 550;
        font-size: 0.328rem;
      }
      .listLeft_spanTwo {
        color: rgb(164, 164, 164);
      }
    }
    .listRight {
      display: flex;
      height: 0.845rem;
      border-radius: 4rem;
      align-items: center;
      font-size: 0.2rem;
      background-color: rgb(235, 57, 18);
      .icon {
        padding-left: 0.125rem;
      }
      span {
        padding-right: 0.125rem;
        font-size: 0.3rem;
        color: #e6dddd;
      }
    }
  }
  .itemList {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 1rem;
      .itemLeft {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 6rem;
        .leftSpan {
          color: #727272;
          width: 15%;
        }
        div {
          display: flex;
          flex-direction: column;
          p {
            font-weight: 550;
            color: #323232;
            font-size: 0.325rem;
          }
          .left_spanAr {
            display: flex;
            flex-direction: row;
            span {
              font-size: 0.155rem;
              color: #727272;
            }
          }
        }
      }
      .itemRight {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 3.1rem;
        margin-right: 0.3rem;
        .icon {
          margin: 0.1rem;
        }
      }
    }
  }
  .box{
    height: 1.5rem;
  }
}
</style>