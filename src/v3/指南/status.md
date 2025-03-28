# code状态码大全 <Badge type="tip" text="V3" />
code状态码的设计思路是：模块编号(00-99)+子模块编号(00-99)+具体状态码(00-99)  
模块编号为0时表示通用的状态码，所有接口都可以返回该状态码。  
这种模式据说也是`微服务`的一种设计模式。

<table>
  <thead>
    <tr>
      <th style="text-align: center">状态码</th>
      <th>解释</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="code in data.data" :key="code.code">
      <td style="text-align: center">{{ code.code }}</td>
      <td>{{ code.message }}</td>
    </tr>
  </tbody>
</table>

<script setup>
import { data } from './status.data';

</script>
