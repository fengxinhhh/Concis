import React, { memo, useContext, createContext, useState } from 'react';

export type ConfigProps = {
  componentSize?: 'small' | 'middle' | 'large';
  prefixCls?: string;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
};

const defaultConfig: ConfigProps = {
  prefixCls: 'concis',
  componentSize: 'middle',
  getPopupContainer: () => document.body,
};

const ConfigContext = createContext<ConfigProps>(defaultConfig);

export const useConfig = () => {
  const context = useContext(ConfigContext);

  return context;
};

export const ConfigProvider: React.FC<ConfigProps & { children?: React.ReactNode }> = memo(
  (props) => {
    const { children } = props;

    const [config, setConfig] = useState<ConfigProps>(defaultConfig);

    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
  },
);
