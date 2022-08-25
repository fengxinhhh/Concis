import React, { memo, useContext, createContext } from 'react';

import { useSetSystemTheme } from '../../utils/system-mode';

export type ConfigProps = {
  /**
   * @description 设置浅色模式、深色模式或者根据当前系统设置
   * @default light
   */
  theme?: 'light' | 'dark' | 'auto';
  /**
   * @description 全局组件大小
   * @default middle
   */
  componentSize?: 'small' | 'middle' | 'large';
  prefixCls?: string;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
};

const defaultConfig: ConfigProps = {
  theme: 'light',
  prefixCls: 'ccsm',
  componentSize: 'middle',
  getPopupContainer: () => document.body,
};

const ConfigContext = createContext<ConfigProps | null>(null);

export const useConfig = () => {
  const context = useContext(ConfigContext) || defaultConfig;

  return context;
};

export const ConfigProvider: React.FC<ConfigProps> = memo(({ children, ...props }) => {
  const config = { ...defaultConfig, ...props };

  useSetSystemTheme(config.theme);

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
});
