# 歌曲搜索API <Badge type="tip" text="V2" />

## 简要描述

- 这是一个QQ音乐搜索接口，只能用于搜索，其他参数无效。

## 请求URL
- `/v2/music/tencent/search/song`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/search/song?word=狐妖小红娘

## 请求参数

|  参数名  | 是否必选  |  数据类型   | 说明                    |
|:-----:|:-----:|:-------:|:----------------------|
| word  |   是   | string  | 歌名                    |
| page  |   否   |   int   | 页数，默认为1               |
|  num  |   否   |   int   | 每页显示数，默认为10，区间：[1,60] |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": [
        {
            "id": 105648974,
            "mid": "0023CVP23SH17s",
            "vid": "v00199a1i1e",
            "song": "梦回还",
            "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲",
            "album": "狐妖小红娘 动画原声带",
            "singer": "呦猫UNEKO",
            "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000wd19g0wTd0d.jpg",
            "pay": "付费",
            "time": "2016-07-08",
            "type": 0,
            "bpm": 84,
            "quality": "臻品母带2.0",
            "grp": [
                {
                    "id": 235069670,
                    "mid": "001SYUfq0ou27J",
                    "vid": "i0031dmklxx",
                    "song": "梦回还",
                    "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲",
                    "album": "狐妖小红娘·王权篇 动画原声大碟 轮转",
                    "singer": "呦猫UNEKO",
                    "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000LAXp222pE4w.jpg",
                    "pay": "付费",
                    "time": "2019-07-31",
                    "type": 0,
                    "bpm": 84,
                    "quality": "臻品母带2.0",
                    "grp": []
                }
            ]
        }
    ],
    "time": "2024-08-03 18:37:34",
    "pid": 12,
    "tips": "欢迎使用API-Server"
}
```
