import React, { Fragment } from 'react';
import { CaretDownOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import type { CollapseHeaderProps } from './interface';

export default function Header(props: CollapseHeaderProps) {
  const { headerAlign, header, extra, headerHeight } = props;

  const headerContent = () => {
    switch (headerAlign) {
      case 'left':
        return (
          <>
            <div className="left">
              <div className="header-icon">
                {headerHeight.maxHeight === '0px' ? <CaretRightOutlined /> : <CaretDownOutlined />}
              </div>
              <div className="header-text">{header}</div>
            </div>
            {extra && <div className="right">{extra}</div>}
          </>
        );
      case 'right':
        return (
          <>
            <div className="left">
              <div className="header-text">{header}</div>
            </div>
            <div className="right">
              {extra}
              <div className="header-icon">
                {headerHeight.maxHeight === '0px' ? <CaretLeftOutlined /> : <CaretDownOutlined />}
              </div>
            </div>
          </>
        );
      case 'hide':
        return (
          <>
            <div className="left">
              <div className="header-text">{header}</div>
            </div>
            <div className="right">{extra}</div>
          </>
        );
      default:
        return (
          <>
            <div className="left">
              <div className="header-icon">
                {headerHeight.maxHeight === '0px' ? <CaretRightOutlined /> : <CaretDownOutlined />}
              </div>
              <div className="header-text">{header}</div>
            </div>
            {extra && <div className="right">{extra}</div>}
          </>
        );
    }
  };

  return <Fragment>{headerContent()}</Fragment>;
}
