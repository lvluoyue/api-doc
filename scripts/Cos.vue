<script setup lang="ts">

import { ref } from 'vue';
import axios from 'axios';
import SparkMD5 from 'spark-md5';
import CryptoJS from 'crypto-js';

const file = ref(null)

// 处理文件选择
function handleFileChange(event) {
  file.value = event.target.files[0]
}

// 计算文件 MD5
async function calculateMD5(file) {
  return new Promise((resolve) => {
    const spark = new SparkMD5.ArrayBuffer()
    const reader = new FileReader()

    reader.onload = (e) => {
      spark.append(e.target.result)
      resolve(spark.end())
    }

    reader.readAsArrayBuffer(file)
  })
}

// 计算文件 SHA1
async function calculateSHA1(file) {
  const arrayBuffer = await file.arrayBuffer()
  const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer)
  const hash = CryptoJS.SHA1(wordArray)
  return hash.toString()
}

// 获取上传地址
async function getUploadUrl(md5, sha1, size) {
  const { data } = await axios.get(`https://api.vkeys.cn/tool/cos/sign?sha1=${sha1}&md5=${md5}&size=${size}`)
  if (data.code !== 0) {
    throw new Error('获取上传地址失败')
  }

  return data.data // 假设返回的数据结构中有上传地址字段
}

// 文件上传逻辑
async function uploadFile() {
  if (!file.value) {
    alert('请选择一个文件')
    return
  }

  try {
    const md5 = await calculateMD5(file.value)
    const sha1 = await calculateSHA1(file.value)
    const size = file.value.size

    console.log('MD5:', md5)
    console.log('SHA1:', sha1)
    console.log('文件大小:', size)

    // 获取上传地址
    const {url, method, header, CDN} = await getUploadUrl(md5, sha1, size)

    // 使用上传地址进行文件上传
    const formData = new FormData()
    formData.append('file', file.value)

    const uploadResponse = await axios.request({
      url: url,
      method: method,
      headers: header,
      data: formData,
    })

    console.log('上传响应:', uploadResponse.data)

    if (uploadResponse.status == 200) {
      alert('文件上传成功！')
    } else {
      alert('文件上传失败！')
    }
  } catch (error) {
    console.error('错误:', error)
    alert('发生错误，请查看控制台日志')
  }
}
</script>


<template>
  <div class="file-upload-container">
    <label class="file-upload-label" for="file-input">
      <span class="file-upload-icon">📂</span>
      <span class="file-upload-text">点击选择文件</span>
    </label>
    <input id="file-input" type="file" @change="handleFileChange" class="file-upload-input" />
    <button @click="uploadFile" class="upload-button">上传</button>
  </div>
</template>

<style scoped>
.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.file-upload-label {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.file-upload-label:hover {
  background-color: #0056b3;
}

.file-upload-icon {
  margin-right: 10px;
  font-size: 20px;
}

.file-upload-text {
  font-size: 16px;
}

.file-upload-input {
  display: none;
}

.upload-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.upload-button:hover {
  background-color: #218838;
}
</style>
