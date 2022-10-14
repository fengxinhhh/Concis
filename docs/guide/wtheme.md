---
nav:
  title: Guide
  path: /guide
mobile: false
---

# Custom themes

Concis design specifications and technology support flexible style customization to meet the diverse visual needs of business and branding, and support the configuration of global theme colors.

<code src="../../packages/concis-react/src/GlobalConfig/demos/index1.tsx" />

## Color variables provided by Concis

The style of Concis uses Less as the development language, and defines a series of global/component style variables, which you can adjust according to your needs.

You can learn how to use and configure Concis's built-in less variables in <a href="http://concis.org.cn/#/guide/vcolor">Colors</a>.

If you have suggested built- in less variables (not limited to color variables), you can <a href="https://github.com/fengxinhhh/Concis">https://github.com/fengxinhhh/Concis</a> Issue.

## Customization method

GlobalConfig uses the context feature of React, which only needs to be wrapped around the application once to take effect globally.

```tsx pure
import { GlobalConfig } from 'concis';

// ...

export default () => (
  <GlobalConfig globalColor="orange">
    <App />
  </GlobalConfig>
);
```

You can package the root components in React based on the installation and introduction of Concis. More theme customization APIs can be found in <a href="http://concis.org.cn/#/common/global-config">GlobalConfig component</a>.
