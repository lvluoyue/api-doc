# 获取用户收藏API <Badge type="tip" text="V3" />

::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于歌曲列表搜索，支持分页。

## 接口地址

- `GET` `/music/tencent/user/playlist`

## 请求数据类型

- `application/x-www-form-urlencoded`

## 请求示例

- https://api.vkeys.cn/music/tencent/user/playlist?uin=1569097443

## 请求参数

<div class="table-overflow">

| 参数名 | 是否必选 |  数据类型  | 默认值 | 说明  |
|:---:|:----:|:------:|:---:|:----|
| uin |  是   |  int   |  /  | QQ号 |

</div>

## 返回示例

``` json
{
    "code": 0,
    "message": "访问成功",
    "data": {
        "likeSong": {
            "tid": 1754192231,
            "uin": "1569097443",
            "nick": "",
            "title": "我喜欢",
            "image": "http://y.gtimg.cn/mediastyle/y/img/cover_love_300.jpg",
            "songNum": 442,
            "createTime": 1746534001,
            "updateTime": 1745261358
        },
        "myDiss": [
            {
                "tid": 8315602051,
                "uin": "1569097443",
                "nick": "",
                "title": "水·花",
                "image": "",
                "songNum": 11,
                "createTime": 1642052979,
                "updateTime": 1665127741
            },
            {
                "tid": 8026554234,
                "uin": "1569097443",
                "nick": "",
                "title": "aa",
                "image": "http://y.gtimg.cn/music/photo_new/T002R500x500M000002DbpNa1zRNqa.jpg?n=1",
                "songNum": 25,
                "createTime": 1623328208,
                "updateTime": 1690696093
            },
            {
                "tid": 6751322298,
                "uin": "1569097443",
                "nick": "",
                "title": "好听的",
                "image": "http://y.gtimg.cn/music/photo_new/T002R500x500M000003s6uBn238PvQ.jpg?n=1",
                "songNum": 58,
                "createTime": 1551270593,
                "updateTime": 1690307616
            }
        ],
        "likeDiss": [
            {
                "tid": 7853791967,
                "uin": "2830388142",
                "nick": "墨雨",
                "title": "妄想症系列",
                "image": "http://qpic.y.qq.com/music_cover/EEIuGFXJcibxA80v5Hc1RNhwkFJ8zwicIQkIG2hyGSUYrGkRvxp8J6NQ/600?n=1",
                "songNum": 10,
                "createTime": 1610299800,
                "updateTime": 1610830387
            },
            {
                "tid": 7793074360,
                "uin": "2993552933",
                "nick": "早睡早起",
                "title": "〖洛天依〗恋爱理论",
                "image": "http://qpic.y.qq.com/music_cover/3o3EV9KZWcK7icPUAuETxpQ25J4GZ7icmbygc90z8jTvsj4NtBeAmTPw/600?n=1",
                "songNum": 8,
                "createTime": 1606229589,
                "updateTime": 1611923682
            },
            {
                "tid": 7670951918,
                "uin": "2256154299",
                "nick": "轻痕无迹",
                "title": "国风电子|洛天依的华夏情怀",
                "image": "http://qpic.y.qq.com/music_cover/xnI1ZgbxtYofBy9PIcmqEP89CZnZgtPxBCaSHXGeqy3aPbnqCiby9bw/600?n=1",
                "songNum": 44,
                "createTime": 1596960244,
                "updateTime": 1648646235
            },
            {
                "tid": 7627299556,
                "uin": "2256154299",
                "nick": "轻痕无迹",
                "title": "[洛天依]洛殿下歌曲精选之古风集",
                "image": "http://qpic.y.qq.com/music_cover/xnI1ZgbxtYofBy9PIcmqEP6TVVtKvveUMAaeDGD1Avz9NjUNjH3bWg/600?n=1",
                "songNum": 111,
                "createTime": 1593957908,
                "updateTime": 1715354975
            },
            {
                "tid": 6954294851,
                "uin": "1181707581",
                "nick": "妮蔻玲可莉",
                "title": "可爱到爆炸 800首萌音的洗脑",
                "image": "http://qpic.y.qq.com/music_cover/S6tZcNpwzyEmry2LnEzibR3HHiam4mErbmtFjtEzFIlyrJtj7kqtwPicA/600?n=1",
                "songNum": 825,
                "createTime": 1556417079,
                "updateTime": 1703831303
            },
            {
                "tid": 6937788130,
                "uin": "1812948313",
                "nick": "听风Xyi",
                "title": "国风动漫 · 若忘此生来世忆",
                "image": "http://qpic.y.qq.com/music_cover/qH8rLHHhL8O8Iibm56uPzJxicMIUJV96BOCHh79SuW8JA50SMsDMZXVg/600?n=1",
                "songNum": 28,
                "createTime": 1555301126,
                "updateTime": 1631209275
            },
            {
                "tid": 1167624049,
                "uin": "3050999021",
                "nick": "淡白的阳光",
                "title": "「ACG」洛天依古风曲大盘点",
                "image": "http://qpic.y.qq.com/music_cover/az4TLJ60PVdO54ZsMQeKYooXkEGq2GlKGpI5AXclxIpgoC0BLByHAQ/600?n=1",
                "songNum": 115,
                "createTime": 1498044379,
                "updateTime": 1659892414
            }
        ]
    },
    "time": "2025-05-06 20:20:02",
    "pid": 40,
    "tips": "欢迎使用落月API-V3"
}
```
