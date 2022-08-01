---
title: 轻量级组件库
hero:
  title: Concis
  desc: 一套易用的轻量级的React UI 组件库
  actions:
    - text: 查看文档
      link: /guide/introduce
    - text: 快速开始
      link: /common/button
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 简单易用，降低使用者的代码量
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 为组件化开发而生
    desc: 结合MVVM组件化开发思想
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 多端支持
    desc: 支持React / React Native
  - icon: https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg
    title: TypeScript
    desc: 使用 TypeScript 开发，提供完整的类型定义文件
  - icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr
    title: 预设行为
    desc: 更少的代码，更少的 Bug
  - icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr
    title: 简单易用
    desc: 在 Ant Design 上进行了自己的封装，更加易用
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [Xin Feng](https://github.com/fengxinhhh/Concis)
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';
export default () => (
  <Section
    title="在线体验Concis的极致性"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}
  >
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    title="懒人写法，超高性能"
    style={{ marginTop: 140, fontWeight: 'bold' }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <a href="http://concis.org.cn/#/common/button" target="_blank" rel="noreferrer">
      <img src="http://react-view-ui.com:92/images/index.demo.jpg" />
    </a>
  </Section>
);
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    title="答疑报错，请联系我"
    style={{ marginTop: 140, fontWeight: 'bold' }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <a href="http://concis.org.cn/#/common/button" target="_blank" rel="noreferrer">
      <img src="http://react-view-ui.com:92/images/wechat-group.jpeg" style={{ width: '400px' }} />
    </a>
  </Section>
);
```
