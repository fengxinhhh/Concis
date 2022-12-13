---
order: 7
title: 在 Vite 中使用
---

# 在 Vite 中使用

你可以使用 vite 快速搭建一个 react 项目，安装完预设包，如 react、react-dom。

```bash
npm run create vite
```

然后选择`react-ts`模板，项目安装预设依赖。

## 安装

通过命令安装 Concis：

```bash
npm i --save-dev concis
```

## 引入和使用

```tsx pure
import { Button } from 'concis';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);
```

修改 src/App.css，在文件顶部引入 `concis/web-react/style/index.css`。

```bash
@import 'concis/web-react/style/index.css';
```

好了，现在你应该能看到页面上已经有了 `Concis` 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 `vite` 的官方文档。

我们现在已经把 `Concis` 组件成功运行起来了，开始开发你的应用吧！
