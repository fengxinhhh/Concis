import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';

export default defineConfig({
  title: 'Concis',
  favicon: 'https://concis.org.cn/images/concis-logo.png',
  logo: 'https://concis.org.cn/images/concis-logo.png',
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
  navs: {
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'Github',
        path: 'https://github.com/fengxinhhh/Concis',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'Github',
        path: 'https://github.com/fengxinhhh/Concis',
      },
    ],
  },
  styles: [style],
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
  },
});
