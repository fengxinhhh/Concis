import React, { useMemo, useEffect, useContext, useState, forwardRef } from 'react';
import { CollapseItemStyle } from './style/item';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import Header from './Header';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { CollapseItemProps } from './interface';
import useStateCallback from '../common_utils/hooks/useStateCallback';
import { ctx } from '.';

const CollapseItem = (props, ref) => {
  const { children, className, header, disabled = false, listKey, extra } = props;

  const [contentDomHeight, setContentDomHeight] = useState(0);
  const [hasOpen, setHasOpen] = useStateCallback(false);

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-collapse-item');
  const { activeKeyList, setActiveKeyList, accordion, headerAlign, lazyLoad, toggleCallback } =
    useContext(ctx); // 父组件共享状态

  useEffect(() => {
    // 根据默认值展开或收起
    if (activeKeyList.indexOf(Number(listKey)) === -1) {
      setContentDomHeight(0);
    } else {
      (document.querySelector('.concis-collapse-item-content') as HTMLElement)?.scrollHeight &&
        setContentDomHeight(
          (document.querySelector('.concis-collapse-item-content') as HTMLElement)?.scrollHeight +
            30
        );
    }
  }, [activeKeyList]);

  const openCollapseItem = (newHeight) => {
    newHeight =
      (document.querySelector('.concis-collapse-item-content') as HTMLElement)?.scrollHeight + 30;
    if (accordion) {
      // 手风琴，全部清除再加入
      setActiveKeyList([Number(listKey)]);
      toggleCallback && toggleCallback([Number(listKey)]);
    } else {
      setActiveKeyList((oldAList: Array<string | number>) => {
        toggleCallback && toggleCallback([...[...oldAList, Number(listKey)].sort()]);
        return [...[...oldAList, Number(listKey)].sort()];
      });
    }
    setContentDomHeight(newHeight);
  };

  const toggleContent = () => {
    if (disabled) return; // 禁用
    let newHeight = contentDomHeight;
    if (newHeight === 0) {
      // 展开
      if (lazyLoad && !hasOpen) {
        // 首次展开懒加载
        setHasOpen(true);
      }
      openCollapseItem(newHeight);
    } else {
      // 收起
      newHeight = 0;
      setActiveKeyList((oldAList: Array<string | number>) => {
        oldAList.splice(
          oldAList.findIndex((item: number | string) => String(item) === String(listKey)),
          1
        );
        return [...oldAList.sort()];
      });
      setContentDomHeight(newHeight);
    }
  };

  const renderHeader = useMemo(() => {
    return (
      <div className="concis-collapse-item-header" onClick={toggleContent}>
        <Header
          headerAlign={headerAlign}
          headerHeight={contentDomHeight}
          header={header}
          extra={extra}
        />
      </div>
    );
  }, [headerAlign, contentDomHeight, header, extra, disabled]);

  return (
    <CollapseItemStyle disabled={disabled} itemHeight={contentDomHeight}>
      <div className={classNames} ref={ref}>
        {renderHeader}
        <div className="concis-collapse-item-content">
          {lazyLoad ? hasOpen && children : children}
        </div>
      </div>
    </CollapseItemStyle>
  );
};

export default forwardRef<unknown, CollapseItemProps>(CollapseItem);
