# cookie刷新API <Badge type="tip" text="V2" />

## 简要描述

- 这是一个获取QQ音乐账号的cookie信息。
- 根据过期/未过期的CK生成一个新的CK，可刷新3-6个月。
- 此接口不会存储您的ck数据，请放心使用。

## 请求URL
- `/v2/music/tencent/cookie`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/cookie?uin=1569097443&musickey=Q_H_L_59H1q......

## 请求参数

|       参数名       |  是否必选  |   数据类型   | 说明                         |
|:---------------:|:------:|:--------:|:---------------------------|
|       uin       |   是    |   int    | 你的QQ号                      |
|    musickey     |   是    |  string  | 带有Q_H_L&#95;或W_X&#95;的字符串  |
|   refresh_key   |   否    |  string  | CK刷新key，已失效cookie带上这个刷新    |
|  refresh_token  |   否    |  string  | CK刷新令牌，已失效cookie带上这个刷新     |

## 关于uin和musickey
| music值     | uin值  | 说明     |
|:-----------|:------|:-------|
| Q_H_L&#95; | 6-11位 | QQ账号ck |
| W_X&#95;   | 最大19位 | 微信账号ck |

## 返回示例
```
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "cookie": {
            "uin": 1569097443,
            "musickey": "Q_H_L_63kfNuk1fUK-t9Rshh-NGQrRsuQmM8eCpOAo4TtgtNtGBY7_4KESYJVVrXh35gdQrsbIJhHLcKGsNEjHRzwHMZ-CPaFB-i6gAsgcCLTYB-4KIh_SwMdTWUVWrZf-LyAhajDfpv5uwvu0-k0KiS3w",
            "refresh_token": "",
            "refresh_key": "",
            "musickeyCreateTimestamp": 1722693959,
            "musickeyCreateTime": "2024-08-03 22:05:59",
            "keyExpiresIn": 259200,
            "musickeyLastTimestamp": 1722953159,
            "musickeyLastTime": "2024-08-06 22:05:59"
        },
        "info": {
            "vip": false,
            "vipEndTimestamp": 1694733645,
            "vipEndTime": "2023-09-15 07:20:45",
            "vipDateDiff": 323,
            "svip": false,
            "svipEndTimestamp": 1692660579,
            "svipEndTime": "2023-08-22 07:29:39",
            "svipDateDiff": 347
        }
    },
    "time": "2024-08-03 22:05:59",
    "pid": 14,
    "tips": "欢迎使用API-Server"
}
```

