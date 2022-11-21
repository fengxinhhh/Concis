---
title: Concis - 轻量级组件库
hero:
  title: Concis
  description: A high-performance, lightweight UI library for quickly building React applications
  actions:
    - text: Start
      link: /guide/introducezh-CN
    - text: Components
      link: /components/buttonzh-CN
---

<code src="./components/home-page.tsx" inline="true"></code>

```tsx | demo
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import { LazyLoad } from 'concis';
import './site/styles.less';
export default () => (
  <Section
    title="Experience the ultimate in Concis online"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold', fontSize: 50, textAlign: 'center' }}
  >
    <LazyLoad>
      <iframe
        className="codesandbox"
        src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </LazyLoad>
  </Section>
);
```

```tsx | demo
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import { LazyLoad } from 'concis';
import './site/styles.less';

export default () => (
  <Section
    title="Thanks to all contributors~"
    style={{ marginTop: 140 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold', fontSize: 50, textAlign: 'center' }}
  >
    <a
      href="https://github.com/fengxinhhh/concis/graphs/contributors"
      target="_blank"
      rel="noreferrer"
    >
      <img src="https://contrib.rocks/image?repo=fengxinhhh/concis" width={800} />
    </a>
  </Section>
);
```
