# 扫码获取cookie <Badge type="tip" text="V2" />

## 简要描述

- 通过用户扫描二维码获取QQ音乐的cookie，获取成功后系统会将结果发送到目标邮箱中。

## 请求URL
- `/v2/music/tencent/qrcode`

## 请求方式
- `GET` / `POST`

## 请求示例
- https://api.vkeys.cn/v2/music/tencent/qrcode

## 请求参数

| 参数名 | 是否必选 | 数据类型 | 说明 |
|:---:|:----:|:----:|:---|
|  无  |  无   |  无   | 无  |

## 返回示例

<VPButton text="点击获取二维码" @click="showQRCodeModal = true;"></VPButton>

<div v-if="showQRCodeModal" class="qr-code-modal">
  <div class="qr-code-modal-content">
    <span class="qr-code-close" @click="showQRCodeModal = false">&times;</span>
      <VPImage v-if="showQRCodeModal" image="https://api.vkeys.cn/v2/music/tencent/qrcode" alt="QR Code"></VPImage>
  </div>
</div>

<script setup>
import { ref } from 'vue';
import {VPButton,VPImage} from "vitepress/theme";
const showQRCodeModal = ref(false);

</script>
<style>
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
