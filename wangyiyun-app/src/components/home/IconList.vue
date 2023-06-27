<template>
  <div class="inconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
  
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.inconList{
    width: 100%;
    height: 1rem;
    margin-top: .21rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconItem{
        width: 25%;
        height: 1rem;
        display: flex;
        flex-direction:column;
        align-items: center;
        .icon{
            width: .5rem;
            height: .5rem;
        }
    }
}
</style>