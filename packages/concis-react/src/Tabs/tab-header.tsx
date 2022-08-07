import React from 'react';
import { TabsHeaderProps } from './interface';

export default function TabHeader(props: TabsHeaderProps) {
  const { paneChildren, defaultActiveTab, changeHeaderActiveCallback } = props;

  const changeHeader = (key: string, disabled: boolean) => {
    if (disabled) return;
    changeHeaderActiveCallback && changeHeaderActiveCallback(key);
  }
  const headerClass = (key: string, disabled: boolean) => {
    if (disabled) {
      return 'header-option header-option-disabled';
    } else if (key === defaultActiveTab) {
      return 'header-option header-option-active';
    }
    return 'header-option';
  }

  return (
    <>
      {
        paneChildren?.map(item => {
          return (
            <span
              className={headerClass(item.key, item.props.disabled)}
              onClick={() => changeHeader(item.key, item.props.disabled)}>
              {item.props.title}
            </span>
          )
        })
      }
    </>
  )
}
