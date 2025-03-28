# 歌手搜索API <Badge type="tip" text="V2" />

## 简要描述

- 这是一个QQ音乐搜索接口，只能用于搜索，其他参数无效。

## 请求URL
- `/v2/music/tencent/search/singer`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/search/singer?word=洛天依

## 请求参数

| 参数名  | 是否必选 |  数据类型  | 说明                    |
|:----:|:----:|:------:|:----------------------|
| word |  是   | string | 歌手                    |
| page |  否   |  int   | 页数，默认为1               |
| num  |  否   |  int   | 每页显示数，默认为10，区间：[1,60] |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": [
        {
            "albumNum": 1454,
            "concern_status": 0,
            "docid": "14665351520814081",
            "mvNum": 994,
            "singerID": 61386,
            "singerMID": "003ktdcg3E4kaG",
            "singerName": "洛天依",
            "singerName_hilight": "<em>洛天依</em>",
            "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ktdcg3E4kaG_7.jpg",
            "songNum": 7949
        },
        {
            "albumNum": 312,
            "concern_status": 0,
            "docid": "9701185836794926196",
            "mvNum": 153,
            "singerID": 980372,
            "singerMID": "000yjTkK2E7Rpz",
            "singerName": "乐正绫",
            "singerName_hilight": "乐正绫",
            "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000000yjTkK2E7Rpz_3.jpg",
            "songNum": 2967
        },
        {
            "albumNum": 171,
            "concern_status": 0,
            "docid": "9573184170621566308",
            "mvNum": 273,
            "singerID": 170683,
            "singerMID": "002OBqhv118O38",
            "singerName": "言和",
            "singerName_hilight": "言和",
            "singerPic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000002OBqhv118O38_3.jpg",
            "songNum": 2128
        }
    ],
    "time": "2024-08-03 21:13:20",
    "pid": 12,
    "tips": "欢迎使用API-Server"
}
```
