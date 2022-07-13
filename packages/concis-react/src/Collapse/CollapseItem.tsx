import React, { FC, memo, useMemo, useEffect, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { CollapseItemProps } from './interfase';
import { CaretDownOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import './style/item.module.less';
import useStateCallback from '../common_utils/hooks/useStateCallback';
import { ctx } from './index';

const CollapseItem: FC<CollapseItemProps> = (props) => {
  const { children, className, header, disabled = false, listKey, extra } = props;

  const [contentDomHeight, setContentDomHeight] = useStateCallback(0);
  const [hasOpen, setHasOpen] = useStateCallback(false);

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-collapse-item');
  const { activeKeyList, setActiveKeyList, accordion, headerAlign, lazyLoad, toggleCallback } =
    useContext(ctx); //父组件共享状态

  useEffect(() => {
    //根据默认值展开或收起
    if (activeKeyList.indexOf(Number(listKey)) == -1) {
      setContentDomHeight(0);
    } else {
      setContentDomHeight(
        (document.querySelector('.collapse-item-content') as HTMLElement).scrollHeight + 30,
      );
    }
  }, [activeKeyList]);

  const toggleContent = () => {
    if (disabled) return; //禁用
    let newHeight = contentDomHeight;
    if (newHeight == 0) {
      //展开
      if (lazyLoad && !hasOpen) {
        //首次展开懒加载
        setHasOpen(true, (state: boolean) => {
          newHeight =
            (document.querySelector('.collapse-item-content') as HTMLElement).scrollHeight + 30;
          if (accordion) {
            //手风琴，全部清除再加入
            setActiveKeyList([Number(listKey)]);
            toggleCallback && toggleCallback([Number(listKey)]);
          } else {
            setActiveKeyList((oldAList: Array<string | number>) => {
              toggleCallback && toggleCallback([...[...oldAList, Number(listKey)].sort()]);
              return [...[...oldAList, Number(listKey)].sort()];
            });
          }
          setContentDomHeight(newHeight);
        });
      } else {
        newHeight =
          (document.querySelector('.collapse-item-content') as HTMLElement).scrollHeight + 30;
        if (accordion) {
          //手风琴，全部清除再加入
          setActiveKeyList([Number(listKey)]);
          toggleCallback && toggleCallback([Number(listKey)]);
        } else {
          setActiveKeyList((oldAList: Array<string | number>) => {
            toggleCallback && toggleCallback([...[...oldAList, Number(listKey)].sort()]);
            return [...[...oldAList, Number(listKey)].sort()];
          });
        }
        setContentDomHeight(newHeight);
      }
    } else {
      //收起
      newHeight = 0;
      setActiveKeyList((oldAList: Array<string | number>) => {
        oldAList.splice(
          oldAList.findIndex(
            (item: number | string, i: number | string) => Number(i) + 1 == listKey,
          ),
          1,
        );
        return [...oldAList.sort()];
      });
      setContentDomHeight(newHeight);
    }
  };

  const headerHeight = useMemo(() => {
    //展开高度
    return {
      maxHeight: `${contentDomHeight}px`,
    };
  }, [contentDomHeight]);
  const renderHeader = useMemo(() => {
    if (headerAlign == 'left') {
      return (
        <div
          className="collapse-item-header"
          onClick={toggleContent}
          style={disabled ? { color: '#c9cdd4', cursor: 'not-allowed' } : {}}
        >
          <div className="left">
            <div className="header-icon">
              {headerHeight.maxHeight == '0px' ? <CaretRightOutlined /> : <CaretDownOutlined />}
            </div>
            <div className="header-text">{header}</div>
          </div>
          {extra && <div className="right">{extra}</div>}
        </div>
      );
    } else if (headerAlign == 'right') {
      return (
        <div
          className="collapse-item-header"
          onClick={toggleContent}
          style={disabled ? { color: '#c9cdd4', cursor: 'not-allowed' } : {}}
        >
          <div className="left">
            <div className="header-text">{header}</div>
          </div>
          <div className="right">
            {extra}
            <div className="header-icon">
              {headerHeight.maxHeight == '0px' ? <CaretLeftOutlined /> : <CaretDownOutlined />}
            </div>
          </div>
        </div>
      );
    } else if (headerAlign == 'hide') {
      return (
        <div
          className="collapse-item-header"
          onClick={toggleContent}
          style={disabled ? { color: '#c9cdd4', cursor: 'not-allowed' } : {}}
        >
          <div className="left">
            <div className="header-text">{header}</div>
          </div>
          <div className="right">{extra}</div>
        </div>
      );
    }
  }, [headerAlign, headerHeight, disabled]);
  return (
    <div className={classNames}>
      {renderHeader}
      <div className="collapse-item-content" style={headerHeight}>
        {lazyLoad ? hasOpen && children : children}
      </div>
    </div>
  );
};

export default memo(CollapseItem);
