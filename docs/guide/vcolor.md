---
order: 3
title: Color
toc: false
---

# Color

The Component library has a built-in set of color algorithms that conform to human vision.

## Introduce

A set of color algorithm based on dynamic gradient is built in the component library, and a set of color algorithm in dark mode is obtained through inversion and fine- tuning based on the color algorithm of bright color.

The color palette contains 13 common colors, and each color is divided into 10 gradients. Usually, we use color 6 as the main color in the color palette.

You can directly use these less color variables in the project under the installation environment of less.

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

## Use color library

If you need to use the built-in color values ​​of the component library, please include in your react project entry less file (App.less):

```css pure
@import 'concis/web-react/style/compiled-colors.less';
```

This makes it possible to use these color variables directly in the project, like:

```less pure
.App {
  background: @red-1;
}
```

You can also pick out some favorite colors based on the Concis color library and encapsulate them in your own projects, like this:

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
