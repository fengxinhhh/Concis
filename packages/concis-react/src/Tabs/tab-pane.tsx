import React from 'react';
import { TabsPaneProps } from './interface';

export default function TabPane(props: TabsPaneProps) {
  const { children } = props;
  return (
    <>
      {children}
    </>
  )
}
