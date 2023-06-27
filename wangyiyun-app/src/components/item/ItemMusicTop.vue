<template>
  <div>
    <div class="itemMusicTop">
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao2"></use>
        </svg>
      </div>
    </div>
    <div class="itemTopCoutent">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
        <span class="playCount">
          <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-gl-play"></use>
          </svg>
          <span>{{ changeCount(playlist.playCount) }}</span>
        </span>
      </div>
      <div class="contentRight">
        <p class="right_name">{{ playlist.name }}</p>
        <div class="right_img">
          <img :src="playlist.creator.backgroundUrl" alt=""/>
          <span>{{ playlist.creator.nickname }}</span>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
        </div>
        <p class="right_p">
          <span>{{ changeStr(playlist.description)}}</span>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
        </p>
      </div>
    </div>
    <div class="itemTopFooter">
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    // console.log(props); 
    //通过props进行传值，判断如果数据拿不到，就获取sessionStorage
    if((props.playlist.creator='')){
      props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator
    }
    function changeCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    function changeStr(str){
      let data = str? str : []
      if(data.length>20){
        return data.slice(0,20)+'...'
      }else{
        return data
      }
    }
    return { changeCount,changeStr};
  },
  props: ["playlist"],
};
</script>

<style lang="less" scoped>
.itemMusicTop {
  position: relative;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;
    span {
      font-size: 0.4rem;
      color: #fff;
    }
    // .icon{
    // }
  }
  .bgimg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
  }
}
.itemTopCoutent {
  display: flex;
  justify-content:space-between;
  padding: 0.6rem 0.2rem;
  .contentLeft {
    position: relative;
    width: 2.6rem;
    height: 2.6rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.15rem;
    }
    .playCount {
      position: absolute;
      width: 70%;
      right: .1rem;
      .icon {
          width: 22%;
          margin-right: 0.08rem;
        }
        span {
          position: absolute;
          top: 0.06rem;
          color: aliceblue;
        }
    }
  }
  .contentRight{
    display: flex;
    flex-direction:column;
    width: 4rem;
    height: 2.6rem;
    padding-right:.3rem ;
    .right_name{
      color: #fff;
    }
    .right_img{
      padding-top:.2rem ;
      display: flex;
      align-items: center;
      img{
        width: .685rem;
        height: .685rem;
        border-radius: 50%;
      }
      span{
        padding-left: .2rem;
        font-size: .3rem;
        color: #fbeeee;
      }
      .icon{
        // background-color: #fff;
        width: 7%;
      }
    }
    .right_p{
      display: flex;
      align-items: center;
      padding-top: .2rem;
      span{
        font-size: .225rem;
        color: #fbeeee;
      }
      .icon{
        width: 13%;
      }
    }
  }
}
  .itemTopFooter{
    display:flex;
    height: 1.5rem;
    flex-direction:row;
    justify-content: space-around;
    .footerItem{
      display:flex;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 90%;
        height: 40%;
      }
      span{
        color: #fff;
      }
    }
  }
</style>