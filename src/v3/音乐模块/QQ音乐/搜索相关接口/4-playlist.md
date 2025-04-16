# 歌单搜索API <Badge type="tip" text="V3" /> <Badge type="new" text="new" />
::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于歌单列表搜索，支持分页。

## 接口地址
-  `GET` `/music/tencent/search/playlist`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/search/playlist?keyword=洛天依作品集

## 请求参数
<div class="table-overflow">

|   参数名   | 是否必填 |  数据类型   | 默认值 | 说明              |
|:-------:|:----:|:-------:|:---:|:----------------|
| keyword |  是   | string  |  /  | 歌单名称            |
|  page   |  否   |   int   |  1  | 当前页数            |
|  limit  |  否   |   int   | 10  | 每页显示数，区间：[1,60] |

</div>

## 返回示例
``` json
{
    "code": 0,
    "message": "访问成功",
    "data": {
        "meta": { // [!code ++]
            "total": 289, //搜索结果总数 [!code ++]
            "nextPage": 2, //下一页的页码 [!code ++]
            "perPage": 10 //当前每页显示数 [!code ++]
        }, // [!code ++]
        "list": [
            {
                "dissID": "1469226790", //歌单id
                "dissName": "洛天依作品集", //歌单名称
                "dissPic": "http://y.gtimg.cn/music/photo_new/T002R300x300M000001gQ5oZ3ZIbAw.jpg?n=1", //歌单封面
                "introduction": "洛天依之追光使者洛天依", //歌单简介
                "songCount": 409, // 歌曲数量
                "qq": 3341727742, //创建者QQ
                "listenum": 63411, // 播放量
                "createTime": "2017-06-16", //创建时间
                "modifyTime": "2024-09-01" //更新时间
            },
            {
                "dissID": "3571679444",
                "dissName": "洛天依作品集",
                "dissPic": "http://y.gtimg.cn/music/photo_new/T002R300x300M000004WJ7Yo421SNH.jpg?n=1",
                "introduction": "恰似你的温柔，洛天依给你带来快乐。",
                "songCount": 168,
                "qq": 739904599,
                "listenum": 27079,
                "createTime": "2017-07-09",
                "modifyTime": "2018-11-17"
            },
            {
                "dissID": "2944228749",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/eicCfYgX0hvaYS4KMD2PZWWQhwmW7nUiaPoib5EjicpBmia49wK8ex2EEkw/300?n=1",
                "introduction": "这里是洛天依迷的歌单呐~我自己也是。我已经尽量把歌单丰富了，但是达到上限了。我觉得惋惜，对不起了，各位!<br><br>歌单作者，铭晨留。",
                "songCount": 999,
                "qq": 122974457,
                "listenum": 21629,
                "createTime": "2017-01-07",
                "modifyTime": "2019-09-10"
            },
            {
                "dissID": "1462266537",
                "dissName": " 洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/pD0SibuibAVRMUOOiaAjJPOxkxgQ2CSmQ696jhcdY1jLv5ZCQEr3VrSOA/300?n=1",
                "introduction": "洛天依洛天依洛天依洛天依洛天依洛天依洛天依",
                "songCount": 109,
                "qq": 2891000732,
                "listenum": 18292,
                "createTime": "2017-04-24",
                "modifyTime": "2019-08-22"
            },
            {
                "dissID": "3186267568",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/PJpqE89pQzOM6iaLicxvLAVls94bkFk5IkeurOutoRE7JrLwDv7U8Mjg/300?n=1",
                "introduction": "天依宝宝的作品集，加油，love you",
                "songCount": 31,
                "qq": 156387868,
                "listenum": 17815,
                "createTime": "2010-07-30",
                "modifyTime": "2017-08-09"
            },
            {
                "dissID": "745606172",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/O0qtbxjiaiar7A3GsvrtTfBb5aicbRLy7yfiaj1WhicZbVG1yC3atq62LWQ/300?n=1",
                "introduction": "你是洛天依的粉丝吗？是的话就快来听这些歌吧",
                "songCount": 420,
                "qq": 2782862320,
                "listenum": 16706,
                "createTime": "2015-02-03",
                "modifyTime": "2022-10-30"
            },
            {
                "dissID": "1457575363",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/Y1hiaAvOFPzDXTq6gBeEc0BkicibkWnLXarcd9ZQSt3Gib84Nhia0okHN2w/300?n=1",
                "introduction": "！！！！！！！！！！！！！！！！！！！！！！",
                "songCount": 649,
                "qq": 1656864332,
                "listenum": 16280,
                "createTime": "2017-03-19",
                "modifyTime": "2017-05-06"
            },
            {
                "dissID": "2622473421",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/K1DxGIW9dOwP9dL6qjYnZQHQovO8MIibduQZAGJwkaF5ibibss3DpeBKw/300?n=1",
                "introduction": "天依独唱及与阿绫言和和心华星尘合唱。。<br>都是老曲子了",
                "songCount": 652,
                "qq": 2215356586,
                "listenum": 14457,
                "createTime": "2016-06-24",
                "modifyTime": "2019-08-10"
            },
            {
                "dissID": "1155013959",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/pPDCthTn5RGdQcY2DaibiaiaH0dUsh4BOgadleJn6MIaNBQwH6d4bzOdw/300?n=1",
                "introduction": "洛天依单品合集 超治愈",
                "songCount": 395,
                "qq": 468621421,
                "listenum": 13982,
                "createTime": "2017-03-18",
                "modifyTime": "2017-03-30"
            },
            {
                "dissID": "2342340771",
                "dissName": "洛天依作品集",
                "dissPic": "http://qpic.y.qq.com/music_cover/m42gVSkGzvcSictSiark0ibpeXDffLRxwKjzYD5mJZBeLd7yu6VjTmWcw/300?n=1",
                "introduction": "你也喜欢洛天依的歌吗？那就来听一听吧!",
                "songCount": 166,
                "qq": 3306255015,
                "listenum": 11018,
                "createTime": "2016-11-26",
                "modifyTime": "2017-03-30"
            }
        ]
    },
    "time": "2025-04-15 20:06:43",
    "pid": 15668,
    "tips": "欢迎使用落月API-V3"
}
```
