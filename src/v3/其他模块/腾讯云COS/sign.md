# 腾讯云存储签名 <Badge type="tip" text="V3" /> <Badge type="new" text="new" />

## 接口描述
- 生成一个新的cookie，并返回账号的相关信息。
- 携带refresh_key和refresh_token时可使用过期的key生成新的cookie（退出登录后不可生成）。

## 接口地址
-  `GET` `/music/tencent/cookie/refresh`

## 请求数据类型
- `application/x-www-form-urlencoded`

## 请求示例
- https://api.vkeys.cn/tool/cos/sign?sha1=4fbfbc28bbc4a67850fa90823fcea389fcfcd48d&md5=f853b39f8d7c2e617dbde77dca66d413&size=51458

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
    "code": 0,
    "message": "访问成功",
    "data": {
        "url": "https://music-file-1258344705.cos.ap-guangzhou.myqcloud.com/songlist/p/1147c/4fbfbc28bbc4a67850fa90823fcea389fcfcd48d_c902.png",
        "method": "PUT",
        "header": {
            "Host": "music-file-1258344705.cos.ap-guangzhou.myqcloud.com",
            "User-Agent": "workerman/http-client",
            "Connection": "keep-alive",
            "Content-Length": "51458",
            "content-md5": "+FOzn418LmF9ved9ymbUEw==",
            "x-cos-security-token": "GIzUbkNQfZH0Q4V27p2vHL75iRJ7tbha95c7097b1d14c7841cc356f2b5f5fde5nmIWL_hRE2_mVvAGwAqCv3Rrfhx3s6nAKSgHxZq1vawdWHrH7YnX1NM7UPEgPSMgE466zts5CRzMbgFfEYBv0AEzh5iKkfS0kuQVudbrPNGloJwSGh9ZJg5lvIB7J-dt_rbtlqqImTNrvMPpFJmB9Ugyus4WJk_TVieUUafxixaXvNjhItDeRnb6xa403LV33dSbNaa_1dq5AmNw0wEVy2scKrtRtChNyn1G3TndRcUcqfxrYbbfT2NdGoKR4-kPVPmp8qkhOWzIPLv9ss7pMfJ6jR8xVZNF6cVgR7bdADUuMHMvRZmlwOhSaW7y3gIfaLcKLEzOVM0Jfa-k8SUJ2V5JUCdMu7nxYlQMvUuycn-AqOEAlM8UNtcC7pDexu_D3aR8zsEGtaPjVID5eSqEphjwg93zPsi6YS83uGrwqyfaj5vAewuOuqEHW-_GDbiUF21ebmGmFysI0V6U6UiwOsg9twv5AM4PFM_Snu8TNEG8u6CYUTsqsccAtYHaoD_Gg-IDqevp2tHm-wG29LGHgMIXhAimJXRz8E2NS_bLUm6vUSypPApEuwk8c-T-d7sNKKQ3NLNRHnQXfwV01H2eFLhZ4MZ2_V7qCnH-oi7CHjnbo_yJpY9nix2zHQ-QyL8nHGQ3O7p1F7GdcjfZNueFOUN_lmOyxsrwrEBaCxaeSFQ0sq0qClUqnZAy6UoHKCqjmymsCFp3IKJbok5TAXPSsSEvZXOvYMcwtiQkGcAjVBpFlc43u-f-1lRqrcCLwZgW3WXnDB90M2QNfejIb19j_AVX3A9IpZk8xUuQmA0SsEiID55VQMg01MgCVPfp-8M21xVqDiVi3VAYlR-nu4aiBJzPJ9SfTUwDDqP3Yz4LCl6vsrxgFk3hHgMNy1juD28za_K8D1qgaaT8z53uc9vLlkWc6Wky_Zffv_cf4f4VIN7myW_si7XHr4_Y4OYshk1TJldOg2BXUsaGaxVEpspnzg48a2xa_GTeGb89V_H1RK7K3F854VYBK3ITRMFD-rCL6rbCMpHR3iBZ3qGuQWAzsQ",
            "Authorization": "q-sign-algorithm=sha1&q-ak=AKIDT4q2N7IcbGEJoS1J2U7y0eAqY4ndvk3TzzFa_avW2x3vbHMrmWbdtQQmnpTQz-Qp&q-sign-time=1746537582;1746539442&q-key-time=1746537582;1746539442&q-header-list=content-length;content-md5;host;x-cos-security-token&q-url-param-list=&q-signature=cd9d5033f413b66abbc91eae0c16a979bbed50ad"
        },
        "CDN": "https://music-file.y.qq.com/songlist/p/1147c/4fbfbc28bbc4a67850fa90823fcea389fcfcd48d_c902.png"
    },
    "time": "2025-05-06 21:20:42",
    "pid": 25,
    "tips": "欢迎使用落月API-V3"
}
```

## 前端示例(需解决跨域问题)
