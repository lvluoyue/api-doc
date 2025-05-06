# 腾讯云存储签名 <Badge type="tip" text="V3" /> <Badge type="new" text="new" />

## 接口描述
- 生成一个新的cookie，并返回账号的相关信息。
- 携带refresh_key和refresh_token时可使用过期的key生成新的cookie（退出登录后不可生成）。

## 接口地址
-  `GET` `/music/tencent/cookie/refresh`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/tool/cos/sign?sha1=1569097443&md5=&size=123456789

## 请求参数

<div class="table-overflow">

|      参数名      | 是否必选 |  数据类型  | 默认值 | 说明       |
|:-------------:|:----:|:------:|:---:|:---------|
|     sha1      |  是   | string |  /  | 文件的sha1值 |
|      md5      |  是   | string |  /  | 文件的md5值  |
|     size      |  是   |  int   |  /  | 文件的大小    |

</div>

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
            "vipDateDiff": 323, // vip到期时间与当前时间差（永远为正数）
            "svip": false, // 是否为svip
            "svipEndTimestamp": 1692660579, // svip到期时间戳
            "svipEndTime": "2023-08-22 07:29:39", // svip到期时间
            "svipDateDiff": 347 // svip到期时间与当前时间差（永远为正数）
        }
    },
    "time": "2024-08-03 22:05:59",
    "pid": 14,
    "tips": "欢迎使用API-Server"
}
```

