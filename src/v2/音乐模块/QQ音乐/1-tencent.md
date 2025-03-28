# 点歌API（歌曲搜索+播放链接整合） <Badge type="tip" text="V2" />

## 简要描述
- 此接口是结合了歌曲搜索、列表选择、id/mid点歌等功能，适合大多数场景。
- 使用多路线，保证正常获取，支持所有音乐，支持16种音质和音质自动选择(可限制最大音质)等。
- 与v1版本有细微差别，主要在请求参数方面，使命名更规范。

## 请求URL
- `/v2/music/tencent`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent?word=狐妖小红娘
- https://api.vkeys.cn/v2/music/tencent?word=狐妖小红娘&choose=1&quality=8
- https://api.vkeys.cn/v2/music/tencent?id=105648974
- https://api.vkeys.cn/v2/music/tencent?mid=0023CVP23SH17s
- https://api.vkeys.cn/v2/music/tencent?mid=0023CVP23SH17s&ekey=1

## 请求参数

|   参数名    |  是否必选   |  数据类型   | 说明                          |
|:--------:|:-------:|:-------:|:----------------------------|
|   word   |    是    | string  | 歌名,有id或mid参数可不填             |
|   page   |    否    |   int   | 页数，默认为1                     |
|   num    |    否    |   int   | 每页显示数，默认为10，区间：[1,60]       |
|  choose  |    否    |   int   | 选择歌曲，0不可填                   |
|   grp    |    否    |   int   | 多版本音乐序号，如需使用参数num为必填        |
| quality  |    否    |   int   | 最大支持音质，默认值14，区间：[0,16]      |
|    id    |   是/否   |   int   | 根据音乐id获取音乐链接，id与mid选择其中一个即可 |
|   mid    |   是/否   | string  | 根据音乐id获取音乐链接，id与mid选择其中一个即可 |
|   type   |    否    |   int   | 歌曲类型，默认为0                   |
|   ekey   |    否    |  bool   | 是否获取加密的音乐链接                 |

## 参数q可选值（音质选择）
- 默认值14。音质15、16不推荐使用。

|  值  | 备注                |
|:---:|:------------------|
|  0  | 音乐试听              |
|  1  | 有损音质              |
|  2  | 有损音质              |
|  3  | 有损音质              |
|  4  | 标准音质              |
|  5  | 标准音质              |
|  6  | 标准音质              |
|  7  | 标准音质              |
|  8  | HQ高音质             |
|  9  | HQ高音质（音质增强）       |
| 10  | SQ无损音质            |
| 11  | Hi-Res音质          |
| 12  | 杜比全景声             |
| 13  | 臻品全景声             |
| 14  | 臻品母带2.0           |
| 15  | AI伴唱模式（4轨，2原唱2伴唱） |
| 16  | AI5.1音质（6音轨）      |

## 参数type可选值（歌曲类型）

::: warning
此参数只对id点歌和mid点歌有效，此模式由于无法确定歌曲类型，所以由用户提供。同一个id的情况下不同歌曲类型返回不同歌曲
:::

|  值   |    备注    |
|:----:|:--------:|
| 0或1  |   常规歌曲   |
| 111  |   华语群星   |
| 112  |    铃声    |
| 113  |    伴奏    |

## 关于ekey
- ekey是加密音乐文件的密钥，可使用解密网站获取对应的解密文件
- ekey解密网站：https://um-react.netlify.app/


## 返回示例
::: code-group

``` json [搜索模式.json]
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

``` json [点歌模式.json]
{
    "code": 200,
    "message": "请求成功！",
    "data": {
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
        "quality": "SQ无损音质",
        "interval": "4分10秒",
        "link": "https://i.y.qq.com/v8/playsong.html?songmid=0023CVP23SH17s&type=0",
        "size": "56.05MB",
        "kbps": "1862kbps",
        "url": "http://ws.stream.qqmusic.qq.com/F000003t4TGX46UGp7.flac?guid=api.vkeys.cn&vkey=F052EA8F74368F9021DE77360BA46DD0F10BC87EA5749271DC4B1F50258B00C258FC2D95EEB95A516470289AC1A11FE56AF09877E8225816&uin=3503185131&fromtag=119114",
        "ekey": ""
    },
    "time": "2024-08-01 12:25:49",
    "pid": 19236,
    "tips": "欢迎使用API-Server"
}
```
:::
