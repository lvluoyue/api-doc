# 快捷搜索API <Badge type="tip" text="V3" />
::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于歌单列表搜索，支持分页。

## 接口地址
-  `GET` `/music/tencent/search/smartbox`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/search/smartbox?keyword=洛天依

## 请求参数
<div class="table-overflow">

|   参数名   | 是否必填 |  数据类型  | 默认值 | 说明   |
|:-------:|:----:|:------:|:---:|:-----|
| keyword |  是   | string |  /  | 歌单名称 |

</div>

## 返回示例
``` json
{
    "code": 0,
    "message": "访问成功",
    "data": {
        "album": {
            "count": 2, // 专辑数量
            "itemlist": [
                {
                    "id": "1283240", // 专辑id
                    "mid": "001gQ5oZ3ZIbAw", // 专辑mid
                    "name": "洛天依作品集", // 专辑名称
                    "pic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000001gQ5oZ3ZIbAw_2.jpg", // 专辑图片
                    "singer": "洛天依" // 专辑作者
                },
                {
                    "id": "22330356",
                    "mid": "001CCsrz3ly1sO",
                    "name": "2015哔哩哔哩拜年纪",
                    "pic": "http://y.gtimg.cn/music/photo_new/T002R180x180M000001CCsrz3ly1sO_1.jpg",
                    "singer": "洛天依"
                }
            ],
            "name": "专辑",
            "order": 2
        },
        "mv": {
            "count": 2, // MV数量
            "itemlist": [
                {
                    "id": "1394231", // 歌曲id
                    "mid": "001ldqdG4b0HfK", // MV mid
                    "name": "【全职高手】达拉崩吧", // MV名称
                    "singer": "洛天依", // 歌手名称
                    "vid": "n00253s8ixk" // MV id
                },
                {
                    "id": "1514774",
                    "mid": "003Of2TX2aQWV5",
                    "name": "非人哉",
                    "singer": "洛天依",
                    "vid": "w00303rq8yt"
                }
            ],
            "name": "MV",
            "order": 3
        },
        "singer": {
            "count": 1, // 歌手数量
            "itemlist": [
                {
                    "id": "61386", // 歌手id
                    "mid": "003ktdcg3E4kaG", // 歌手mid
                    "name": "洛天依", // 歌手名称
                    "pic": "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ktdcg3E4kaG_7.jpg", // 歌手图片
                    "singer": "洛天依" // 歌手名称
                }
            ],
            "name": "歌手",
            "order": 1
        },
        "song": {
            "count": 4, // 歌曲数量
            "itemlist": [
                {
                    "id": "104797698", // 歌曲id
                    "mid": "001mzBxY4UVcAH", // 歌曲mid
                    "name": "霜雪千年", // 歌曲名称
                    "singer": "洛天依/乐正绫" // 歌手名称
                },
                {
                    "id": "102176361",
                    "mid": "001xZXiW4aAhkL",
                    "name": "权御天下",
                    "singer": "洛天依"
                },
                {
                    "id": "102366907",
                    "mid": "000eBrFh2kXacf",
                    "name": "东京不太热",
                    "singer": "洛天依"
                },
                {
                    "id": "230393569",
                    "mid": "0034QZCD0BISWP",
                    "name": "非人哉",
                    "singer": "洛天依"
                }
            ],
            "name": "单曲",
            "order": 0
        }
    },
    "time": "2025-04-07 08:05:48",
    "pid": 17908,
    "tips": "欢迎使用落月API-V3"
}
```
