import React, { Fragment } from 'react';
import { CaretDownOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import type { CollapseHeaderProps } from './interface';

export default function Header(props: CollapseHeaderProps) {
  const { headerAlign, header, extra, headerHeight } = props;

  const headerDomMap = new Map([
    ['left', leftHeaderDom],
    ['right', rightHeaderDom],
    ['hide', hideHeaderDom],
  ]);

  function leftHeaderDom() {
    return (
      <>
        <div className="left">
          <div className="header-icon">
            {headerHeight === 0 ? <CaretRightOutlined /> : <CaretDownOutlined />}
          </div>
          <div className="header-text">{header}</div>
        </div>
        {extra && <div className="right">{extra}</div>}
      </>
    );
  }

  function rightHeaderDom() {
    return (
      <>
        <div className="left">
          <div className="header-text">{header}</div>
        </div>
        <div className="right">
          {extra}
          <div className="header-icon">
            {headerHeight === 0 ? <CaretLeftOutlined /> : <CaretDownOutlined />}
          </div>
        </div>
      </>
    );
  }

  function hideHeaderDom() {
    return (
      <>
        <div className="left">
          <div className="header-text">{header}</div>
        </div>
        <div className="right">{extra}</div>
      </>
    );
  }

  const headerContent = () => {
    return headerDomMap.get(headerAlign)();
  };

  return <Fragment>{headerContent()}</Fragment>;
}
