# 二维码生成 <Badge type="tip" text="V2" />

## 简要描述

- 二维码生成接口

## 请求URL
- ` https://api.vkeys.cn/v2/tool/qrcode

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/tool/qrcode?text=https://doc.vkeys.cn


## 参数

| 参数名       | 必选 | 类型     | 说明             |
|:----------|:---|:-------|----------------|
| text      | 是  | string | 二维码数据          |
| size      | 否  | int    | 二维码大小   默认值300 |
| margin    | 否  | int    | 二维码外边距  默认值15  |
| labelText | 否  | string | 标签文本           |
| labelsize | 否  | int    | 标签大小  默认值20    |
| logo      | 否  | string | log标志          |
| logoSize  | 否  | string | log大小   默认值120 |

## 返回示例

``` text
  返回二维码图片
```
