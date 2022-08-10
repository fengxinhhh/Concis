import React, { createContext } from 'react';
import { GlobalConfigProps } from './interface';

export const globalCtx = createContext<GlobalConfigProps>({} as GlobalConfigProps); // 顶层通信装置

const GlobalConfig = (props: GlobalConfigProps) => {
  const { children } = props;

  return <globalCtx.Provider value={props}>{children}</globalCtx.Provider>;
};

export default GlobalConfig;
