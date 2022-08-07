import React from 'react';
import { TabsContentProps } from './interface';

export default function TabContent(props: TabsContentProps) {
  const { paneChildren, defaultActiveTab } = props;
  console.log(paneChildren)
  return (
    <>
      {
        paneChildren.filter(p => p.key === defaultActiveTab)
      }
    </>
  )
}
