# 获取播放链接API <Badge type="tip" text="V2" />

## 简要描述

- 此接口可以根据音乐id或mid获取QQ音乐链接以及相关信息。

## 请求URL
- `/v2/music/tencent/geturl`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/geturl?id=105648974
- https://api.vkeys.cn/v2/music/tencent/geturl?mid=0023CVP23SH17s
- https://api.vkeys.cn/v2/music/tencent/geturl?mid=0023CVP23SH17s&quality=8

## 请求参数

| 参数名     | 是否必选 |  数据类型  | 说明                          |
|:--------|:----:|:------:|:----------------------------|
| id      |  否   |  int   | 根据音乐id获取音乐链接，id与mid选择其中一个即可 |
| mid     |  否   | string | 根据音乐id获取音乐链接，id与mid选择其中一个即可 |
| quality |  否   |  int   | 最大支持音质，默认最大                 |
| type    |  否   |  int   | 歌曲类型，默认为0                   |
| ekey    |  否   |  bool  | 是否获取加密的音乐链接                 |

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
``` json [geturl.json]
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
