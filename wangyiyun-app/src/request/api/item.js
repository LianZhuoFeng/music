import service from "..";
//获取歌单详情页的数据
export function getMusicItemTop(data){
    return service({
        method:'GET',
        url:`/playlist/detail?id=${data}&timestamp=${Date.now()}`
    })
}
//获取歌单列表的数据
export function getMusicItemList(data){
    return service({
        method:'GET',
        url:`/playlist/track/all?id=${data}&limit=20&offset=0&timestamp=${Date.now()}`
    })
}
//获取歌曲歌词
export function getMusicLyric(data){
    return service({
        method:'GET',
        url:`/lyric?id=${data}&timestamp=${Date.now()}`
    })
}