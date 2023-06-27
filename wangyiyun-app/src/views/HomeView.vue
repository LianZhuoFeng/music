<template>
  <div class="home">
    <TopNav></TopNav>
    <SwpierTop></SwpierTop>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue';
import SwpierTop from '@/components/home/SwpierTop.vue';
import IconList from '../components/home/IconList.vue';
import MusicList from '../components/home/MusicList.vue';
export default {
  name: "HomeView",
  components: {TopNav,SwpierTop,IconList, MusicList},
};
</script>
