# myplayer

> A Vue.js project

## Build Setup

百度音乐全接口

http://tingapi.ting.baidu.com/v1/restserver/ting

请求方式：GET

参数处理：format=json&calback=&from=webapp_music&method=以下不同的参数获得不同的数据

一、获取列表

例：method=baidu.ting.billboard.billList&type=1&size=10&offset=0

参数： type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜

size = 10 //返回条目数量

offset = 0 //获取偏移

二、搜索

例：method=baidu.ting.search.catalogSug&query=海阔天空

参数：query = ” //搜索关键字

三、播放

例：method=baidu.ting.song.play&songid=877578

例：method=baidu.ting.song.playAAC&songid=877578

参数：songid = 877578 //歌曲id

注：关于使用file_link不能播放的问题，是因为百度使用Http中的Referer头字段来防止盗链，在HTML文件中加上 <meta name=’referrer’ content=’never’>这一句让发送出去的Http包都不含Referer字段就行了

四、lrc歌词

例：method=baidu.ting.song.lry&songid=877578

参数：songid = 877578 //歌曲id

五、推荐列表

例：method=baidu.ting.song.getRecommandSongList&song_id=877578&num=5

参数： song_id = 877578

num = 5//返回条目数量

六、下载

例：method=baidu.ting.song.downWeb&songid=877578&bit=24&_t=1393123213

参数： songid = 877578//歌曲id

bit = 24, 64, 128, 192, 256, 320 ,flac//码率

_t = 1430215999,, //时间戳

七、获取歌手信息

例：method=baidu.ting.artist.getInfo&tinguid=877578

参数： tinguid = 877578 //歌手ting id

八、获取歌手歌曲列表

例：method=baidu.ting.artist.getSongList&tinguid=877578&limits=6&use_cluster=1&order=2

参数： tinguid = 877578//歌手ting id

limits = 6//返回条目数量
