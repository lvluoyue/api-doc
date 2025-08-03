# 获取歌单的歌曲列表API <Badge type="tip" text="V2" />

## 简要描述

- 获取账号上的收藏歌曲，自建歌单等信息，需配合歌单列表使用。
- 所需参数在搜索或获取播放地址时获取

## 请求URL
- `/v2/music/tencent/dissinfo`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/dissinfo?id=1754192231

## 请求参数

| 参数名  | 是否必选 | 数据类型 | 说明                         |
|:----:|:----:|:----:|:---------------------------|
|  id  |  是   | int  | 歌单id                       |
| page |  否   | int  | 页数，默认为1                    |
| num  |  否   | int  | 每页显示数，默认为10                |
| uin  |  否   | int  | QQ账号，当歌单为我的收藏且无权限时可使用此参数绕过 |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "info": {
            "title": "〖洛天依〗恋爱理论",
            "picurl": "http://qpic.y.qq.com/music_cover/3o3EV9KZWcK7icPUAuETxpQ25J4GZ7icmbygc90z8jTvsj4NtBeAmTPw/600?n=1",
            "songnum": 8,
            "listennum": 859
        },
        "list": [
            {
                "id": 107542381,
                "mid": "003NDtKy262sXZ",
                "vid": "",
                "song": "心加心",
                "subtitle": "",
                "singer": "阿良良木健",
                "album": "恋爱理论",
                "type": 0,
                "quality": "臻品全景声",
                "cover": "https://y.qq.com/music/photo_new/T002R800x800M000004cub0316PRb9.jpg"
            },
            {
                "id": 237937622,
                "mid": "002juEC83xBZ0b",
                "vid": "",
                "song": "白夜梦",
                "subtitle": "",
                "singer": "洛天依/乐正绫/阿良良木健",
                "album": "恋爱理论",
                "type": 0,
                "quality": "臻品全景声",
                "cover": "https://y.qq.com/music/photo_new/T002R800x800M000002Hu2oC1nnVAw.jpg"
            }
        ]
    },
    "time": "2024-08-12 19:56:38",
    "pid": 20,
    "tips": "欢迎使用API-Server"
}
```
