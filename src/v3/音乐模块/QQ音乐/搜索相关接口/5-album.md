# 专辑搜索API <Badge type="tip" text="V3" />
::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于专辑列表搜索，支持分页。

## 接口地址
-  `GET` `/music/tencent/search/album`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/search/album?keyword=洛天依作品集

## 请求参数
<div class="table-overflow">

|   参数名   | 是否必填 |  数据类型   | 默认值 | 说明              |
|:-------:|:----:|:-------:|:---:|:----------------|
| keyword |  是   | string  |  /  | 专辑名称            |
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
            "total": 4, //搜索结果总数 [!code ++]
            "nextPage": -1, //下一页的页码 [!code ++]
            "perPage": 10 //当前每页显示数 [!code ++]
        }, // [!code ++]
        "list": [
            {
                "albumID": 1283240, // 专辑ID
                "albumMID": "001gQ5oZ3ZIbAw", // 专辑MID
                "albumName": "洛天依作品集", // 专辑名称
                "albumPic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000001gQ5oZ3ZIbAw_2.jpg", // 专辑图片
                "publicTime": "2016-01-01", // 发行时间
                "singerID": 61386, // 歌手ID
                "singerMID": "003ktdcg3E4kaG", // 歌手MID
                "singerName": "洛天依", // 歌手名称
                "songCount": 634, // 歌曲数量
                "singerList": [// 歌手列表
                    {
                        "id": 61386, // 歌手ID
                        "mid": "003ktdcg3E4kaG", // 歌手MID
                        "name": "洛天依", // 歌手名称
                        "pmid": "",
                        "title": "洛天依", // 歌手名称
                        "type": 0,
                        "uin": 0
                    }
                ]
            },
            {
                "albumID": 47530135,
                "albumMID": "000yNHmX4MqqGE",
                "albumName": "洛天依作品集 (Explicit)",
                "albumPic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000000yNHmX4MqqGE_2.jpg",
                "publicTime": "2016-01-01",
                "singerID": 61386,
                "singerMID": "003ktdcg3E4kaG",
                "singerName": "洛天依",
                "songCount": 2,
                "singerList": [
                    {
                        "id": 61386,
                        "mid": "003ktdcg3E4kaG",
                        "name": "洛天依",
                        "pmid": "",
                        "title": "洛天依",
                        "type": 0,
                        "uin": 0
                    },
                    {
                        "id": 980372,
                        "mid": "000yjTkK2E7Rpz",
                        "name": "乐正绫",
                        "pmid": "",
                        "title": "乐正绫",
                        "type": 0,
                        "uin": 0
                    }
                ]
            },
            {
                "albumID": 7921861,
                "albumMID": "002tQir12NohDb",
                "albumName": "洛天依作品集",
                "albumPic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000002tQir12NohDb_1.jpg",
                "publicTime": "2019-09-08",
                "singerID": 61386,
                "singerMID": "003ktdcg3E4kaG",
                "singerName": "洛天依",
                "songCount": 1,
                "singerList": [
                    {
                        "id": 61386,
                        "mid": "003ktdcg3E4kaG",
                        "name": "洛天依",
                        "pmid": "",
                        "title": "洛天依",
                        "type": 0,
                        "uin": 0
                    }
                ]
            },
            {
                "albumID": 23736313,
                "albumMID": "003HPZTd2IrgK7",
                "albumName": "洛天依翻唱作品集",
                "albumPic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000003HPZTd2IrgK7_2.jpg",
                "publicTime": "2021-03-30",
                "singerID": 9596067,
                "singerMID": "002GdGBi2OeHCE",
                "singerName": "haru1ca",
                "songCount": 2,
                "singerList": [
                    {
                        "id": 9596067,
                        "mid": "002GdGBi2OeHCE",
                        "name": "haru1ca",
                        "pmid": "",
                        "title": "haru1ca",
                        "type": 0,
                        "uin": 0
                    }
                ]
            }
        ]
    },
    "time": "2025-04-15 21:12:01",
    "pid": 29992,
    "tips": "欢迎使用落月API-V3"
}
```
