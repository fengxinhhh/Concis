---
title: Lightweight component library
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
import { LazyLoad } from 'concis';
import './site/styles.less';
export default () => (
  <Section
    title="Experience the ultimate in Concis online"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}
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

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import { LazyLoad } from 'concis';
import './site/styles.less';

export default () => (
  <Section
    title="Thanks to all contributors"
    style={{ marginTop: 140, fontWeight: 'bold' }}
    scale={0.6}
  >
    <LazyLoad>
      <a
        href="https://github.com/fengxinhhh/concis/graphs/contributors"
        target="_blank"
        rel="noreferrer"
      >
        <img src="https://contrib.rocks/image?repo=fengxinhhh/concis" width={800} />
      </a>
    </LazyLoad>
  </Section>
);
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import { LazyLoad } from 'concis';
import './site/styles.less';

export default () => (
  <Section
    style={{ marginTop: 140, fontWeight: 'bold' }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <LazyLoad>
      <div>
        <span>Copyright © 2022-2022 Concis. All Rights Reserved. Concis 版权所有</span>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#1890ff' }}
        >
          苏ICP备2022018060号
        </a>
      </div>
    </LazyLoad>
  </Section>
);
```
