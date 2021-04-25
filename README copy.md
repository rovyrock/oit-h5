# taro H5 project
这是基于taro的移动端页面，组件库使用Tea-mobile-components
[taro 文档](https://nervjs.github.io/taro/docs/README)

## 分辨率设置
在config/index.js 里面可以设置
Tea要求使用375来设计的，需要设置
designWidth: 375,

## 路由设置
一般在app.config.ts里的pages数组中，设置路由，第一个是默认打开的地址

## 依赖
项目依赖taro-cli，
首先，需要使用 npm 或者 yarn 全局安装 @tarojs/cli

```bash
npm install -g @tarojs/cli
# OR
yarn global add @tarojs/cli

```
然后，进入工程，安装项目依赖

```bash
yarn
# OR 
npm install
```

## 启动

```bash
# 表示启动H5
$ yarn dev:h5
```
