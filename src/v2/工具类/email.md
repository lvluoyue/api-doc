# 发送邮件API

## 简要描述

- 发送邮件接口

## 请求URL
- ` https://api.vkeys.cn/v2/tool/email `

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/tool/email?mail[]=1569097443@qq.com&title=标题&body=正文

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|mail | 是  |array | 收件人，可指定多个   |
|title| 是  |string | 邮件标题    |
|body | 是  |string | 邮件内容    |
|cc   | 否  |array | 添加抄送邮件地址    |
|bcc  | 否  |array | 添加密送邮件地址    |

## 返回示例

``` json
{
    "code": 200,
    "message": "请求成功！",
    "data": {
        "err": ""
    },
    "time": "2024-08-27 17:46:52",
    "pid": 18172,
    "tips": "欢迎使用API-Server"
}
```




