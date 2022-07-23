// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/apple/Desktop/Concis/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/apple/Desktop/Concis/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/apple/Desktop/Concis/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/mobile/button",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react-mobile/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react-mobile/src/Button/index.md",
          "updatedTime": 1657646601000,
          "componentName": "Button",
          "title": "Button 按钮",
          "nav": {
            "title": "移动端",
            "path": "/mobile"
          },
          "group": {
            "title": "移动端",
            "__fallback": true,
            "path": "/mobile/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "不同尺寸",
              "heading": "不同尺寸"
            },
            {
              "depth": 2,
              "value": "字体按钮",
              "heading": "字体按钮"
            },
            {
              "depth": 2,
              "value": "禁用按钮",
              "heading": "禁用按钮"
            },
            {
              "depth": 2,
              "value": "虚线按钮",
              "heading": "虚线按钮"
            },
            {
              "depth": 2,
              "value": "加载状态",
              "heading": "加载状态"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button 按钮 - Concis"
      },
      {
        "path": "/common/affix",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Affix/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Affix/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Affix",
          "title": "Affix 固钉",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "导航",
            "__fallback": true,
            "path": "/common/affix"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Affix 固钉",
              "heading": "affix-固钉"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "滚动容器",
              "heading": "滚动容器"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Affix 固钉 - Concis"
      },
      {
        "path": "/common/avatar",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Avatar/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Avatar/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Avatar",
          "title": "Avatar 头像",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/avatar"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Avatar 头像",
              "heading": "avatar-头像"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "大小和形状",
              "heading": "大小和形状"
            },
            {
              "depth": 2,
              "value": "头像组",
              "heading": "头像组"
            },
            {
              "depth": 2,
              "value": "交互",
              "heading": "交互"
            },
            {
              "depth": 2,
              "value": "文本自适应",
              "heading": "文本自适应"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Avatar 头像 - Concis"
      },
      {
        "path": "/common/back-top",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/BackTop/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/BackTop/index.md",
          "updatedTime": 1657640436000,
          "componentName": "BackTop",
          "title": "BackTop 回到顶部",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "其他",
            "__fallback": true,
            "path": "/common/back-top"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "BackTop 回到顶部",
              "heading": "backtop-回到顶部"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            }
          ],
          "hasPreviewer": true
        },
        "title": "BackTop 回到顶部 - Concis"
      },
      {
        "path": "/common/badge",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Badge/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Badge/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Badge",
          "title": "Badge 徽标",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/badge"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Badge 徽标",
              "heading": "badge-徽标"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "独立使用",
              "heading": "独立使用"
            },
            {
              "depth": 2,
              "value": "小红点",
              "heading": "小红点"
            },
            {
              "depth": 2,
              "value": "文本内容",
              "heading": "文本内容"
            },
            {
              "depth": 2,
              "value": "最大值",
              "heading": "最大值"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Badge 徽标 - Concis"
      },
      {
        "path": "/common/button",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Button/index.md",
          "updatedTime": 1657901818000,
          "componentName": "Button",
          "title": "Button 按钮",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "通用",
            "__fallback": true,
            "path": "/common/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "不同尺寸",
              "heading": "不同尺寸"
            },
            {
              "depth": 2,
              "value": "字体按钮",
              "heading": "字体按钮"
            },
            {
              "depth": 2,
              "value": "禁用按钮",
              "heading": "禁用按钮"
            },
            {
              "depth": 2,
              "value": "虚线按钮",
              "heading": "虚线按钮"
            },
            {
              "depth": 2,
              "value": "加载状态",
              "heading": "加载状态"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button 按钮 - Concis"
      },
      {
        "path": "/common/check-box",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/CheckBox/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/CheckBox/index.md",
          "updatedTime": 1657640436000,
          "componentName": "CheckBox",
          "title": "CheckBox 多选框",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/check-box"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "CheckBox 多选框",
              "heading": "checkbox-多选框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "多选组",
              "heading": "多选组"
            },
            {
              "depth": 2,
              "value": "全选",
              "heading": "全选"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "CheckBox 多选框 - Concis"
      },
      {
        "path": "/common/collapse",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Collapse/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Collapse/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Collapse",
          "title": "Collapse 折叠面板",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/collapse"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Collapse 折叠面板",
              "heading": "collapse-折叠面板"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "手风琴",
              "heading": "手风琴"
            },
            {
              "depth": 2,
              "value": "无边框",
              "heading": "无边框"
            },
            {
              "depth": 2,
              "value": "右侧节点",
              "heading": "右侧节点"
            },
            {
              "depth": 2,
              "value": "展开图标位置",
              "heading": "展开图标位置"
            },
            {
              "depth": 2,
              "value": "懒加载",
              "heading": "懒加载"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Collapse 折叠面板 - Concis"
      },
      {
        "path": "/common/date-picker",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/DatePicker/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/DatePicker/index.md",
          "updatedTime": 1658398625000,
          "componentName": "DatePicker",
          "title": "DatePicker 日期选择器",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/date-picker"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "DatePicker 日期选择器",
              "heading": "datepicker-日期选择器"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "年份选择器",
              "heading": "年份选择器"
            },
            {
              "depth": 2,
              "value": "月份选择器",
              "heading": "月份选择器"
            },
            {
              "depth": 2,
              "value": "区间式日期选择器",
              "heading": "区间式日期选择器"
            },
            {
              "depth": 2,
              "value": "重置时间",
              "heading": "重置时间"
            },
            {
              "depth": 2,
              "value": "出现方向",
              "heading": "出现方向"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "DatePicker 日期选择器 - Concis"
      },
      {
        "path": "/common/divider",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Divider/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Divider/index.md",
          "updatedTime": 1658329060000,
          "componentName": "Divider",
          "title": "Divider 分割线",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "布局",
            "__fallback": true,
            "path": "/common/divider"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Divider 分割线",
              "heading": "divider-分割线"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "字体大小",
              "heading": "字体大小"
            },
            {
              "depth": 2,
              "value": "对齐方式",
              "heading": "对齐方式"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Divider 分割线 - Concis"
      },
      {
        "path": "/common/form",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Form/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Form/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Form",
          "title": "Form 表单",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/form"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Form 表单",
              "heading": "form-表单"
            },
            {
              "depth": 2,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "布局方式",
              "heading": "布局方式"
            },
            {
              "depth": 2,
              "value": "受控表单与异步校验",
              "heading": "受控表单与异步校验"
            },
            {
              "depth": 2,
              "value": "表单重置",
              "heading": "表单重置"
            },
            {
              "depth": 2,
              "value": "全局禁用",
              "heading": "全局禁用"
            },
            {
              "depth": 2,
              "value": "单行禁用",
              "heading": "单行禁用"
            },
            {
              "depth": 2,
              "value": "注册表单",
              "heading": "注册表单"
            },
            {
              "depth": 2,
              "value": "弹窗反馈",
              "heading": "弹窗反馈"
            },
            {
              "depth": 2,
              "value": "获取表单上下文",
              "heading": "获取表单上下文"
            },
            {
              "depth": 2,
              "value": "完整功能",
              "heading": "完整功能"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Form 表单 - Concis"
      },
      {
        "path": "/common/global-config",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/GlobalConfig/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/GlobalConfig/index.md",
          "updatedTime": 1658419034000,
          "componentName": "GlobalConfig",
          "title": "GlobalConfig 全局配置",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "其他",
            "__fallback": true,
            "path": "/common/global-config"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "GlobalConfig 全局配置",
              "heading": "globalconfig-全局配置"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "自定义主题",
              "heading": "自定义主题"
            },
            {
              "depth": 2,
              "value": "暗黑模式",
              "heading": "暗黑模式"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "GlobalConfig 全局配置 - Concis"
      },
      {
        "path": "/common/input",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Input/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Input",
          "title": "Input 输入框",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/input"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input 输入框",
              "heading": "input-输入框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "多场景适用",
              "heading": "多场景适用"
            },
            {
              "depth": 2,
              "value": "可清空",
              "heading": "可清空"
            },
            {
              "depth": 2,
              "value": "密码框",
              "heading": "密码框"
            },
            {
              "depth": 2,
              "value": "数字框",
              "heading": "数字框"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Input 输入框 - Concis"
      },
      {
        "path": "/common/layout",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Layout/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Layout/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Layout",
          "title": "Layout 快速布局",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "布局",
            "__fallback": true,
            "path": "/common/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Layout 快速布局",
              "heading": "layout-快速布局"
            },
            {
              "depth": 4,
              "value": "组件概述",
              "heading": "组件概述"
            },
            {
              "depth": 2,
              "value": "经典页面布局",
              "heading": "经典页面布局"
            },
            {
              "depth": 2,
              "value": "自定义样式",
              "heading": "自定义样式"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Layout 快速布局 - Concis"
      },
      {
        "path": "/common/lazy-load",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/LazyLoad/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/LazyLoad/index.md",
          "updatedTime": 1657640436000,
          "componentName": "LazyLoad",
          "title": "LazyLoad 懒加载",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "通用",
            "__fallback": true,
            "path": "/common/lazy-load"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "LazyLoad 懒加载",
              "heading": "lazyload-懒加载"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "LazyLoad 懒加载 - Concis"
      },
      {
        "path": "/common/list",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/List/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/List/index.md",
          "updatedTime": 1657640436000,
          "componentName": "List",
          "title": "List 列表",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/list"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "List 列表",
              "heading": "list-列表"
            },
            {
              "depth": 2,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "不同尺寸",
              "heading": "不同尺寸"
            },
            {
              "depth": 2,
              "value": "基础内容",
              "heading": "基础内容"
            },
            {
              "depth": 2,
              "value": "懒加载",
              "heading": "懒加载"
            },
            {
              "depth": 2,
              "value": "虚拟列表",
              "heading": "虚拟列表"
            }
          ],
          "hasPreviewer": true
        },
        "title": "List 列表 - Concis"
      },
      {
        "path": "/common/loading",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Loading/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Loading/index.md",
          "updatedTime": 1658050932000,
          "componentName": "Loading",
          "title": "Loading 加载中",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "反馈",
            "__fallback": true,
            "path": "/common/loading"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Loading 加载中",
              "heading": "loading-加载中"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "省略号加载",
              "heading": "省略号加载"
            },
            {
              "depth": 2,
              "value": "列表式加载",
              "heading": "列表式加载"
            },
            {
              "depth": 2,
              "value": "蒙层",
              "heading": "蒙层"
            },
            {
              "depth": 2,
              "value": "加载文字",
              "heading": "加载文字"
            },
            {
              "depth": 2,
              "value": "不同大小",
              "heading": "不同大小"
            },
            {
              "depth": 2,
              "value": "自定义图标",
              "heading": "自定义图标"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Loading 加载中 - Concis"
      },
      {
        "path": "/common/menu",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Menu/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Menu/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Menu",
          "title": "Menu 导航菜单",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "导航",
            "__fallback": true,
            "path": "/common/menu"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Menu 导航菜单",
              "heading": "menu-导航菜单"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "自定义宽度",
              "heading": "自定义宽度"
            },
            {
              "depth": 2,
              "value": "深色风格",
              "heading": "深色风格"
            },
            {
              "depth": 2,
              "value": "手风琴风格",
              "heading": "手风琴风格"
            },
            {
              "depth": 2,
              "value": "交互",
              "heading": "交互"
            },
            {
              "depth": 2,
              "value": "默认展开",
              "heading": "默认展开"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Menu 导航菜单 - Concis"
      },
      {
        "path": "/common/message",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Message/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Message/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Message",
          "title": "Message 全局提示",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "反馈",
            "__fallback": true,
            "path": "/common/message"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Message 全局提示",
              "heading": "message-全局提示"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "不同类型",
              "heading": "不同类型"
            },
            {
              "depth": 2,
              "value": "状态改变",
              "heading": "状态改变"
            },
            {
              "depth": 2,
              "value": "不同位置",
              "heading": "不同位置"
            },
            {
              "depth": 2,
              "value": "手动关闭",
              "heading": "手动关闭"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Message 全局提示 - Concis"
      },
      {
        "path": "/common/notification",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Notification/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Notification/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Notification",
          "title": "Notification 通知提醒框",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "反馈",
            "__fallback": true,
            "path": "/common/notification"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Notification 通知提醒框",
              "heading": "notification-通知提醒框"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "不同类型",
              "heading": "不同类型"
            },
            {
              "depth": 2,
              "value": "状态切换",
              "heading": "状态切换"
            },
            {
              "depth": 2,
              "value": "通知提醒位置",
              "heading": "通知提醒位置"
            },
            {
              "depth": 2,
              "value": "自定义操作按钮",
              "heading": "自定义操作按钮"
            },
            {
              "depth": 2,
              "value": "自定义样式",
              "heading": "自定义样式"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Notification 通知提醒框 - Concis"
      },
      {
        "path": "/common/pagination",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Pagination/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Pagination/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Pagination",
          "title": "Pagination 分页器",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "导航",
            "__fallback": true,
            "path": "/common/pagination"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Pagination 分页器",
              "heading": "pagination-分页器"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "大数据分页",
              "heading": "大数据分页"
            },
            {
              "depth": 2,
              "value": "每页条数限制",
              "heading": "每页条数限制"
            },
            {
              "depth": 2,
              "value": "输入框跳转",
              "heading": "输入框跳转"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Pagination 分页器 - Concis"
      },
      {
        "path": "/common/popover",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Popover/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Popover/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Popover",
          "title": "Popover 气泡卡片",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/popover"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Popover 气泡卡片",
              "heading": "popover-气泡卡片"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "点击式",
              "heading": "点击式"
            },
            {
              "depth": 2,
              "value": "不同方向",
              "heading": "不同方向"
            },
            {
              "depth": 2,
              "value": "浮层内关闭",
              "heading": "浮层内关闭"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Popover 气泡卡片 - Concis"
      },
      {
        "path": "/common/radio",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Radio/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Radio",
          "title": "Radio 单选框",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/radio"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Radio 单选框",
              "heading": "radio-单选框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "扩展性",
              "heading": "扩展性"
            },
            {
              "depth": 2,
              "value": "盒子样式单选",
              "heading": "盒子样式单选"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Radio 单选框 - Concis"
      },
      {
        "path": "/common/rate",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Rate/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Rate/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Rate",
          "title": "Rate 评分",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/rate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Rate 评分",
              "heading": "rate-评分"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "自定义颜色",
              "heading": "自定义颜色"
            },
            {
              "depth": 2,
              "value": "数量与默认显示",
              "heading": "数量与默认显示"
            },
            {
              "depth": 2,
              "value": "半星",
              "heading": "半星"
            },
            {
              "depth": 2,
              "value": "可清除",
              "heading": "可清除"
            },
            {
              "depth": 2,
              "value": "案例",
              "heading": "案例"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Rate 评分 - Concis"
      },
      {
        "path": "/common/select",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Select/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Select/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Select",
          "title": "Select 下拉菜单",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/select"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Select 下拉菜单",
              "heading": "select-下拉菜单"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "加载",
              "heading": "加载"
            },
            {
              "depth": 2,
              "value": "下拉项单独禁用",
              "heading": "下拉项单独禁用"
            },
            {
              "depth": 2,
              "value": "可输入",
              "heading": "可输入"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Select 下拉菜单 - Concis"
      },
      {
        "path": "/common/skeleton",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Skeleton/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Skeleton/index.md",
          "updatedTime": 1657821239000,
          "componentName": "Skeleton",
          "title": "Skeleton 骨架屏",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "反馈",
            "__fallback": true,
            "path": "/common/skeleton"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Skeleton 骨架屏",
              "heading": "skeleton-骨架屏"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "显示标题",
              "heading": "显示标题"
            },
            {
              "depth": 2,
              "value": "显示头像",
              "heading": "显示头像"
            },
            {
              "depth": 2,
              "value": "自定义数量和宽度",
              "heading": "自定义数量和宽度"
            },
            {
              "depth": 2,
              "value": "完整功能",
              "heading": "完整功能"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Skeleton 骨架屏 - Concis"
      },
      {
        "path": "/common/space",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Space/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Space/index.md",
          "updatedTime": 1657742591000,
          "componentName": "Space",
          "title": "Space 间距",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "布局",
            "__fallback": true,
            "path": "/common/space"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Space 间距",
              "heading": "space-间距"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "垂直间距",
              "heading": "垂直间距"
            },
            {
              "depth": 2,
              "value": "尺寸",
              "heading": "尺寸"
            },
            {
              "depth": 2,
              "value": "对齐",
              "heading": "对齐"
            },
            {
              "depth": 2,
              "value": "环绕间距",
              "heading": "环绕间距"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Space 间距 - Concis"
      },
      {
        "path": "/common/steps",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Steps/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Steps/index.md",
          "updatedTime": 1658331399000,
          "componentName": "Steps",
          "title": "Steps 步骤条",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "导航",
            "__fallback": true,
            "path": "/common/steps"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Steps 步骤条",
              "heading": "steps-步骤条"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "额外参数",
              "heading": "额外参数"
            },
            {
              "depth": 2,
              "value": "遍历使用",
              "heading": "遍历使用"
            },
            {
              "depth": 2,
              "value": "可点击",
              "heading": "可点击"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Steps 步骤条 - Concis"
      },
      {
        "path": "/common/swiper",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Swiper/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Swiper/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Swiper",
          "title": "Swiper 轮播图",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/swiper"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Swiper 轮播图",
              "heading": "swiper-轮播图"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "注意事项",
              "heading": "注意事项"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "自动播放",
              "heading": "自动播放"
            },
            {
              "depth": 2,
              "value": "切换选项",
              "heading": "切换选项"
            },
            {
              "depth": 2,
              "value": "卡片式",
              "heading": "卡片式"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Swiper 轮播图 - Concis"
      },
      {
        "path": "/common/switch",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Switch/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Switch/index.md",
          "updatedTime": 1657737732000,
          "componentName": "Switch",
          "title": "Switch 开关",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/switch"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Switch 开关",
              "heading": "switch-开关"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "禁用状态",
              "heading": "禁用状态"
            },
            {
              "depth": 2,
              "value": "不同大小",
              "heading": "不同大小"
            },
            {
              "depth": 2,
              "value": "文字和图标",
              "heading": "文字和图标"
            },
            {
              "depth": 2,
              "value": "加载中",
              "heading": "加载中"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Switch 开关 - Concis"
      },
      {
        "path": "/common/table",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Table/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Table/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Table",
          "title": "Table 表格",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/table"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Table 表格",
              "heading": "table-表格"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "对齐方式与宽度",
              "heading": "对齐方式与宽度"
            },
            {
              "depth": 2,
              "value": "展开行",
              "heading": "展开行"
            },
            {
              "depth": 2,
              "value": "单选",
              "heading": "单选"
            },
            {
              "depth": 2,
              "value": "多选",
              "heading": "多选"
            },
            {
              "depth": 2,
              "value": "排序",
              "heading": "排序"
            },
            {
              "depth": 2,
              "value": "筛选",
              "heading": "筛选"
            },
            {
              "depth": 3,
              "value": "以下虚拟列表滚动、懒加载、分页为大数据时的建议方案，无法同时使用，只能选择其一进行开发",
              "heading": "以下虚拟列表滚动懒加载分页为大数据时的建议方案无法同时使用只能选择其一进行开发"
            },
            {
              "depth": 2,
              "value": "虚拟列表滚动",
              "heading": "虚拟列表滚动"
            },
            {
              "depth": 2,
              "value": "懒加载",
              "heading": "懒加载"
            },
            {
              "depth": 2,
              "value": "分页",
              "heading": "分页"
            },
            {
              "depth": 2,
              "value": "拖拽",
              "heading": "拖拽"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Table 表格 - Concis"
      },
      {
        "path": "/common/time-picker",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/TimePicker/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/TimePicker/index.md",
          "updatedTime": 1658573317660,
          "componentName": "TimePicker",
          "title": "TimePicker 时间选择器",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/time-picker"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "TimePicker 时间选择器",
              "heading": "timepicker-时间选择器"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            }
          ],
          "hasPreviewer": true
        },
        "title": "TimePicker 时间选择器 - Concis"
      },
      {
        "path": "/common/tree",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/Tree/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/Tree/index.md",
          "updatedTime": 1657640436000,
          "componentName": "Tree",
          "title": "Tree 树选择器",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据录入",
            "__fallback": true,
            "path": "/common/tree"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Tree 树选择器",
              "heading": "tree-树选择器"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "搜索",
              "heading": "搜索"
            },
            {
              "depth": 2,
              "value": "默认展开",
              "heading": "默认展开"
            },
            {
              "depth": 2,
              "value": "多选",
              "heading": "多选"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Tree 树选择器 - Concis"
      },
      {
        "path": "/common/tree-view",
        "component": require('/Users/apple/Desktop/Concis/packages/concis-react/src/TreeView/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/concis-react/src/TreeView/index.md",
          "updatedTime": 1657640436000,
          "componentName": "TreeView",
          "title": "TreeView 树型控件",
          "nav": {
            "title": "组件",
            "path": "/common"
          },
          "group": {
            "title": "数据展示",
            "__fallback": true,
            "path": "/common/tree-view"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "TreeView 树型控件",
              "heading": "treeview-树型控件"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "默认展开",
              "heading": "默认展开"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "可拖拽",
              "heading": "可拖拽"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "TreeView 树型控件 - Concis"
      },
      {
        "path": "/",
        "component": require('/Users/apple/Desktop/Concis/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1657477029000,
          "hero": {
            "title": "Concis",
            "desc": "<div class=\"markdown\"><p>一套易用的轻量级的React UI 组件库</p></div>",
            "actions": [
              {
                "text": "查看文档",
                "link": "/guide/introduce"
              },
              {
                "text": "快速开始",
                "link": "/common/button"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>简单易用，降低使用者的代码量</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "为组件化开发而生",
              "desc": "<div class=\"markdown\"><p>结合MVVM组件化开发思想</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "多端支持",
              "desc": "<div class=\"markdown\"><p>支持React / React Native</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg",
              "title": "TypeScript",
              "desc": "<div class=\"markdown\"><p>使用 TypeScript 开发，提供完整的类型定义文件</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr",
              "title": "预设行为",
              "desc": "<div class=\"markdown\"><p>更少的代码，更少的 Bug</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr",
              "title": "简单易用",
              "desc": "<div class=\"markdown\"><p>在 Ant Design 上进行了自己的封装，更加易用</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://github.com/fengxinhhh/Concis\" target=\"_blank\">Xin Feng<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "快速网站成型工具",
              "heading": "快速网站成型工具"
            }
          ],
          "title": "快速网站成型工具"
        },
        "title": "快速网站成型工具 - Concis"
      },
      {
        "path": "/guide/introduce",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/introduce.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/introduce.md",
          "updatedTime": 1658156830000,
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "Concis",
              "heading": "concis"
            },
            {
              "depth": 2,
              "value": "特性",
              "heading": "特性"
            },
            {
              "depth": 2,
              "value": "兼容环境",
              "heading": "兼容环境"
            },
            {
              "depth": 2,
              "value": "如何贡献？",
              "heading": "如何贡献"
            },
            {
              "depth": 4,
              "value": "拉取仓库",
              "heading": "拉取仓库"
            },
            {
              "depth": 4,
              "value": "拉取分支",
              "heading": "拉取分支"
            },
            {
              "depth": 4,
              "value": "提交代码",
              "heading": "提交代码"
            },
            {
              "depth": 4,
              "value": "审核与合并",
              "heading": "审核与合并"
            },
            {
              "depth": 2,
              "value": "问题汇报",
              "heading": "问题汇报"
            }
          ],
          "title": "介绍"
        },
        "title": "介绍 - Concis"
      },
      {
        "path": "/guide/teuse",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/teuse.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/teuse.md",
          "updatedTime": 1657483010000,
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速开始",
              "heading": "快速开始"
            },
            {
              "depth": 1,
              "value": "第一个例子",
              "heading": "第一个例子"
            },
            {
              "depth": 1,
              "value": "探索更多组件用法",
              "heading": "探索更多组件用法"
            }
          ],
          "title": "快速开始"
        },
        "title": "快速开始 - Concis"
      },
      {
        "path": "/guide/udark",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/udark.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/udark.md",
          "updatedTime": 1658419034000,
          "nav": {
            "title": "设计",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "暗黑模式",
              "heading": "暗黑模式"
            },
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "案例",
              "heading": "案例"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "注入推荐样式",
              "heading": "注入推荐样式"
            }
          ],
          "title": "暗黑模式",
          "hasPreviewer": true
        },
        "title": "暗黑模式 - Concis"
      },
      {
        "path": "/guide/vcolor",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/vcolor.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/vcolor.md",
          "updatedTime": 1657753667000,
          "nav": {
            "title": "设计",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "色彩",
              "heading": "色彩"
            },
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "使用色彩库",
              "heading": "使用色彩库"
            }
          ],
          "title": "色彩"
        },
        "title": "色彩 - Concis"
      },
      {
        "path": "/guide/vscode",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/vscode.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/vscode.md",
          "updatedTime": 1658283370000,
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "vscode 支持",
              "heading": "vscode-支持"
            },
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            }
          ],
          "title": "vscode 支持"
        },
        "title": "vscode 支持 - Concis"
      },
      {
        "path": "/guide/wclass",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/wclass.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/wclass.md",
          "updatedTime": 1657753667000,
          "nav": {
            "title": "设计",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "自定义类名",
              "heading": "自定义类名"
            },
            {
              "depth": 2,
              "value": "注意",
              "heading": "注意"
            },
            {
              "depth": 2,
              "value": "双重类名",
              "heading": "双重类名"
            }
          ],
          "title": "自定义类名"
        },
        "title": "自定义类名 - Concis"
      },
      {
        "path": "/guide/wtheme",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/wtheme.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/wtheme.md",
          "updatedTime": 1657640436000,
          "nav": {
            "title": "设计",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "定制主题",
              "heading": "定制主题"
            },
            {
              "depth": 2,
              "value": "Concis 提供的色彩变量",
              "heading": "concis-提供的色彩变量"
            },
            {
              "depth": 2,
              "value": "定制方式",
              "heading": "定制方式"
            }
          ],
          "title": "定制主题",
          "hasPreviewer": true
        },
        "title": "定制主题 - Concis"
      },
      {
        "path": "/guide/xproject",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/xproject.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/xproject.md",
          "updatedTime": 1657619625000,
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "在 create-react-app 中使用",
              "heading": "在-create-react-app-中使用"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "引入和使用",
              "heading": "引入和使用"
            }
          ],
          "title": "在 create-react-app 中使用"
        },
        "title": "在 create-react-app 中使用 - Concis"
      },
      {
        "path": "/guide/yproject",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/yproject.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/yproject.md",
          "updatedTime": 1657619625000,
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "在 TypeScript 中使用",
              "heading": "在-typescript-中使用"
            },
            {
              "depth": 2,
              "value": "安装和初始化",
              "heading": "安装和初始化"
            },
            {
              "depth": 2,
              "value": "配置 TypeScript 环境",
              "heading": "配置-typescript-环境"
            },
            {
              "depth": 2,
              "value": "配置 typings.d.ts",
              "heading": "配置-typingsdts"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "引入和使用",
              "heading": "引入和使用"
            }
          ],
          "title": "在 TypeScript 中使用"
        },
        "title": "在 TypeScript 中使用 - Concis"
      },
      {
        "path": "/guide/zcontribute",
        "component": require('/Users/apple/Desktop/Concis/docs/guide/zcontribute.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/zcontribute.md",
          "updatedTime": 1658156830000,
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "贡献指南",
              "heading": "贡献指南"
            },
            {
              "depth": 2,
              "value": "项目介绍",
              "heading": "项目介绍"
            },
            {
              "depth": 2,
              "value": "开始编写",
              "heading": "开始编写"
            },
            {
              "depth": 2,
              "value": "打包",
              "heading": "打包"
            },
            {
              "depth": 2,
              "value": "测试",
              "heading": "测试"
            },
            {
              "depth": 2,
              "value": "分支管理",
              "heading": "分支管理"
            },
            {
              "depth": 2,
              "value": "建议和 Bug 修复",
              "heading": "建议和-bug-修复"
            },
            {
              "depth": 2,
              "value": "开发流程",
              "heading": "开发流程"
            }
          ],
          "title": "贡献指南"
        },
        "title": "贡献指南 - Concis"
      },
      {
        "path": "/mobile",
        "meta": {},
        "exact": true,
        "redirect": "/mobile/button"
      },
      {
        "path": "/common",
        "meta": {},
        "exact": true,
        "redirect": "/common/affix"
      },
      {
        "path": "/guide",
        "meta": {},
        "exact": true,
        "redirect": "/guide/introduce"
      }
    ],
    "title": "Concis",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
