import service from "..";
//获取首页轮播图的数据 
export function getBanner() {
    return service({
        method: 'GET',
        url: `/banner?type=2&timestamp=${Date.now()}`
    })
}
// 获取推荐歌单
export function getMusicList() {
    return service({
        method: "GET",
        url: `/personalized?limit=5&timestamp=${Date.now()}`
    })
}
// 搜索
export function getSearchMusic(data) {
    return service({
        method: "GET",
        url: `/search?keywords=${data}&timestamp=${Date.now()}`
    })
}
//获取二维码key
export function getLoginkey() {
    return service({
        method: 'GET',
        url: `/login/qr/key?timestamp=${Date.now()}`
    })
}
//获取二维码
export function getLoginImg(key) {
    return service({
        method: 'GET',
        url: `/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`
    })
}
//校验二维码状态
export function getLoginStatus(key) {
    return service({
        method: 'GET',
        url: `/login/qr/check?key=${key}&timestamp=${Date.now()}`
    })
}
// 获取用户id
export function getLoginInfo(cookie = '') {
    return service({
        method: 'POST',
        url: `/login/status?timestamp=${Date.now()}`,
        data: {
            cookie,
        },
    })
}
//获取用户信息
export function getLoginUser(id){
    return service({
        method:'GET',
        url:`/user/detail?uid=${id}`
    })
}
//退出登录
export function getLogin(){
    return service({
        method:'GET',
        url:`/logout`
    })
}