import React from 'react';
import { TabsContentProps } from './interface';

export default function TabContent(props: TabsContentProps) {
  const { paneChildren, defaultActiveTab } = props;

  return <>{paneChildren.filter((p) => p.key === defaultActiveTab)}</>;
}
