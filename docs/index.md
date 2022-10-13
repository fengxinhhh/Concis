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
import './site/styles.less';
export default () => (
  <Section
    title="Experience the ultimate in Concis online"
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
    title="Questions and errors, please contact me"
    style={{ marginTop: 140, fontWeight: 'bold' }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <a href="http://concis.org.cn/#/common/button" target="_blank" rel="noreferrer">
      <img src="http://concis.org.cn/images/wechat-self.jpg" style={{ width: '400px' }} />
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
    title="Thanks to all contributors"
    style={{ marginTop: 140, fontWeight: 'bold' }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <a href="http://concis.org.cn/#/common/button" target="_blank" rel="noreferrer">
      <img src="https://camo.githubusercontent.com/5ce8190e7e8e30339db94821680e237d1437491b835077d0069efec85fea06f4/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d66656e6778696e6868682f636f6e636973" style={{ width: '800px' }} />
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
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer"
        style={{ color: '#1890ff' }}
      >
        苏ICP备2022018060号
      </a>
    </div>
  </Section>
);
```
