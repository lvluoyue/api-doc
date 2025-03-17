# 前言
::: warning
当前文档为v3版本（正在开发），v2版本接口因腾讯官方接口调整，无法获取会员歌曲以及高音质音乐。  
:::

为了使接口拥有更强大的功能，我们重构了之前的所有代码，包括框架底层。  
该框架已从本接口系统分离出来，有兴趣可访问[https://github.com/lvluoyue/webman-mvc](https://github.com/lvluoyue/webman-mvc)  

## 更新变动
- 更改了所有接口的code代码以及错误信息。
- 更改了音乐搜索返回数据的格式，提供更详细的数据。
- 更改了缓存策略。
- 增加了多种cookie轮询算法（负载均衡算法）。
- 提供在线获取QQ音乐cookie功能，也可提供给我们。（待加入）
- 使用接口限流，防止接口被封。

## 系统特性
- 使用webman+swoole实现接口协程。
- 使用swoole的redis，mysql等连接池。
- 使用GlobalData组件，实现进程间数据共享。
- 使用Channel分布式通讯组件，实现进程间通讯。
- 使用crontab组件，实现定时任务功能。
- 使用自研框架（仿springboot）。
- 使用自动化部署方案。
