<template>
  <div class="InfoUser">
    <img class="bgImg" :src="backgroundUrl" alt="">
    <svg class="icon left" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <div class="infoUserTop">
      <img :src="avatarUrl" alt="" class="profileimg" />
      <div class="name">{{nickname }}</div>
    </div>
    <div class="deleteUser">
      <van-button round type="success" @click="deleteUser">退出登录</van-button>
    </div>
  </div>
</template>
    
<script>
import {getLogin} from '@/request/api/home'
export default {
  methods:{
   async deleteUser(){
      localStorage.removeItem('User')
      localStorage.removeItem('token')
      this.$store.state.loginInfo = []
      this.$store.state.loginUser = {}
      this.$store.state.isLogin=false
      let res = await getLogin()
      this.$router.push('/login')
      console.log(res)
    }
  },
  computed: {
    loginUser() {
      if (this.$store.state.loginUser.length) {
        return this.$store.state.loginUser;
      } else if(JSON.parse(localStorage.getItem("User"))){
        return JSON.parse(localStorage.getItem("User"));
      }
    },
    backgroundUrl(){
      if (this.$store.state.loginUser.length) {
        return this.$store.state.loginUser.data.profile.backgroundUrl;
      } else if(JSON.parse(localStorage.getItem("User"))){
        return JSON.parse(localStorage.getItem("User")).data.profile.backgroundUrl;
      }
    },
    avatarUrl(){
      if (this.$store.state.loginUser.length) {
        return this.$store.state.loginUser.data.profile.avatarUrl;
      } else if(JSON.parse(localStorage.getItem("User"))){
        return JSON.parse(localStorage.getItem("User")).data.profile.avatarUrl;
      }
    },
    nickname(){
      if (this.$store.state.loginUser.length) {
        return this.$store.state.loginUser.data.profile.nickname;
      } else if(JSON.parse(localStorage.getItem("User"))){
        return JSON.parse(localStorage.getItem("User")).data.profile.nickname;
      }
    }
  },
  mounted() {},
};
</script>
    
<style lang="less" scoped>
.InfoUser{
  width: 100%;
  height: 100%;
  .bgImg{
  width: 100%;
  height: 4.2rem;
  position: absolute;
  z-index:-1;
}
.left{
  fill:aliceblue;
  margin: .2rem;
}
.infoUserTop {
  margin-top: 2.5rem;
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .profileimg {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
  }
  .name {
    font-weight: 550;
    font-size: 0.4rem;
  }
}
.deleteUser{
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

</style>