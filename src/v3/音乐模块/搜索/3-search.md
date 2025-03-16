# 歌曲搜索API

## 接口描述

- QQ音乐搜索接口，用于歌曲列表搜索。支持分页。

## 接口地址
-  `GET` `https://api.vkeys.cn/music/tencent/searchSong`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/searchSong?keyword=狐妖小红娘

## 请求参数
|   参数名    | 是否必填 |  数据类型   | 默认值 | 说明                  |
|:--------:|:----:|:-------:|:---:|:--------------------|
| keyword  |  是   | string  |  /  | 歌名                  |
|   page   |  否   |   int   |  1  | 当前页数                |
|   num    |  否   |   int   | 10  | 每页显示数，区间：[1,60]     |

## 返回示例
``` json
{
    "code": 0,
    "message": "访问成功",
    "data": {
        "meta": {
            "total": 1001,
            "nextPage": 2,
            "perPage": 10
        },
        "list": [
            {
                "id": 105648974,
                "mid": "0023CVP23SH17s",
                "vid": "v00199a1i1e",
                "song": "梦回还",
                "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲",
                "album": "狐妖小红娘 动画原声带",
                "singer": "呦猫UNEKO",
                "singer_list": [
                    {
                        "id": 1092914,
                        "mid": "003VD9fu3Eh1q4",
                        "name": "呦猫UNEKO",
                        "pmid": "",
                        "title": "呦猫UNEKO",
                        "type": 1,
                        "uin": 0
                    }
                ],
                "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000wd19g0wTd0d.jpg",
                "pay": "付费",
                "time": "2016-07-08",
                "type": 0,
                "bpm": 84,
                "content": "",
                "quality": "无音质",
                "grp": []
            }
        ]
    }
}
```
