# 歌手歌曲列表API <Badge type="tip" text="V2" />

## 简要描述

- 这是一个QQ音乐搜索接口，只能用于搜索，其他参数无效。

## 请求URL
- `/v2/music/tencent/singer/songlist`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/singer/songlist?mid=003ktdcg3E4kaG

## 请求参数

| 参数名  | 是否必选 |  数据类型   | 说明                    |
|:----:|:----:|:-------:|:----------------------|
| mid  |  是   | string  | 歌手mid                 |
| page |  否   |   int   | 页数，默认为1               |
| num  |  否   |   int   | 每页显示数，默认为10，区间：[1,60] |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": [
        {
            "id": 104797698,
            "mid": "001mzBxY4UVcAH",
            "vid": "0114VB5m1yuCFa",
            "song": "霜雪千年",
            "subtitle": "",
            "album": "洛天依作品集",
            "singer": "洛天依/乐正绫",
            "cover": "https://y.qq.com/music/photo_new/T002R800x800M000001gQ5oZ3ZIbAw.jpg",
            "pay": "免费",
            "time": "2016-01-01",
            "type": 0,
            "bpm": 70,
            "quality": "臻品母带2.0",
            "grp": []
        },
        {
            "id": 102176361,
            "mid": "001xZXiW4aAhkL",
            "vid": "x00174lez93",
            "song": "权御天下",
            "subtitle": "",
            "album": "2015哔哩哔哩般年纪",
            "singer": "洛天依",
            "cover": "https://y.qq.com/music/photo_new/T002R800x800M000001CCsrz3ly1sO.jpg",
            "pay": "付费",
            "time": "2016-01-01",
            "type": 0,
            "bpm": 92,
            "quality": "臻品母带2.0",
            "grp": [
                {
                    "id": 333956330,
                    "mid": "000MOYMy0M57cJ",
                    "vid": "x00174lez93",
                    "song": "权御天下",
                    "subtitle": "",
                    "album": "Vsinger作品集-2",
                    "singer": "洛天依",
                    "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000YfWpa47hP2m.jpg",
                    "pay": "免费",
                    "time": "2019-01-01",
                    "type": 0,
                    "bpm": 92,
                    "quality": "HQ高音质",
                    "grp": []
                }
            ]
        },
        {
            "id": 293676135,
            "mid": "003DFkIK2D51yp",
            "vid": "z0035z9jlmu",
            "song": "勾指起誓",
            "subtitle": "",
            "album": "2:3",
            "singer": "洛天依/ilem",
            "cover": "https://y.qq.com/music/photo_new/T002R800x800M000003aefaS3BdrXi.jpg",
            "pay": "付费",
            "time": "2019-02-24",
            "type": 0,
            "bpm": 0,
            "quality": "臻品母带2.0",
            "grp": []
        }
    ],
    "time": "2024-08-18 21:30:19",
    "pid": 30,
    "tips": "欢迎使用API-Server"
}
```
