import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';

export default defineConfig({
  title: 'Concis',
  favicon: 'http://react-view-ui.com:92/images/logo.png',
  logo: 'http://react-view-ui.com:92/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  history: {
    type: 'hash',
  },
  navs: [
    null,
    {
      title: '作者',
      children: [
        {
          title: 'CSDN',
          path: 'https://blog.csdn.net/m0_46995864?spm=1019.2139.3001.5343',
        },
        {
          title: '掘金',
          path: 'https://juejin.cn/user/3061476130044487',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/fengxinhhh/Concis',
    },
  ],
  styles: [style],
});
