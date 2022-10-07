---
nav:
  title: 设计
  path: /guide
---

# 自定义类名

在全局配置中，你可以定义一个通配类名，挂载到所有 Concis 组件上，在此类名你可以选择一些非敏感类 CSS 样式进行全部处理，如字体类型。

<img src="http://concis.org.cn/images/className.jpg" />

配置方法很简单，同样在 <a href="http://concis.org.cn/#/zh-CN/common/global-config">GlobalConfig</a> 组件中提供了 prefixCls 属性，全局配置即可，就像这样：

```tsx pure
import { GlobalConfig } from 'concis/web-react';

// ...

export default () => (
  <GlobalConfig globalColor="orange" prefixCls="my-className">
    <App />
  </GlobalConfig>
);
```

担心会污染到 Concis 的类名？Concis 所有组件均以 concis-开头，通常情况下都会规避此类情况。

## 注意

如果在自定义类名中样式不生效，请尝试如下办法：

- 加入!important 提升样式优先级;

- 通过自定义类名覆盖 Concis 组件的内置样式，就像下面这样：

```css pure
.my-className .select {
  padding: 0 10px !important;
}
```

这样就会替代 Concis 默认的 Select padding 样式

```css pure
.concis-select .select {
  padding: 0 5px;
}
```

总而言之，如果需要自定义类名，如发现样式不生效，请注意审查元素中的元素层级优先级。

## 双重类名

除了 GlobalConfig 配置的类名以外，你同样选择单组件类名自定义的方式，Concis 每一个组件都支持单独传入 className 来进行自定义，就像这样：

```tsx pure
<Button className="my-button-className" type="primary">
  Hello Concis
</Button>
```

通常我们的建议是通过全局类名进行一些非常用属性的配置，这样也会减少很大的冲突。
