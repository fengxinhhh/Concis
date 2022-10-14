---
nav:
  title: Guide
  path: /guide
mobile: false
---

# Dark mode

## Introduce

Concis built in provides the theme of dark mode. The advantage of dark mode is that it has higher readability in low light environment.

<code src="../../packages/concis-react/src/GlobalConfig/demos/index2.tsx" />

## Cases

Based on the default theme and dark theme of Concis Family Bucket.

<img src="http://concis.org.cn/images/concis-light-template.jpg" />

<img src="http://concis.org.cn/images/concis-dark-template.jpg" />

## Using

Through the `GlobalConfig` component, the `darkTheme` attribute can be configured to take effect.

```tsx pure

import React from "react';

import ReactDOM from 'react-dom/client';

import App from './App';

import { GlobalConfig } from 'concis';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<React.StrictMode>

<GlobalConfig darkTheme>

<App />

</GlobalConfig>

</React.StrictMode>,

);

```

## Inject recommended style

The project background color and font color recommended by the component library are recommended to better adapt to the Concis dark mode.

```css pure
@import `concis/web-react/style/compiled-colors.less`;

@import `concis/web-react/style/index.css`;

.App {
  color: @dark-theme-text-color;

  background: @dark-theme-background;
}
```

More global configurations can be found at <a href="http://concis.org.cn/#/common/global-config">GlobalConfig</a>.
