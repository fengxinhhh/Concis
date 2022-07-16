---
nav:
  title: 指南
  path: /guide
---

# 贡献指南

这篇指南会指导你如何为 Concis 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。

## 项目介绍

如果你想贡献，但是无从下手，这里可以让你更快速的上手，将专注力集中在组件的编写上。

项目目前分为 PC 组件和 Mobile 组件，技术栈均为 React+TypeScript，在项目根目录-> packages 目录下，存放着主体业务。

- concis-react 中包含 PC 端的组件代码以及一些配置文件。

- concis-react-mobile 中包含 Mobile 端的组建代码以及一些配置文件(目前暂未开始)。

在项目中所有的组件目录下，你可以在每一个组件下的 demos 中编写组件的案例，如 Button 组件有 6 个案例，最后在组件目录下的 index.md 中自动生成组件页面。

更多可以直接参考项目中上线组件的编写方式。

## 开始编写

clone 完项目以后需安装项目依赖和 packages 下包的依赖，分别执行:

```tsx pure
yarn install            //项目依赖
lerna bootstrap         //包依赖
```

此时即可通过打开本地文档服务器

```tsx pure
yarn start
```

## 打包

打包方式分文档打包和 npm 打包:

```tsx pure
yarn docs:build        //文档打包，产物于docs-dist
```

在 packages/子包目录下执行:

```tsx pure
yarn build             //npm打包，产物于web-react/web-react/mobile
```

## 测试

在 packages/自包目录下执行对指定包的组件进行单元测试和 e2e 测试。

```tsx pure
yarn test:unit          //单元测试，对应/__tests__/unit
yarn test:e2e          //e2e测试，对应/__tests__/e2e
```

## 分支管理

请遵守常用分支指南，使用 feat、fix-bug、docs 等关键词，另开一个新的分支，并提交 pull request 至<a href="https://github.com/fengxinhhh/Concis">项目</a>的 master 分支中，每天傍晚都会对所有 pull request 进行审核。

## 建议和 Bug 修复

如果你有任何好的想法，如新增组件、样式修复、项目架构设计，都可以在<a href="https://github.com/fengxinhhh/Concis/issues">github issue</a>中报告，我们会在当天积极回复。

## 开发流程

当你 clone 了 Concis 的代码后并使用 npm install 安装完所有依赖后，你还可以运行如下几个常见的命令：

- npm start 在本地运行 Concis 网站。

- npm test:jest 运行测试。

- npm run buildNpm 打包 npm 包。

- npm run docs:build 打包网站 Web 包。
