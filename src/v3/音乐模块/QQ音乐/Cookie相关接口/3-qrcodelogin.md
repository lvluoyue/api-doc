# 二维码登录API <Badge type="tip" text="V3" />

::: danger
此接口仍在开发中，在此期间接口可能会经常变更，不建议使用。
:::

## 接口描述

- 使用二维码登录，并获取qq音乐的token。接口使用sse返回，需要前端使用`EventSource`监听sse事件。

## 接口地址

- `GET` `/music/tencent/cookie/fastlogin`

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

## 在线获取

<div class="qrcode-button-box">
    <VPButton text="点击获取二维码" @click="showQRCodeModal = true;save = false"></VPButton>
    <VPButton text="点击获取二维码（结果保存到服务器）" @click="showQRCodeModal = true;save = true"></VPButton>
</div>

<div v-if="showQRCodeModal" class="qr-code-modal">
  <div class="qr-code-modal-content">
    <span class="qr-code-close" @click="showQRCodeModal = false">&times;</span>
      <VPImage v-if="showQRCodeModal" :image="qrcode" alt="QR Code"></VPImage>
  </div>
</div>

<script setup>
import {ref, watch} from 'vue';
import {VPButton,VPImage} from "vitepress/theme"; 
const showQRCodeModal = ref(false);
const save = ref(false);
const qrcode = ref('');
const cookie = ref({
  cookie: null,
  info: null,
});

watch(showQRCodeModal, (newValue) => {
    if(newValue) {
        const source = new EventSource('https://api.vkeys.cn/music/tencent/cookie/qrcode?save=' + save.value);
        source.addEventListener('message', function ({lastEventId, data}) {
          console.log(lastEventId);
          if(lastEventId === '1') {
            qrcode.value = data;
          } else if(data === '二维码已失效') {
            source.close();
          }
          const json = JSON.parse(data);
            if(json.cookie) {
              cookie.value = json.cookie;
              source.close();
            }
        }, false);
    } else {
        qrcode.value = '';
        cookie.value = {cookie: null, info: null};
    }
})

</script>
<style>
.qrcode-button-box {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}
.qr-code-modal {
  display: block;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.4);
}

.qr-code-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 300px;
}

.qr-code-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.qr-code-close:hover,
.qr-code-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

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
