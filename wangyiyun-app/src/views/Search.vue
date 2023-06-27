<template>
  <div>
    <div class="searchTop">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <input
        type="text"
        placeholder="周杰伦"
        v-model="searchKey"
        @keydown.enter="enterKey"
      />
    </div>
    <div class="searchHistory">
      <span class="searchSpan">历史</span>
      <span
        v-for="item in keyWorldList"
        :key="item"
        class="spanKey"
        @click="searchHistory(item)"
      >
        {{ item }}
      </span>
      <svg class="icon" aria-hidden="true" @click="delHistory">
        <use xlink:href="#icon-shanchu"></use>
      </svg>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ (item.name) }}</p>
            <div class="left_spanAr">
              <span v-for="(item1, index) in item.artists" :key="index">{{
                item1.name + "."
              }}</span>
            </div>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if="item.mvid  != 0">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon--Todo-List"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import { getSearchMusic } from "../request/api/home";
export default {
  data() {
    return {
      keyWorldList: [""],
      searchKey: "",
      searchList: [],
    };
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey.trim() != "") {
        this.keyWorldList.unshift(this.searchKey.trim());
        this.keyWorldList = [...new Set(this.keyWorldList)];
      }
      if (this.keyWorldList.length > 10) {
        this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
      }
      localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
      let res = await getSearchMusic(this.searchKey.trim());
      this.searchList = res.data.result.songs;
      this.searchKey = "";
    },
    delHistory() {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      this.searchList = res.data.result.songs
    },
    updateIndex:function(item){
        console.log(item);
        item.al=item.album
        item.al.picUrl=item.album.artist.img1v1Url
        this.$store.commit('pushPlayList',item)
        this.$store.commit('updatePlayListIndex',this.$store.state.playList.length-1)
    }
  },
};
</script>

<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.2rem;
    border: none;
    border-bottom: 1px solid #999;
    width: 90%;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-size: 0.4rem;
    font-weight: 700;
  }
  .spanKey {
    padding: 0.1rem 0.2rem;
    background-color: #a5a5a5;
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    right: 0.2rem;
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
</style>