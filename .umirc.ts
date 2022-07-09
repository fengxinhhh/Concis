import { defineConfig } from 'dumi';

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
      skipPropsWithoutDoc: false,
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
  styles: [
    `
        .__dumi-default-layout-hero{
          background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png);
          background-size: cover;
          background-repeat: no-repeat;
          padding: 120px 0 !important;
        }
        .__dumi-default-layout-hero h1{
          color:#45124e !important;
          font-size:80px !important;
          padding-bottom: 30px !important;
        }
        .__dumi-default-layout-features, .__dumi-default-layout-features + .__dumi-default-layout-content, .__dumi-default-layout-hero + .__dumi-default-layout-content{
          max-width: 1160px !important;
        }
        .__dumi-default-menu-inner::-webkit-scrollbar {
          width: 4px;    
          /*height: 4px;*/
      }
      .__dumi-default-menu-inner::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          background: rgba(0,0,0,0.2);
      }
      .__dumi-default-menu-inner::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          border-radius: 0;
          background: rgba(0,0,0,0.1);
      }
      .__dumi-default-menu-list li {
        font-size: 14px;
      }
    `,
  ],
});
