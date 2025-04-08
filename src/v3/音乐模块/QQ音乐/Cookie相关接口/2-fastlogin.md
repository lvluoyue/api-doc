# pc端快速登录API <Badge type="tip" text="V3" />
::: warning
此功能需要使用电脑端QQ登录账号。登录成功后点击登录按钮，即可获取cookie。
:::
## 接口描述
- 使用电脑端QQ自动化获取cookie。

## 接口地址
-  `GET` `/music/tencent/cookie/fastlogin`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/music/tencent/cookie/fastlogin?client_uin=1569097443&client_key=0c3a26879b28c497fdfc464chc9047bdf2c42d774et6ab65dfc6ds752893095a5b77y87c61b7de6c8729e30r0cb6cfbd

## 请求参数

|    参数名     | 是否必选 |  数据类型  | 说明                |
|:----------:|:----:|:------:|:------------------|
| client_uin |  是   | string | 登录账号ID            |
| client_key |  是   | string | 临时授权码(96字节或224字节) |

## key获取脚本
::: info
GitHub链接：https://github.com/lvluoyue/music-cookie
:::
使用方法：在windows中登录QQ，然后打开powershell，输入以下命令
```shell
irm https://gh-proxy.com/raw.githubusercontent.com/lvluoyue/music-cookie/refs/heads/master/qqkey.ps1 | iex
```

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
