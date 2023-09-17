# music
仿网易云音乐Vue项目
## 文件说明
NeteaseCloudMusicApi 网易云接口文件  
wangyiyun-app 网易云音乐vue项目文件
## 环境
需要node.js 12+ 
## 运行
在NeteaseCloudMusicApi目录下打开终端输入npm i依赖包node app.js  
在wangyiyun-app目录下打开终端输入npm i 下载依赖包后输入npm run serve
## 页面介绍
### 首页
利用vant组件库进行页面渲染  
vue组合式api  
使用axios获取，封装axios
### 歌单详情页
利用路由跳转，路由传参  
使用vuex实现底部组件的制作  
使用vue的watch监听实现音乐播放功能
### 歌曲详情页
使用vant的抽屉组件  
使用css3的知识点实现中间磁盘和动画效果
使用动态的class以及计算属性实现歌词样式的突出显示
使用vue的watch监听和ref实现歌曲滚动效果
使用watch监听，vuex及定时器实现进度条和进度条歌曲时间的响应
利用vuex判断下标实现上一首和下一首的切换
### 搜索页面
使用localStorage进行历史记录的保存  
搜索出来的也可以点击播放
### 个人中心页面
使用路由守卫，进行权限判断  
未登录的时候点击‘我的‘跳转到登录页面  
扫码登录后获取用户信息并保存到vuex和localStorage里，保持登录状态  
并跳转到个人中心页面，根据登录成功的个人id获取并渲染对应的个人数据
## 图片预览
![63ed3cfedefc24719e948c4d646dcde](https://github.com/LianZhuoFeng/music/assets/120152501/41d1f36a-456c-4a9e-9849-e0f73596a007)
![2b2376b29e58fcd88d2377ef824001d](https://github.com/LianZhuoFeng/music/assets/120152501/a647a7e3-5223-4c29-b54b-12de2a0e5191)
![d26d5dfc3cbcb2e7ce8f92cf04e7266](https://github.com/LianZhuoFeng/music/assets/120152501/b314fa6b-ee55-49e5-b26b-4e8bd7bef9b1)
![e6500d79bad4bd330ddcab2ca0ba192](https://github.com/LianZhuoFeng/music/assets/120152501/08add667-0869-4922-b6d7-c437a1289451)
![513796cd571b8b2083dfc10a1e79c68](https://github.com/LianZhuoFeng/music/assets/120152501/23d7bdf7-4d65-43a0-b15b-c0797acbbdb8)
![96d6d5d589f003717d69d5e8c159982](https://github.com/LianZhuoFeng/music/assets/120152501/275937dd-fff9-4c92-95b9-4eb0fd97f5ca)







