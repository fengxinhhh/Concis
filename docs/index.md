---
title: 轻量级组件库
full: true
gapless: true
---

<code src="./components/home-page.tsx" inline="true"></code>

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
      <img src="http://react-view-ui.com:92/images/index-demo.jpg" />
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
      <img src="http://react-view-ui.com:92/images/wechat.group.jpeg" style={{ width: '400px' }} />
    </a>
  </Section>
);
```
