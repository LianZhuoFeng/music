<template>
  <div>
    <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"></ItemMusicList>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import ItemMusicTop from "../components/item/ItemMusicTop";
import ItemMusicList from "../components/item/ItemMusicList";
import { getMusicItemTop, getMusicItemList } from "@/request/api/item";
export default {
  components: { ItemMusicTop, ItemMusicList },
  setup() {
    const state = reactive({
      playlist: {}, //歌单的详情页的数据
      itemList: [], //歌单的歌曲
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      //   获取歌单详情
      let res = await getMusicItemTop(id);
      state.playlist = res.data.playlist;
      //  获取歌单的歌曲
      let result = await getMusicItemList(id);
      state.itemList = result.data.songs
      //防止页面刷新，数据丢失，数据保存到sessionStorage中
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
};
</script>

<style>
</style>