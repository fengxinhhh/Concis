---
order: 5
title: Custom class name
---

# Custom class name

In the global configuration, you can define a wildcard class name and mount it on all Concis Component. In this class name, you can choose some non-sensitive CSS styles for all processing, such as font type.

<img src="https://concis.org.cn/images/className.jpg" />

The configuration method is very simple. Also, in <a href="https://concis.org.cn/#/common/global-config">GlobalConfig</a> component provides the prefixCls attribute, which can be configured globally, as follows:

```tsx pure

import { GlobalConfig } from `concis/web- react`;

// ...

export default () => (

<GlobalConfig globalColor="orange" prefixCls="my- className">

<App />

</GlobalConfig>

);

```

Worried about polluting the class name of Concis? All components of Concis start with concis-, which is usually avoided.

## Attention

If the style does not take effect in the custom class name, try the following:

- Join! Important increases the style priority;

- Overwrite the built-in style of the Concis component through the custom class name, as follows:

```css pure
.my- className .select {
  padding: 0 10px !important;
}
```

This will override the default Select padding style of Concis

```css pure
.concis- select .select {
  padding: 0 5px;
}
```

To sum up, if you need to customize the class name, please pay attention to the element level priority in the review element if the style does not take effect.

## Double class name

In addition to the class name configured by GlobalConfig, you also choose the method of customizing the class name of a single component. Each component of Concis supports customization by passing in the className separately, as follows:

```
<Button className="my- button-className" type="primary">
  Hello Concis
</Button>
```

Generally, our suggestion is to configure some very useful properties through the global class name, which will also reduce large conflicts.
