# 歌曲信息及音质列表API <Badge type="tip" text="V3" />

::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 用于歌曲列表搜索，支持分页。

## 接口地址

- `GET` `/music/tencent/song/info`

## 请求数据类型

- `application/x-www-form-urlencoded`

## 请求示例

- https://api.vkeys.cn/music/tencent/song/info?id=105648974

## 请求参数

| 参数名  | 是否必选 |  数据类型  | 说明                          |
|:-----|:----:|:------:|:----------------------------|
| id   |  否   |  int   | 根据音乐id获取音乐链接，id与mid选择其中一个即可 |
| mid  |  否   | string | 根据音乐id获取音乐链接，id与mid选择其中一个即可 |
| type |  否   |  int   | 歌曲类型，默认为0                   |

## 返回示例

``` json
{
    "code": 0,
    "message": "访问成功",
    "data": {
        "id": 105648974, //歌曲ID
        "mid": "0023CVP23SH17s", //歌曲mid
        "vid": "v00199a1i1e", //mv的vid
        "song": "梦回还", //歌曲名
        "subtitle": "《狐妖小红娘·王权篇》网络动画片头曲", //副标题
        "album": "狐妖小红娘 动画原声带", //专辑名
        "singer": "呦猫UNEKO", //歌手名（多个歌手以/分割）
        "singer_list": [ //歌手列表
            {
                "id": 1092914, //歌手ID
                "mid": "003VD9fu3Eh1q4", //歌手mid
                "name": "呦猫UNEKO", //歌手名
                "pmid": "",
                "title": "呦猫UNEKO", //歌手名
                "type": 1,
                "uin": 0
            }
        ],
        "cover": "https://y.qq.com/music/photo_new/T002R800x800M000000wd19g0wTd0d.jpg",//封面地址
        "pay": "付费", //是否付费（初步判断）
        "time": "2016-07-08", //发布时间
        "type": 0, //歌曲类型（点歌时需要用到）
        "bpm": 84, //BPM值
        "content": "",
        "grp": [] //多版本列表，与list保持一致
        "quality_info": [// 音质列表
            {
                "type": 0, // 音质id，点歌时需要
                "size": 960887, //文件大小，0为无效
                "quality": "音乐试听", // 音质名
                "file": "RS020023CVP23SH17s.mp3" // 文件名
            },
            {
                "type": 1,
                "size": 0,
                "quality": "有损音质",
                "file": "C100003t4TGX46UGp7.m4a"
            },
            {
                "type": 2,
                "size": 1522964,
                "quality": "有损音质",
                "file": "C200003t4TGX46UGp7.m4a"
            },
            {
                "type": 3,
                "size": 3043806,
                "quality": "有损音质",
                "file": "C400003t4TGX46UGp7.m4a"
            },
            {
                "type": 4,
                "size": 6048661,
                "quality": "标准音质",
                "file": "C600003t4TGX46UGp7.m4a"
            },
            {
                "type": 5,
                "size": 3025258,
                "quality": "标准音质",
                "file": "O400003t4TGX46UGp7.ogg"
            },
            {
                "type": 6,
                "size": 4001341,
                "quality": "标准音质",
                "file": "M500003t4TGX46UGp7.mp3"
            },
            {
                "type": 7,
                "size": 6127530,
                "quality": "标准音质",
                "file": "O600003t4TGX46UGp7.ogg"
            },
            {
                "type": 8,
                "size": 10003026,
                "quality": "HQ高音质",
                "file": "M800003t4TGX46UGp7.mp3"
            },
            {
                "type": 9,
                "size": 10870748,
                "quality": "HQ高音质",
                "file": "O800003t4TGX46UGp7.ogg"
            },
            {
                "type": 10,
                "size": 58775435,
                "quality": "SQ无损音质",
                "file": "F000003t4TGX46UGp7.flac"
            },
            {
                "type": 11,
                "size": 0,
                "quality": "Hi-Res音质",
                "file": "RS01003t4TGX46UGp7.flac"
            },
            {
                "type": 12,
                "size": 0,
                "quality": "杜比全景声",
                "file": "D001003t4TGX46UGp7.mp4"
            },
            {
                "type": 13,
                "size": 32270821,
                "quality": "臻品全景声",
                "file": "Q000000Ok4Fl4ckn34.flac"
            },
            {
                "type": 14,
                "size": 188505804,
                "quality": "臻品母带2.0",
                "file": "AI00004XGZCG3gCeKc.flac"
            },
            {
                "type": 15,
                "size": 21475189,
                "quality": "AI伴奏消音(试验)",
                "file": "O801003YeTqm3yCpZQ.ogg"
            },
            {
                "type": 16,
                "size": 82846386,
                "quality": "AI人声消音(试验)",
                "file": "Q001000Ok4Fl4ckn34.flac"
            }
        ]
    },
    "time": "2025-04-08 14:29:43",
    "pid": 11444,
    "tips": "欢迎使用落月API-V3"
}
```
