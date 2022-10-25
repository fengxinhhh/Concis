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
  <Section title="感谢所有贡献者" style={{ marginTop: 140, fontWeight: 'bold' }} scale={0.6}>
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

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    style={{ marginTop: 140, fontWeight: 'bold' }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <div>
      <span>Copyright © 2022-2022 Concis. All Rights Reserved. Concis 版权所有</span>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
        苏ICP备2022018060号
      </a>
    </div>
  </Section>
);
```
