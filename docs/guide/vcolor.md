---
nav:
  title: 设计
  path: /guide
---

# 色彩

组件库内置了一套符合人眼视觉的色彩算法。

## 介绍

组件库内置了一套基于动态梯度的色彩算法，并且在亮色的色彩算法基础上，经过反转和微调，得到了一套暗黑模式下的色彩算法。

色板中包含了 13 个常见的颜色，每个颜色分为 10 个梯度。通常，我们把 6 号色作为色板中的主色。

你可以在安装 less 的环境下直接在项目中使用这些 less 色彩变量。

```tsx
/**
 * inline: true
 */
import React from 'react';
import Color from './demos/Color/Color.tsx';
import './demos/Color/color.less';

const allColorList = [
  {
    title: 'Red / 浪漫红',
    theme: 'red',
    colorList: [
      '#ffece8',
      '#fdcdc5',
      '#fbaca3',
      '#f98981',
      '#f76560',
      '#f53f3f',
      '#cb272d',
      '#a1151e',
      '#770813',
      '#4d000a',
    ],
  },
  {
    title: 'Orange Red / 晚秋红',
    theme: 'orangered',
    colorList: [
      '#fff3e8',
      '#fdddc3',
      '#fcc59f',
      '#faac7b',
      '#f99057',
      '#f77234',
      '#cb272d',
      '#a23511',
      '#771f06',
      '#4d0e00',
    ],
  },
  {
    title: 'Orange / 活力橙',
    theme: 'orange',
    colorList: [
      '#fff7e8',
      '#ffe4ba',
      '#ffcf8b',
      '#ffb65d',
      '#ff9a2e',
      '#ff7d00',
      '#d25f00',
      '#a64500',
      '#792e00',
      '#4d1b00',
    ],
  },
  {
    title: 'Gold / 黄昏',
    theme: 'gold',
    colorList: [
      '#fffce8',
      '#fdf4bf',
      '#fce996',
      '#fadc6d',
      '#f9cc45',
      '#f7ba1e',
      '#cc9213',
      '#a26d0a',
      '#774b04',
      '#4d2d00',
    ],
  },
  {
    title: 'Yellow / 柠檬黄',
    theme: 'yellow',
    colorList: [
      '#feffe8',
      '#fefebe',
      '#fdfa94',
      '#fcf26b',
      '#fbe842',
      '#fadc19',
      '#cfaf0f',
      '#a38408',
      '#785d03',
      '#4d3800',
    ],
  },
  {
    title: 'Lime / 新生绿',
    theme: 'lime',
    colorList: [
      '#fcffe8',
      '#edf8bb',
      '#dcf190',
      '#c9e968',
      '#b5e241',
      '#9fdb1d',
      '#7eb712',
      '#5f940a',
      '#437004',
      '#2a4d00',
    ],
  },
  {
    title: 'Green / 仙野绿',
    theme: 'green',
    colorList: [
      '#e8ffea',
      '#aff0b5',
      '#7be188',
      '#4cd263',
      '#23c343',
      '#00b42a',
      '#009a29',
      '#008026',
      '#006622',
      '#004d1c',
    ],
  },
  {
    title: 'Cyan / 碧涛青',
    theme: 'cyan',
    colorList: [
      '#e8fffb',
      '#b7f4ec',
      '#89e9e0',
      '#5edfd6',
      '#37d4cf',
      '#14c9c9',
      '#0da5aa',
      '#07828b',
      '#03616c',
      '#00424d',
    ],
  },
  {
    title: 'Blue / 海蔚蓝',
    theme: 'cyan',
    colorList: [
      '#e8f7ff',
      '#c3e7fe',
      '#9fd4fd',
      '#7bc0fc',
      '#57a9fb',
      '#3491fa',
      '#206ccf',
      '#114ba3',
      '#063078',
      '#001a4d',
    ],
  },
  {
    title: 'Concis Blue / 极致蓝',
    theme: 'concisblue',
    colorList: [
      '#e8f3ff',
      '#bedaff',
      '#94bfff',
      '#6aa1ff',
      '#4080ff',
      '#165dff',
      '#0e42d2',
      '#072ca6',
      '#031a79',
      '#000d4d',
    ],
  },
  {
    title: 'Purple / 暗夜紫',
    theme: 'purple',
    colorList: [
      '#f5e8ff',
      '#ddbef6',
      '#c396ed',
      '#a871e3',
      '#8d4eda',
      '#722ed1',
      '#551db0',
      '#3c108f',
      '#27066e',
      '#16004d',
    ],
  },
  {
    title: 'Pink Purple / 青春紫',
    theme: 'pinkpurple',
    colorList: [
      '#ffe8fb',
      '#f7baef',
      '#f08ee6',
      '#e865df',
      '#e13edb',
      '#d91ad9',
      '#b010b6',
      '#8a0993',
      '#650370',
      '#42004d',
    ],
  },
  {
    title: 'Magenta / 品红',
    theme: 'magenta',
    colorList: [
      '#ffe8f1',
      '#fdc2db',
      '#fb9dc7',
      '#f979b7',
      '#f754a8',
      '#f5319d',
      '#cb1e83',
      '#a11069',
      '#77064f',
      '#4d0034',
    ],
  },
  {
    title: 'Gray / 中性灰',
    theme: 'gray',
    colorList: [
      '#f7f8fa',
      '#f2f3f5',
      '#e5e6eb',
      '#c9cdd4',
      '#a9aeb8',
      '#86909c',
      '#6b7785',
      '#4e5969',
      '#272e3b',
      '#1d2129',
    ],
  },
];

export default () => (
  <div className="color-row">
    {allColorList.map(({ title, theme, colorList }) => {
      return <Color title={title} theme={theme} colorList={colorList} />;
    })}
  </div>
);
```

## 使用色彩库

如果需要使用组件库内置的色彩值，请在你的 react 项目入口 less 文件中（App.less）引入:

```css pure
@import 'concis/web-react/style/compiled-colors.less';
```

这样就可以在项目中直接使用这些色彩变量，如:

```less pure
.App {
  background: @red-1;
}
```

你也可以基于 Concis 色彩库挑选出一些喜欢的颜色封装在自己的项目中，就像这样:

```less pure
@import 'concis/web-react/style/compiled-colors.less';

@primary: @cyan-5;
@danger: @red-7;
@warning: @gold-6;
@success: @green-6;
@dark: @gray-6;

.App {
  background: @primary;
}
```
