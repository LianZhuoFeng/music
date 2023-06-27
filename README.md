# wyy
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
vant组件库  
vue3组合式api  
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

