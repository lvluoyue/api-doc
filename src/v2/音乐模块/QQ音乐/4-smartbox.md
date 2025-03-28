# 快捷搜索API <Badge type="tip" text="V2" />

## 简要描述

- QQ音乐快搜索接口，用于音乐搜索表单提示。

## 请求URL
- `/v2/music/tencent/search/smartbox`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/search/smartbox?word=狐妖小红娘

## 请求参数

| 参数名  | 是否必选 |  数据类型  | 说明   |
|:----:|:----:|:------:|:-----|
| word |  是   | string | 搜索内容 |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "album": {
            "count": 2,
            "itemlist": [
                {
                    "docid": "1031692",
                    "id": "1031692",
                    "mid": "000wd19g0wTd0d",
                    "name": "狐妖小红娘 动画原声带",
                    "pic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000000wd19g0wTd0d_1.jpg",
                    "singer": "华语群星"
                },
                {
                    "docid": "51294996",
                    "id": "51294996",
                    "mid": "003GLtZm09BdNc",
                    "name": "狐妖小红娘月红篇 电视剧原声带",
                    "pic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000003GLtZm09BdNc_1.jpg",
                    "singer": "黄绮珊/张杰/周深/袁娅维TIA RAY"
                }
            ],
            "name": "专辑",
            "order": 2,
            "type": 3
        },
        "mv": {
            "count": 2,
            "itemlist": [
                {
                    "docid": "869531",
                    "id": "869531",
                    "mid": "0034qhHt3lnt4l",
                    "name": "《狐妖小红娘》cp东方月初&涂山红红",
                    "singer": "动画视频",
                    "vid": "b0021738knz"
                },
                {
                    "docid": "976752",
                    "id": "976752",
                    "mid": "001Iqurk3nC9Eo",
                    "name": "狐妖小红娘 梦回还 王权富贵",
                    "singer": "动画视频",
                    "vid": "o0021shslfr"
                }
            ],
            "name": "MV",
            "order": 3,
            "type": 4
        },
        "singer": {
            "count": 2,
            "itemlist": [
                {
                    "docid": "4914381",
                    "id": "4914381",
                    "mid": "000lnrtZ1tNHRN",
                    "name": "狐妖小红娘-涂山苏苏",
                    "pic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000000lnrtZ1tNHRN_2.jpg",
                    "singer": "狐妖小红娘-涂山苏苏"
                },
                {
                    "docid": "2117041",
                    "id": "2117041",
                    "mid": "00451sDD3QE2AJ",
                    "name": "狐妖小红娘",
                    "pic": "http://y.gtimg.cn/music/photo_new/T001R150x150M00000451sDD3QE2AJ_1.jpg",
                    "singer": "狐妖小红娘"
                }
            ],
            "name": "歌手",
            "order": 1,
            "type": 2
        },
        "song": {
            "count": 4,
            "itemlist": [
                {
                    "docid": "105648974",
                    "id": "105648974",
                    "mid": "0023CVP23SH17s",
                    "name": "梦回还",
                    "singer": "呦猫UNEKO"
                },
                {
                    "docid": "231692423",
                    "id": "231692423",
                    "mid": "003yM7Uc3TRo5z",
                    "name": "人间白首",
                    "singer": "呦猫UNEKO"
                },
                {
                    "docid": "107438148",
                    "id": "107438148",
                    "mid": "0005Y0qE4b8qoi",
                    "name": "若当来世",
                    "singer": "马里奥/冥月"
                },
                {
                    "docid": "226150838",
                    "id": "226150838",
                    "mid": "001zYa4V2ZVYfw",
                    "name": "愿我",
                    "singer": "呦猫UNEKO"
                }
            ],
            "name": "单曲",
            "order": 0,
            "type": 1
        }
    },
    "time": "2024-08-03 19:41:11",
    "pid": 4528,
    "tips": "欢迎使用API-Server"
}
```
