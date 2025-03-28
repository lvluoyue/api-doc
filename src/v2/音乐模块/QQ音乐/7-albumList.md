# 歌手专辑列表API <Badge type="tip" text="V2" />

## 简要描述

- 这是一个QQ音乐搜索接口，只能用于搜索，其他参数无效。

## 请求URL
- `/v2/music/tencent/singer/albumlist`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/singer/albumlist?mid=003ktdcg3E4kaG

## 请求参数

| 参数名  | 是否必选 |  数据类型  | 说明                    |
|:----:|:----:|:------:|:----------------------|
| mid  |  是   | string | 歌手mid                 |
| page |  否   |  int   | 页数，默认为1               |
| num  |  否   |  int   | 每页显示数，默认为10，区间：[1,60] |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": [
        {
            "albumMid": "001gQ5oZ3ZIbAw",
            "albumName": "洛天依作品集",
            "albumTranName": "",
            "publishDate": "2016-01-01",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "001gQ5oZ3ZIbAw_2",
            "albumID": 1283240,
            "singerName": "洛天依"
        },
        {
            "albumMid": "001E8Dko2o1D6p",
            "albumName": "末日DISCO",
            "albumTranName": "",
            "publishDate": "2013-06-05",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "001E8Dko2o1D6p_1",
            "albumID": 1283028,
            "singerName": "洛天依"
        },
        {
            "albumMid": "000s9Xs623THdK",
            "albumName": "Sing Sing Sing",
            "albumTranName": "",
            "publishDate": "2012-07-12",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "000s9Xs623THdK_1",
            "albumID": 1283081,
            "singerName": "洛天依"
        },
        {
            "albumMid": "0003jG162JjJGO",
            "albumName": "洛天依精选集二",
            "albumTranName": "",
            "publishDate": "2014-05-11",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "0003jG162JjJGO_1",
            "albumID": 515710,
            "singerName": "洛天依"
        },
        {
            "albumMid": "002BqWJr1jwHIF",
            "albumName": "百转千回",
            "albumTranName": "",
            "publishDate": "2013-07-22",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "002BqWJr1jwHIF_4",
            "albumID": 433484,
            "singerName": "洛天依"
        },
        {
            "albumMid": "003UGLjI0QfdvH",
            "albumName": "洛天依精选集一",
            "albumTranName": "",
            "publishDate": "2014-04-23",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "003UGLjI0QfdvH_1",
            "albumID": 494592,
            "singerName": "洛天依"
        },
        {
            "albumMid": "001S0WXZ0TapBn",
            "albumName": "宝贝",
            "albumTranName": "",
            "publishDate": "2013-08-16",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "001S0WXZ0TapBn_1",
            "albumID": 435266,
            "singerName": "洛天依"
        },
        {
            "albumMid": "002k5KVd3lZx78",
            "albumName": "花洛兮",
            "albumTranName": "",
            "publishDate": "2013-10-20",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "002k5KVd3lZx78_1",
            "albumID": 663475,
            "singerName": "洛天依"
        },
        {
            "albumMid": "0035MaNl4U0bG9",
            "albumName": "花洛兮Ⅱ",
            "albumTranName": "",
            "publishDate": "2014-10-10",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "0035MaNl4U0bG9_1",
            "albumID": 1040257,
            "singerName": "洛天依"
        },
        {
            "albumMid": "002WtP8A09kjSa",
            "albumName": "洛天依精选集三",
            "albumTranName": "",
            "publishDate": "2014-06-03",
            "totalNum": 0,
            "albumType": "录音室专辑",
            "pmid": "002WtP8A09kjSa_1",
            "albumID": 533425,
            "singerName": "洛天依"
        }
    ],
    "time": "2024-08-18 21:35:28",
    "pid": 26,
    "tips": "欢迎使用API-Server"
}
```
