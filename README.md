# Starry 知识库

基于 VitePress 构建的个人知识库网站，用于存放长篇教程和技术知识沉淀。

## 简介

这是一个个人知识库项目，不限定知识领域 —— 无论是编程技术、工具教程、学习笔记还是其他知识体系，都会在这里以结构化方式整理呈现。

## 技术栈

- [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- Vue 3
- TypeScript

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm docs:dev
```

启动本地开发服务器（默认地址 `http://localhost:5173`）。

### 构建生产版本

```bash
pnpm docs:build
```

构建静态文件到 `docs/.vitepress/dist` 目录。

### 预览生产版本

```bash
pnpm docs:preview
```

在本地预览构建后的站点。

## 作者

👤 **StarryCognet**

- 邮箱: [starrycognet@qq.com](mailto:starrycognet@qq.com)
- 博客: [starrymiku.com](https://starrymiku.com)

## 许可证

MIT

```
starry-docs
├─ docs
│  ├─ .vitepress
│  │  ├─ cache
│  │  │  └─ deps
│  │  │     ├─ chunk-BECINA54.js
│  │  │     ├─ chunk-BECINA54.js.map
│  │  │     ├─ chunk-BUSYA2B4.js
│  │  │     ├─ chunk-BUSYA2B4.js.map
│  │  │     ├─ giscus-aTimukGI-VEMCOKMY.js
│  │  │     ├─ giscus-aTimukGI-VEMCOKMY.js.map
│  │  │     ├─ medium-zoom.js
│  │  │     ├─ medium-zoom.js.map
│  │  │     ├─ nprogress-v2_dist_index__js.js
│  │  │     ├─ nprogress-v2_dist_index__js.js.map
│  │  │     ├─ package.json
│  │  │     ├─ vitepress-plugin-comment-with-giscus.js
│  │  │     ├─ vitepress-plugin-comment-with-giscus.js.map
│  │  │     ├─ vitepress___@vueuse_core.js
│  │  │     ├─ vitepress___@vueuse_core.js.map
│  │  │     ├─ vitepress___@vue_devtools-api.js
│  │  │     ├─ vitepress___@vue_devtools-api.js.map
│  │  │     ├─ vue.js
│  │  │     ├─ vue.js.map
│  │  │     └─ _metadata.json
│  │  ├─ config.mts
│  │  └─ theme
│  │     ├─ components
│  │     │  ├─ ArticleMetadata.vue
│  │     │  ├─ backtotop.vue
│  │     │  ├─ Busuanzi.vue
│  │     │  ├─ MouseClick.vue
│  │     │  ├─ MouseFollower.vue
│  │     │  └─ notice.vue
│  │     ├─ index.ts
│  │     ├─ Layout.vue
│  │     ├─ style
│  │     │  ├─ blur.css
│  │     │  ├─ hidden.css
│  │     │  ├─ index.css
│  │     │  ├─ rainbow.css
│  │     │  └─ var.css
│  │     ├─ untils
│  │     │  └─ functions.ts
│  │     └─ utils
│  ├─ index.md
│  ├─ public
│  │  ├─ apple-touch-icon.png
│  │  ├─ baidu_verify_codeva-vzfHzHbtqr.html
│  │  ├─ BingSiteAuth.xml
│  │  ├─ favicon-96x96.png
│  │  ├─ favicon.ico
│  │  ├─ favicon.svg
│  │  ├─ google2f6f4d3e2d79deb4.html
│  │  ├─ KawaiiMu.jpg
│  │  ├─ KawaiiMu.png
│  │  ├─ logo.png
│  │  ├─ logo1.png
│  │  ├─ muzimi.png
│  │  ├─ site.webmanifest
│  │  ├─ web-app-manifest-192x192.png
│  │  └─ web-app-manifest-512x512.png
│  └─ tuba-deep-learning
│     ├─ index.md
│     ├─ Phase-0-小白启蒙
│     │  ├─ 01-计算机是怎么工作的.md
│     │  ├─ 02-编程语言是什么，为什么这么多.md
│     │  ├─ 03-什么是CSharp什么是NET.md
│     │  └─ 04-装好开发环境跑起TubaTools.md
│     ├─ Phase-1-CSharp编程基础
│     │  ├─ 05-第一个CSharp程序.md
│     │  ├─ 06-变量与数据类型.md
│     │  ├─ 07-运算符与表达式.md
│     │  ├─ 08-条件判断.md
│     │  ├─ 09-循环.md
│     │  ├─ 10-方法.md
│     │  ├─ 11-数组与集合.md
│     │  └─ 12-异常处理.md
│     ├─ Phase-2-面向对象编程
│     │  ├─ 13-面向对象是什么.md
│     │  ├─ 14-类与对象.md
│     │  ├─ 15-构造函数与初始化.md
│     │  ├─ 16-接口与继承.md
│     │  └─ 17-静态类与静态方法.md
│     ├─ Phase-3-NET与Windows基础
│     │  ├─ 18-命名空间与using.md
│     │  ├─ 19-async-await异步编程.md
│     │  ├─ 20-文件与路径操作.md
│     │  └─ 21-NuGet包管理器.md
│     ├─ Phase-4-XAML与UI入门
│     │  ├─ 22-XAML是什么.md
│     │  ├─ 23-布局控件.md
│     │  ├─ 24-常用UI控件.md
│     │  ├─ 25-数据绑定Binding.md
│     │  └─ 26-值转换器Converter.md
│     ├─ Phase-5-WinUI3核心框架
│     │  ├─ 27-WinUI3概述.md
│     │  ├─ 28-页面导航.md
│     │  ├─ 29-资源字典与样式.md
│     │  ├─ 30-窗口管理.md
│     │  └─ 31-弹窗与对话框.md
│     ├─ Phase-6-源码解剖
│     │  ├─ 32-App.xaml.cs启动流程.md
│     │  ├─ 33-MainWindow导航搜索.md
│     │  ├─ 34-ToolCatalog工具扫描.md
│     │  ├─ 35-HardwareInfoService.md
│     │  └─ 36-HomePage工具网格.md
│     ├─ Phase-7-动手实践
│     │  ├─ 37-加一个内置工具.md
│     │  ├─ 38-加外部工具与元数据.md
│     │  ├─ 39-改界面样式.md
│     │  └─ 40-改设置选项.md
│     └─ Phase-8-构建发布
│        ├─ 41-编译与多平台.md
│        └─ 42-打包与安装.md
├─ package.json
├─ pnpm-lock.yaml
└─ README.md

```