---
title: GlobalConfig
nav:
  title: Component
  path: /common
group:
  title: Other
mobile: false
---

# GlobalConfig

Provides unified global configuration for components.

## Using

GlobalConfig uses the context feature of React, which only needs to be wrapped around the application once to take effect globally.

```tsx pure
import { GlobalConfig } from 'concis/web-react';

// ...

export default () => (
  <GlobalConfig globalColor="orange">
    <App />
  </GlobalConfig>
);
```

## Custom Theme

All components of Concis that support theme color customization are listed here. You can switch theme colors in the demo.

<code src="./demos/index1.tsx"/>

## Dark Mode

Turn on dark mode through darkTheme, and add dark style to all Concis.

Based on the use of dark mode, Concis does not recommend using a custom theme at the same time, although it is also compatible.

<code src="./demos/index2.tsx"/>

We recommend using the project background color and font color provided by Concis. The configuration is as follows:

```css pure
@import 'concis/web-react/style/compiled-colors.less';

@import 'concis/web-react/style/index.css';

.App {
  color: @dark- theme-text-color;

  background: @dark- theme-background;
}
```

For priority, the priority of custom theme color will be higher than that of dark theme color. Of course, you can customize some business styles you need deeply through global className and component local className.

<API />
