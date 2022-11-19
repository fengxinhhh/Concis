import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['http://concis.org.cn/images/concis-logo.png'],
  outputPath: 'docs-dist',
  // mode: 'site',
  // apiParser: {
  // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
  // propFilter: {
  //   // 是否忽略从 node_modules 继承的属性，默认值为 false
  //   skipNodeModules: true,
  //   // 需要忽略的属性名列表，默认为空数组
  //   skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
  //   // 是否忽略没有文档说明的属性，默认值为 false
  //   skipPropsWithoutDoc: true,
  // },
  // },
  history: {
    type: 'hash',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      // { type: 'component', dir: 'src' }, // 默认值
      // 追加一个组件资产的解析目录
      { type: 'component', dir: '/packages/concis-react/src' },
    ],
    codeBlockMode: 'passive',
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  themeConfig: {
    name: 'Concis',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
    logo: 'http://concis.org.cn/images/concis-logo.png',
    nav: [
      // {
      //   title: '作者',
      //   children: [
      //     {
      //       title: 'CSDN',
      //       link: 'https://blog.csdn.net/m0_46995864?spm=1019.2139.3001.5343',
      //     },
      //     {
      //       title: '掘金',
      //       link: 'https://juejin.cn/user/3061476130044487',
      //     },
      //   ],
      // },
      {
        title: 'Guide',
        link: '/guide',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/fengxinhhh/Concis',
      },
    ],
  },
});
