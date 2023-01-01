---
order: 1
title: Quick start
---

# Quick start

Concis is committed to providing programmers with a pleasant development experience.

:::warning{title=Warning}
Before starting, it is recommended to learn React.
:::

## First example

This is an online code sandbox demonstration of the simplest Concis component.

```tsx | demo
/**
 * inline: true
 */
import React from 'react';

import { Section } from './site/Section';

import './site/styles.less';

export default () => (
  <Section titleStyle={{ paddingBottom: 100, fontWeight: `bold` }}>
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
      allow="accelerometer; ambient- light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow- forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```

## Explore more component usage

You can view the component list in the left menu of the component page, such as <a href="https://concis.org.cn/#/common/button">Button</a> component. Various demos are provided in the component document, and the component API document is available at the bottom. Find the first example in the code demo section, and click the icon in the lower right corner to expand the code.

Then modify the index in the previous codesandbox according to the writing method of the demo code Js, first introduce other components in import.

## Multi module support

Concis provides three types of modular files in the packaging product: `ejs`、`cjs`、`umd`. The default is `umd` module files. If you want to use components of other modules, you can use the following:

Use the cjs module:

```tsx
import React from 'react';
import { Button } from 'concis/web-react/cjs';
```

Use the ejs module:

```tsx
import React from 'react';
import { Button } from 'concis/web-react/es';
```

## Built in type prompt

Concis is written in `TypeScript`, and the types of each component are exposed. During the process of writing Concis components, you can get prompts through the floating component tag, as follows:

<img src="https://concis.org.cn/images/ts-alias.jpg" />
