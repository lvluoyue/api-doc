# cookie刷新API <Badge type="tip" text="V3" />
::: info
该接口中cookie的值缓存1分钟，info的值缓存30分钟。
:::

## 接口描述
- 生成一个新的cookie，并返回账号的相关信息。
- 携带refresh_key和refresh_token时可使用过期的key生成新的cookie（退出登录后不可生成）。

## 接口地址
-  `GET` `/music/tencent/cookie/refresh`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/cookie/refresh?uin=1569097443&music_key=Q_H_L_59H1q......

## 请求参数

|      参数名      | 是否必选 |  数据类型  | 说明                              |
|:-------------:|:----:|:------:|:--------------------------------|
|      uin      |  是   |  int   | 你的QQ号                           |
|   music_key   |  是   | string | 账号key，带有Q_H_L&#95;或W_X&#95;的字符串 |
|  refresh_key  |  否   | string | CK刷新key，已失效cookie带上这个刷新         |
| refresh_token |  否   | string | CK刷新令牌，已失效cookie带上这个刷新          |

## 区分微信账号和QQ账号
| music值     | uin值  | 说明     |
|:-----------|:------|:-------|
| Q_H_L&#95; | 6-11位 | QQ账号ck |
| W_X&#95;   | 最大19位 | 微信账号ck |

## 返回示例
``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "cookie": {
            "uin": 1569097443, // 账号ID
            "musickey": "Q_H_L_63kfNuk1fUK-t9Rshh-NGQrRsuQmM8eCpOAo4TtgtNtGBY7_4KESYJVVrXh35gdQrsbIJhHLcKGsNEjHRzwHMZ-CPaFB-i6gAsgcCLTYB-4KIh_SwMdTWUVWrZf-LyAhajDfpv5uwvu0-k0KiS3w",// token字段
            "refresh_token": "", // 刷新key
            "refresh_key": "", // 刷新token
            "musickeyCreateTimestamp": 1722693959, // token创建时间戳
            "musickeyCreateTime": "2024-08-03 22:05:59", // token创建时间
            "keyExpiresIn": 259200, // token过期时间
            "musickeyLastTimestamp": 1722953159, // token最后更新时间戳
            "musickeyLastTime": "2024-08-06 22:05:59" // token最后更新时间
        },
        "info": {
            "vip": false, // 是否为vip
            "vipEndTimestamp": 1694733645, // vip到期时间戳
            "vipEndTime": "2023-09-15 07:20:45", // vip到期时间
            "vipDateDiff": 323, // vip剩余天数
            "svip": false, // 是否为svip
            "svipEndTimestamp": 1692660579, // svip到期时间戳
            "svipEndTime": "2023-08-22 07:29:39", // svip到期时间
            "svipDateDiff": 347 // svip剩余天数
        }
    },
    "time": "2024-08-03 22:05:59",
    "pid": 14,
    "tips": "欢迎使用API-Server"
}
```

