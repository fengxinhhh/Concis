import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';
import path from 'path';
import { version } from './packages/concis-react/package.json';

export default defineConfig({
  favicons: ['http://concis.org.cn/images/concis-logo.png'],
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  // hash: true,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: '/packages/concis-react/src' },
      { type: 'mobile', dir: '/packages/concis-react-mobile/src' },
    ],
    codeBlockMode: 'passive',
  },
  define: {
    concisVersion: version,
  },
  alias: {
    concis: path.join(__dirname, 'packages/concis-react/src'),
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: 'zh-CN' },
  ],
  themeConfig: {
    name: 'Concis',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
    rtl: true,
    logo: 'http://concis.org.cn/images/concis-logo.png',
    footer:
      'Copyright © 2022-2022 Concis. All Rights Reserved. Concis 版权所有. 苏ICP备2022018060号',
    nav: [
      {
        title: '指南',
        link: '/guide/introduce',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/fengxinhhh/Concis',
      },
    ],
  },
  styles: [style],
});
