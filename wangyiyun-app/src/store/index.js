import { getMusicLyric } from '@/request/api/item'
import { createStore } from 'vuex'
import {getLoginInfo,getLoginUser} from '@/request/api/home'
export default createStore({
  state: {
    playList: [{
      al: {
        id: 167962508,
        name: "CREED",
        pic: 109951168688984940,
        picUrl: "https://p2.music.126.net/v4C7yBeyr0eYKV9QqT20fg==/109951168688984939.jpg",
        pic_str: "109951168688984939",
      },
      name: '喜羊羊',
      id: 2057194478,
    }],
    playListIndex: 0,//默认下标为0
    isbtnShow: true,//暂停按钮的显示
    detailShow: false,//歌曲详情页
    lyricList: {},//歌词
    currentTime: 0,//歌曲时间
    duration: 0,//歌曲总时长
    isFooterShow:true,//判断底部组件
    isLogin:false,//判断是否登录
    loginInfo:[],//个人信息判断
    loginUser:{},//个人信息
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    updatePlayList: function (state, value) {
      state.playList = value
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList: function (state, value) {
      state.lyricList = value
    },
    updateCurrentTime: function (state, value) {
      state.currentTime = value
    },
    updateDuration: function (state, value) {
      state.duration = value
    },
    updateLoginInfo:function(state,value){
      state.loginInfo = value
    },
    updateLoginUser:function(state,value){
      state.loginUser = value
    }
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      context.commit('updateLyricList', res.data.lrc)
    },
    getInfo:async function(context,value){
      let res = await getLoginInfo(value)
      context.commit('updateLoginInfo',res)
      let user = await getLoginUser(res.data.data.account.id)
      console.log(user);
      context.commit('updateLoginUser',user)
      localStorage.setItem('token',JSON.stringify(res))
      localStorage.setItem('User',JSON.stringify(user))
      
    }
  },
  modules: {
  }
})
