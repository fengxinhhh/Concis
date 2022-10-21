<div align="center">
  <a href="https://concis.org.cn/#/" target="_blank">
    <img alt="Concis Logo" width="200" src="https://concis.org.cn/images/concis-logo.png"/>
  </a>
</div>
<div align="center">
  <h1>Concis</h1>
</div>

<div align="center">

一套轻量级 React UI 组件库。

<img src="https://img.shields.io/github/stars/fengxinhhh/concis" alt="stars">
<img src="https://img.shields.io/badge/react-v18.2.0%2B-%23407fbc" alt="react">
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="licence">
<img src="https://github.com/fengxinhhh/concis/workflows/CI/badge.svg" alt="ci">

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

<div align="center">
  <img src="https://concis.org.cn/images/index-bg.jpg" width="1200" />
</div>

# 特征

## 全面

拥有 50 多种开箱即用的高质量组件，可以覆盖绝大部分业务场景。

## 主题配置

海量色彩，支持全局引入使用：

- [色彩系统-内置主题色](https://concis.org.cn/#/guide/xcolor)
- [暗黑模式&主题色双支持](https://concis.org.cn/#/guide/udark)

## 基于 TypeScript

所有组件都是用 TypeScript 编写的，所以天然的类型友好。

# 安装

[npm package](https://www.npmjs.com/package/concis)

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
import { Button } from 'concis';
import 'concis/web-react/style/index.css';

function App() {
  return <Button type="primary">Hello Concis!</Button>;
}

ReactDOM.render(<App />, document.getElementById('app'));
```

# 本地体验

在 examples 文件夹中，有一个 `vite` + `react` 的工程运行环境，你可以在该环境中体验 `concis` 组件，在项目根目录运行命令:

```tsx pure
pnpm examples:dev
```

访问`http://localhost:5173`。

<img src="https://concis.org.cn/images/example-demo.jpg" />

# 相关链接

- [官网](https://concis.org.cn/#/)
- [组件文档](https://concis.org.cn/#/common/button)
- [指南介绍](https://concis.org.cn/#/guide/introduce)
- [快速上手](https://concis.org.cn/#/guide/teuse)

# 浏览器支持

| [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/08095282566ac4e0fd98f89aed934b65.png~tplv-uwbnlip3yd-png.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/40ad73571879dd8d9fd3fd524e0e45a4.png~tplv-uwbnlip3yd-png.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/4f59d35f6d6837b042c8badd95871b1d.png~tplv-uwbnlip3yd-png.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/eee2667f837a9c2ed531805850bf43ec.png~tplv-uwbnlip3yd-png.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3240334d3967dd263c8f4cdd2d93c525.png~tplv-uwbnlip3yd-png.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f2454685df95a1a557a61861c5bec256.png~tplv-uwbnlip3yd-png.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge 16 | 31 | 49 | 31 | 36 | last 2 versions |

# 参与贡献

贡献之前请先阅读[贡献指南](https://concis.org.cn/#/guide/zcontribute)。

感谢所有为 Concis 做过贡献的人!

<a href="https://github.com/fengxinhhh/concis/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fengxinhhh/concis" />
</a>
