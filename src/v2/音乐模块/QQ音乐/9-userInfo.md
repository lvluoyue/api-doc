# QQ账号歌单API <Badge type="tip" text="V2" />

## 简要描述

- 获取账号上的收藏歌曲，自建歌单等信息，需配合歌单列表使用。
- 所需参数在搜索或获取播放地址时获取

## 请求URL
- `/v2/music/tencent/info`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/info?uin=1569097443

## 请求参数
| 参数名 | 是否必选 | 数据类型 | 说明   |
|:---:|:----:|:----:|:-----|
| uin |  是   | int  | QQ账号 |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "info": {
            "encrypt_uin": "oK4sNKnq7ivPoz**",
            "name": "落月",
            "pic": "http://thirdqq.qlogo.cn/g?b=sdk&k=pib6ZaK9mQY9Sv8kTLgQM0Q&kti=ZqeuEQAAAAI&s=140&t=1707413444",
            "bigpic": "http://thirdqq.qlogo.cn/g?b=sdk&k=pib6ZaK9mQY9Sv8kTLgQM0Q&kti=ZqeuEQAAAAI&s=640&t=1707413444",
            "ip": "美国",
            "Constellation": "双鱼座",
            "Gender": "女"
        },
        "likesong": {
            "id": 1754192231,
            "title": "喜欢",
            "picurl": "http://y.gtimg.cn/music/photo_new/T002R300x300M000004Zii1c1otbSw_1.jpg",
            "song_num": "432首歌曲",
            "album_num": "9张专辑",
            "diss_num": "7张歌单"
        },
        "mydiss": [
            {
                "id": 8315602051,
                "title": "水·花",
                "picurl": "",
                "song_num": "11首",
                "album_num": "10次播放",
                "diss_num": ""
            }
        ],
        "likediss": [
            {
                "id": 7853791967,
                "title": "妄想症系列",
                "picurl": "http://qpic.y.qq.com/music_cover/EEIuGFXJcibxA80v5Hc1RNhwkFJ8zwicIQkIG2hyGSUYrGkRvxp8J6NQ/300?n=1",
                "song_num": "10首歌曲",
                "listen_num": 93493
            },
            {
                "id": 7793074360,
                "title": "〖洛天依〗恋爱理论",
                "picurl": "http://qpic.y.qq.com/music_cover/3o3EV9KZWcK7icPUAuETxpQ25J4GZ7icmbygc90z8jTvsj4NtBeAmTPw/300?n=1",
                "song_num": "8首歌曲",
                "listen_num": 859
            }
        ]
    },
    "time": "2024-08-04 13:33:49",
    "pid": 17936,
    "tips": "欢迎使用API-Server"
}
```
