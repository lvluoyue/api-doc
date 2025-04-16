# 歌手搜索API <Badge type="tip" text="V3" />
::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于歌手列表搜索，支持分页。

## 接口地址
-  `GET` `/music/tencent/search/singer`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/search/singer?keyword=洛天依

## 请求参数
<div class="table-overflow">

|   参数名   | 是否必填 |  数据类型   | 默认值 | 说明              |
|:-------:|:----:|:-------:|:---:|:----------------|
| keyword |  是   | string  |  /  | 歌手              |
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
            "total": 12, //搜索结果总数 [!code ++]
            "nextPage": 2, //下一页的页码 [!code ++]
            "perPage": 10 //当前每页显示数 [!code ++]
        }, // [!code ++]
        "list": [
            {
                "albumNum": 1564, //专辑数
                "concern_status": 0, 
                "mvNum": 980, // MV视频数
                "singerID": 61386, // 歌手ID
                "singerMID": "003ktdcg3E4kaG", // 歌手MID
                "singerName": "洛天依", // 歌手名
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ktdcg3E4kaG_7.jpg", // 歌手图片
                "songNum": 8149 // 歌曲数
            },
            {
                "albumNum": 30,
                "concern_status": 0,
                "mvNum": 15,
                "singerID": 5332545,
                "singerMID": "001QFs3W35Wt6h",
                "singerName": "ChiliChill",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000001QFs3W35Wt6h_8.jpg",
                "songNum": 67
            },
            {
                "albumNum": 323,
                "concern_status": 0,
                "mvNum": 154,
                "singerID": 980372,
                "singerMID": "000yjTkK2E7Rpz",
                "singerName": "乐正绫",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000000yjTkK2E7Rpz_3.jpg",
                "songNum": 2989
            },
            {
                "albumNum": 56,
                "concern_status": 0,
                "mvNum": 1511,
                "singerID": 7221,
                "singerMID": "000CK5xN3yZDJt",
                "singerName": "许嵩",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000000CK5xN3yZDJt_3.jpg",
                "songNum": 389
            },
            {
                "albumNum": 1,
                "concern_status": 0,
                "mvNum": 0,
                "singerID": 16391754,
                "singerMID": "003n7boS45qc2N",
                "singerName": "Dr.Nur单、洛天依",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000003n7boS45qc2N_2.jpg",
                "songNum": 0
            },
            {
                "albumNum": 0,
                "concern_status": 0,
                "mvNum": 0,
                "singerID": 3784859,
                "singerMID": "0032oxg80FFbNg",
                "singerName": "洛天依&阿良良木健",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000002PVWDN3kBtTe_0.jpg",
                "songNum": 1
            },
            {
                "albumNum": 1,
                "concern_status": 0,
                "mvNum": 0,
                "singerID": 16337046,
                "singerMID": "001Itbnk3KPLbC",
                "singerName": "水蓝琉璃洛天依",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Itbnk3KPLbC_1.jpg",
                "songNum": 1
            },
            {
                "albumNum": 17,
                "concern_status": 0,
                "mvNum": 6,
                "singerID": 1020907,
                "singerMID": "003f2cre1hniJ6",
                "singerName": "ilem",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000003f2cre1hniJ6_5.jpg",
                "songNum": 54
            },
            {
                "albumNum": 175,
                "concern_status": 0,
                "mvNum": 273,
                "singerID": 170683,
                "singerMID": "002OBqhv118O38",
                "singerName": "言和",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000002OBqhv118O38_3.jpg",
                "songNum": 2139
            },
            {
                "albumNum": 174,
                "concern_status": 0,
                "mvNum": 92,
                "singerID": 36239,
                "singerMID": "001AkuJH2G5OJJ",
                "singerName": "河图",
                "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000001AkuJH2G5OJJ_7.jpg",
                "songNum": 581
            }
        ]
    },
    "time": "2025-04-15 18:31:11",
    "pid": 19,
    "tips": "欢迎使用落月API-V3"
}
```
