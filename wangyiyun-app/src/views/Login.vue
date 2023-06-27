<template>
  <div class="body">
    <div class="loginTop">
      <svg class="icon left" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="LoginMiddle">
      <div class="MiddleIcon">
        <img
          src="https://s1.music.126.net/style/favicon.ico?v20180307"
          alt=""
        />
        <h2>网易云音乐</h2>
      </div>
      <div class="MiddleImg">
        <p>请使用网易云APP扫码登录</p>
        <img :src="LoginImg" alt="" ref="LoginImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { getLoginImg, getLoginkey, getLoginStatus,getLoginUser } from "../request/api/home";
export default {
  data() {
    return {
      LoginImg: "",
      time: 0,
      key: "",
    };
  },
  methods: {
    async getImg() {
      let res = await getLoginkey();
      this.key = res.data.data.unikey;
      let resImg = await getLoginImg(this.key);
      this.LoginImg = resImg.data.data.qrimg;
    },
    getStatus() {
      this.time = setInterval(async () => {
        let res = await getLoginStatus(this.key);
        if (res.data.code === 800) {
          clearInterval(this.time);
        }
        if (res.data.code === 803) {
          clearInterval(this.time);
          alert("授权登录成功");
          this.$store.dispatch("getInfo", res.data.cookie);
          this.$store.state.isLogin = true;
          this.$router.replace("/infoUser");
        }
      }, 3000);
    },
  },
  mounted() {
    this.getImg();
    this.getStatus();
  },
};
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(to top, rgb(255, 255, 255), rgb(248, 112, 97));
  .loginTop {
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
  .LoginMiddle {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .MiddleIcon {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 0.9rem;
        height: 0.9rem;
      }
      h2 {
        margin-left: 0.3rem;
        font-size: 0.55rem;
        color: #d02727;
      }
    }
    .MiddleImg{
      margin-top: .8rem;
      display:flex;
      flex-direction: column;
      align-items: center;
      p{
        font-weight: 500;
        margin-bottom: .4rem;
      }
      img{
        width: 4rem;
        height: 4rem;
      }
    }
  }
}
</style>