---
nav:
  title: 指南
  path: /guide
---

# 在 Create-react-app 中使用

你可以使用 create-react-app 或自建一个包管理工程目录，安装完预设包，如 react、react-dom。

```tsx pure
create-react-app myapp
```

或者是

```tsx pure
mkdir myapp && cd myapp
npm init -y
npm i --save-dev react react-dom
```

## 安装

通过命令安装 Concis：

```tsx pure
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

修改 src/App.css，在文件顶部引入`concis/web-react/style/index.css`。

```tsx pure
@import 'concis/web-react/style/index.css';
```

好了，现在你应该能看到页面上已经有了 `Concis` 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 `create-react-app` 的官方文档。

我们现在已经把 `Concis` 组件成功运行起来了，开始开发你的应用吧！
