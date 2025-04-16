# 视频（MV）搜索API <Badge type="tip" text="V3" /> <Badge type="new" text="new" />
::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于视频列表搜索，支持分页。

## 接口地址
-  `GET` `/music/tencent/search/mv`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/search/mv?keyword=追光使者

## 请求参数
<div class="table-overflow">

|   参数名   | 是否必填 |  数据类型   | 默认值 | 说明              |
|:-------:|:----:|:-------:|:---:|:----------------|
| keyword |  是   | string  |  /  | 视频名称            |
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
            "total": 16, //搜索结果总数 [!code ++]
            "nextPage": 2, //下一页的页码 [!code ++]
            "perPage": 10 //当前每页显示数 [!code ++]
        }, // [!code ++]
        "list": [
            {
                "vid": "s0022035zvf", // 视频ID
                "mvID": 1068730, // MV ID
                "mvName": "追光使者", // MV名称
                "mvPic": "http://y.gtimg.cn/music/photo_new/T015R640x360M101003r1thD0srXkQ.jpg", // MV封面图片
                "publishDate": "2017-01-04", // 发布时间
                "duration": 195, // 视频时长，单位：秒
                "playCount": 1785486, // 播放次数
                "uploaderNick": "", // 上传者昵称
                "uploaderUin": "", // 上传者UIN
                "singerMID": "003ktdcg3E4kaG", // 歌手MID
                "singerName": "洛天依", // 歌手名称
                "singerList": [ // 歌手列表
                    {
                        "id": 61386,
                        "mid": "003ktdcg3E4kaG",
                        "name": "洛天依",
                        "pmid": "003ktdcg3E4kaG_7",
                        "title": "洛天依",
                        "type": 0,
                        "uin": 0
                    }
                ]
            },
            {
                "vid": "c0024yx5qi2",
                "mvID": 1360366,
                "mvName": "追光使者 (2017洛天依全息演唱会)",
                "mvPic": "http://y.gtimg.cn/music/photo_new/T015R640x360M000002RGkIW2SQWGE.jpg",
                "publishDate": "2017-08-07",
                "duration": 187,
                "playCount": 342184,
                "uploaderNick": "倾听着雪花飘落的声音",
                "uploaderUin": "3223141926",
                "singerMID": "003ktdcg3E4kaG",
                "singerName": "洛天依",
                "singerList": [
                    {
                        "id": 61386,
                        "mid": "003ktdcg3E4kaG",
                        "name": "洛天依",
                        "pmid": "003ktdcg3E4kaG_7",
                        "title": "洛天依",
                        "type": 0,
                        "uin": 0
                    }
                ]
            },
            {
                "vid": "011puuFb18cI28",
                "mvID": 16219862,
                "mvName": "【洛天依原创】追光使者【官方PV版】",
                "mvPic": "http://y.gtimg.cn/music/photo_new/T023R750x750M0000029jIK63GCXrX.jpg",
                "publishDate": "2021-09-14",
                "duration": 195,
                "playCount": 251,
                "uploaderNick": "最IN乐",
                "uploaderUin": "1728803671",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "",
                "singerList": []
            },
            {
                "vid": "0112669H3Hh4gT",
                "mvID": 11850730,
                "mvName": "马可搭档洛天依乐正绫 同框合唱《追光使者》",
                "mvPic": "http://y.gtimg.cn/music/photo_new/T023R750x750M000001xOn0d06JPJR.jpg",
                "publishDate": "2020-10-23",
                "duration": 239,
                "playCount": 771,
                "uploaderNick": "最IN乐",
                "uploaderUin": "1728803671",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "",
                "singerList": []
            },
            {
                "vid": "011ykUa20zbSCK",
                "mvID": 16626766,
                "mvName": "洛天依《追光使者》历次演出汇总",
                "mvPic": "http://y.gtimg.cn/music/photo_new/T023R750x750M000004ZtrGF3hRuc7.jpg",
                "publishDate": "2021-10-06",
                "duration": 201,
                "playCount": 157,
                "uploaderNick": "乐下瓜田",
                "uploaderUin": "3272406171",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "",
                "singerList": []
            },
            {
                "vid": "0133qIju4b2TQR",
                "mvID": 13984407,
                "mvName": "原以为只是一个动漫，竟然跟着洛天依的歌声进入二次元海底世界",
                "mvPic": "https://y.gtimg.cn/music/photo_new/T053R750x750M000002XdNl84Ji4rr.jpg",
                "publishDate": "2021-05-21",
                "duration": 195,
                "playCount": 18863,
                "uploaderNick": "致燃音乐汇",
                "uploaderUin": "1152921504974775463",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "洛天依",
                "singerList": []
            },
            {
                "vid": "0148nLMI4Y7rQz",
                "mvID": 9929699,
                "mvName": "洛天依直播“假唱”，李佳琦对着空气一顿猛夸！680万网友看懵了",
                "mvPic": "https://y.gtimg.cn/music/photo_new/T023R750x750M00000241lDb2GvJko.jpg",
                "publishDate": "2020-04-24",
                "duration": 209,
                "playCount": 23991,
                "uploaderNick": "音乐Fans小琼",
                "uploaderUin": "3403045185",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "洛天依",
                "singerList": []
            },
            {
                "vid": "01040OZC31W8uu",
                "mvID": 15520908,
                "mvName": "#夏日打卡挑战 这么可爱的依依，你爱了吗#带着抖音逛漫展 #洛天依为孙越唱小白船",
                "mvPic": "https://y.gtimg.cn/music/photo_new/T053R750x750M000001cWMfQ1nCYmE.jpg",
                "publishDate": "2021-08-16",
                "duration": 28,
                "playCount": 4681,
                "uploaderNick": "小花猫动漫屋",
                "uploaderUin": "4295059946",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "洛天依/秦昊/孙越",
                "singerList": []
            },
            {
                "vid": "012teAxL1KtSfh",
                "mvID": 23159235,
                "mvName": "【音乐Fans小琼】 洛天依直播“假唱”，李佳琦对着空气一顿猛夸！680万网友看懵了！ | 音乐Fans小琼",
                "mvPic": "https://y.gtimg.cn/music/photo_new/T053R750x750M000001oTAUm37HAee.jpg",
                "publishDate": "2022-05-18",
                "duration": 209,
                "playCount": 971,
                "uploaderNick": "爱听晴天的音乐君",
                "uploaderUin": "4295130390",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "",
                "singerList": []
            },
            {
                "vid": "012XNZrW0qt7BK",
                "mvID": 14534384,
                "mvName": "原以为只是一个动漫，竟然跟着洛天依的歌声进入二次元海底世界",
                "mvPic": "https://y.gtimg.cn/music/photo_new/T053R750x750M000003RiHvS2KEwFC.jpg",
                "publishDate": "2021-06-25",
                "duration": 188,
                "playCount": 172,
                "uploaderNick": "最美倾听",
                "uploaderUin": "1152921504833243136",
                "singerMID": "0032fmHO2UDnV3",
                "singerName": "",
                "singerList": []
            }
        ]
    },
    "time": "2025-04-16 19:42:42",
    "pid": 14,
    "tips": "欢迎使用落月API-V3"
}
```
