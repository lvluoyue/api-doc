# 二维码登录API <Badge type="tip" text="V3" /> <Badge type="danger" text="开发中" />
::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述
- 使用二维码登录，并获取qq音乐的token。接口使用sse返回，需要前端使用`EventSource`监听sse事件。

## 接口地址
-  `GET` `/music/tencent/cookie/fastlogin`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 返回数据类型
- `text/event-stream`

## 请求示例
- https://api.vkeys.cn/music/tencent/cookie/qrcode

## 请求参数

<div class="table-overflow">

| 参数名  | 是否必选 | 数据类型 |  默认值  | 说明               |
|:----:|:----:|:----:|:-----:|:-----------------|
| save |  否   | bool | false | 是否将cookie保存在服务器中 |

</div>

## key获取脚本
::: info
GitHub链接：https://github.com/lvluoyue/api-doc/blob/main/scripts/qqkey.ps1
:::
使用方法：在windows中登录QQ，然后打开cmd命令行，输入以下命令
```shell
powershell "irm https://gh-proxy.com/raw.githubusercontent.com/lvluoyue/api-doc/refs/heads/main/scripts/qqkey.ps1 | iex"
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
