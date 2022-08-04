<div align="center">
  <a href="http://concis.org.cn/#/" target="_blank">
    <img alt="Arco Design Logo" width="200" src="http://concis.org.cn/images/concis-logo.png"/>
  </a>
</div>
<div align="center">
  <h1>Concis</h1>
</div>

<div align="center">

一套轻量的 React UI 组件库。

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

<div align="center">
  <img src="http://concis.org.cn/images/index.bg.jpeg" width="1200" />
</div>

# 特征

## 全面

拥有 40 多种开箱即用的高质量组件，可以覆盖绝大部分业务场景。

## 主题配置

海量色彩，支持全局引入使用：

- [色彩系统-内置主题色](http://concis.org.cn/#/guide/xcolor)

## 基于 TypeScript

所有组件都是用 TypeScript 编写的，所以天然的类型友好。

# 安装

[npm package](https://www.npmjs.com/package/@arco-design/web-react)

```bash
// with npm
npm install concis@latest

// with yarn
yarn add concis@latest
```

# 例子

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'concis/web-react';
import 'concis/web-react/style/index.css';

function App() {
  return <Button type="primary">Hello Concis!</Button>;
}

ReactDOM.render(<App />, document.getElementById('app'));
```

# 相关链接

- [官网](http://concis.org.cn/#/)
- [组件文档](http://concis.org.cn/#/common/button)
- [指南介绍](http://concis.org.cn/#/guide/introduce)
- [快速上手](http://concis.org.cn/#/guide/teuse)

# Browser Support

| [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/08095282566ac4e0fd98f89aed934b65.png~tplv-uwbnlip3yd-png.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/40ad73571879dd8d9fd3fd524e0e45a4.png~tplv-uwbnlip3yd-png.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/4f59d35f6d6837b042c8badd95871b1d.png~tplv-uwbnlip3yd-png.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/eee2667f837a9c2ed531805850bf43ec.png~tplv-uwbnlip3yd-png.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3240334d3967dd263c8f4cdd2d93c525.png~tplv-uwbnlip3yd-png.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f2454685df95a1a557a61861c5bec256.png~tplv-uwbnlip3yd-png.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge 16 | 31 | 49 | 31 | 36 | last 2 versions |
