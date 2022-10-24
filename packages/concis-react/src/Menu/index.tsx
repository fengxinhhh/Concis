import React, { useState, useEffect, useCallback, useMemo, useContext, forwardRef } from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import type { MenuProps, MenuHeightProps, RenderOptions } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import './index.module.less';

const Menu = (props, ref) => {
  const [nowActiveMainKey, setNowActiveMainKey] = useState(''); // 选中的一级菜单key
  const [nowActiveKey, setNowActiveKey] = useState(''); // 选中的子菜单key
  const [parentMenuHeightList, setParentMenuHeightList] = useState<any>({}); // 父菜单高度集合

  const { items, className, width, dark, ableToggle, defaultOpen, handleRouteChange, style } =
    props;

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classFirstName = darkTheme || dark ? 'concis-dark-menu' : 'concis-menu';
  const classNames = cs(prefixCls, className, classFirstName);

  const theme = getSiteTheme();

  useEffect(() => {
    const initList = initParentMenuHeight(items, {}, '');
    if (defaultOpen) {
      // 默认展开
      for (const key in initList) {
        initList[key].height = initList[key].childNum + 1;
        if (initList[key].children.length > 0) {
          initList[key].children.map(
            (item: any) => (item.height = `${(item.childNum + 1) * 50}px`)
          );
          initList[key].height += initList[key].children.reduce(
            (pre: MenuHeightProps, next: MenuHeightProps) => {
              return (pre.childNum as number) + (next.childNum as number);
            }
          );
        }
        initList[key].height = `${initList[key].height * 50}px`;
      }
    }
    setParentMenuHeightList(initList);
  }, []);
  useEffect(() => {
    handleRouteChange && handleRouteChange(nowActiveKey);
  }, [nowActiveKey]);
  const initParentMenuHeight = (
    item: Array<RenderOptions>,
    obj: any,
    fatherKey: string | number
  ) => {
    // 初始化父级菜单高度
    item?.forEach((m) => {
      if (m.children) {
        if (m.level === 1) {
          obj[m.key] = {
            key: m.key,
            height: '50px',
            childNum: m.children.length,
            level: m.level,
            children: [],
          };
        } else {
          obj[fatherKey]?.children.push({
            key: m.key,
            height: '50px',
            childNum: m.children.length,
            level: m.level,
          });
        }
        initParentMenuHeight(m.children, obj, m.level && m.level === 1 ? m.key : '');
      }
    });
    return obj;
  };

  const toggleFirstMenu = (fMenu: RenderOptions, e: any) => {
    // 点击父级菜单
    e.stopPropagation();
    const selectKey = fMenu.key;
    const refreshObject = { ...parentMenuHeightList };
    refreshObject[selectKey].height =
      refreshObject[selectKey].height === '50px'
        ? `${(refreshObject[selectKey].childNum + 1) * 50}px`
        : '50px';
    if (ableToggle) {
      // 手风琴折叠
      if (refreshObject[selectKey].height !== '50px') {
        for (const key in refreshObject) {
          if (key !== selectKey) {
            refreshObject[key].height = '50px';
            if (refreshObject[key].children) {
              refreshObject[key].children.map((item: MenuHeightProps) => (item.height = '50px'));
            }
          }
        }
      }
    } else {
      // 普通折叠
      if (refreshObject[selectKey].children.length !== 0) {
        refreshObject[selectKey].children.forEach((c: MenuHeightProps) => {
          c.height = '50px';
        });
      }
    }
    setParentMenuHeightList(refreshObject);
  };
  const toggleChildMenu = (cMenu: RenderOptions, e: any, fKey: string) => {
    // 点击子级菜单
    if ((cMenu.level === 2 && !cMenu.children) || cMenu.level === 3) {
      setNowActiveMainKey(fKey);
      setNowActiveKey(cMenu.key as string);
    }
    if (cMenu.level === 2) {
      // 二级菜单扩展切换
      const refreshObject = { ...parentMenuHeightList };
      for (const key in refreshObject) {
        if (
          refreshObject[key].children &&
          refreshObject[key].children.findIndex(
            (item: MenuHeightProps) => item.key === cMenu.key
          ) !== -1
        ) {
          // 找出是哪个一级菜单的children
          const childIndex = refreshObject[key].children.findIndex(
            (item: MenuHeightProps) => item.key === cMenu.key
          );
          refreshObject[key].children[childIndex].height =
            refreshObject[key].children[childIndex].height === '50px'
              ? `${(refreshObject[key].children[childIndex].childNum + 1) * 50}px`
              : '50px';
          let parentHeight =
            (refreshObject[key].childNum - refreshObject[key].children.length) * 50 + 50; // 改变子菜单高度后统计父菜单高度
          parentHeight += refreshObject[key].children.reduce(
            (pre: MenuHeightProps, next: MenuHeightProps) => {
              return Number(pre.height.split('px')[0]) + Number(next.height.split('px')[0]);
            }
          );
          refreshObject[key].height = parentHeight;
        }
      }
      setParentMenuHeightList(refreshObject);
    }
    if (cMenu.level === 3) {
      for (const key in parentMenuHeightList) {
        if (
          parentMenuHeightList[key].children &&
          parentMenuHeightList[key].children.findIndex(
            (item: MenuHeightProps) => item.key === fKey
          ) !== -1
        ) {
          setNowActiveMainKey(parentMenuHeightList[key].key);
        }
      }
    }
  };
  const firstMenuHeight = (key: number) => {
    // 第一级菜单高度
    if (parentMenuHeightList[key]) {
      return {
        height: parentMenuHeightList[key]?.height,
      };
    }
    return {
      height: '50px',
    };
  };
  const childMenuHeight = useCallback(
    (key: number) => {
      // 第二级菜单高度
      for (const i in parentMenuHeightList) {
        const childIndex = parentMenuHeightList[i].children?.findIndex(
          (item: RenderOptions) => item.key === key
        );
        if (childIndex !== -1) {
          return {
            height: parentMenuHeightList[i].children[childIndex].height,
          };
        }
      }
      return {
        height: '50px',
      };
    },
    [parentMenuHeightList]
  );
  const customWidth = useMemo(() => {
    if (width) {
      if (typeof width === 'string') {
        return {
          width: (width as string).includes('%') ? width : `${width}px`,
        };
      }
      if (typeof width === 'number') {
        return {
          width: `${width}px`,
        };
      }
    }
    return {
      width: '220px',
    };
  }, [width]);

  const renderChildOptions = (childM: RenderOptions): JSX.Element | any => {
    // 传入level为1的children，进行子项递归
    if (childM.children) {
      return childM.children.map((m) => {
        return (
          <div key={m.key}>
            <div
              className={
                nowActiveKey === m.key
                  ? `${classFirstName}-activeMenuOptions active`
                  : `${classFirstName}-childMenuOptions`
              }
              style={{ ...childMenuHeight(m.key) }}
            >
              <div
                className={
                  m.children &&
                  m.children.findIndex((i: RenderOptions) => i.key === nowActiveKey) !== -1
                    ? `${classFirstName}-activeFatherTitle`
                    : `${classFirstName}-fatherTitle`
                }
                onClick={(e) => toggleChildMenu(m, e, childM.key as string)}
              >
                <span>{m.label}</span>
                {m.children &&
                  (childMenuHeight(m.key).height === '50px' ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretUpOutlined />
                  ))}
              </div>
              <div className={`${classFirstName}-childMenuOptions`} key={m.key}>
                {m.children && renderChildOptions(m)}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div
      className={classNames}
      style={
        {
          ...customWidth,
          ...style,
          '--global-color': globalColor || darkTheme ? '#3C7EFF' : '#325DFF',
          '--global-menu-option-bg': darkTheme
            ? '#3C7EFF'
            : theme === ('dark' || 'auto')
            ? '#3C7EFF'
            : '#e6f7ff',
        } as any
      }
      ref={ref}
    >
      {items?.map((m: any) => {
        return (
          <div key={m.key}>
            <div className={`${classFirstName}-menuOptions`} style={firstMenuHeight(m.key)}>
              <div
                className={
                  nowActiveMainKey === m.key
                    ? `${classFirstName}-activeFatherTitle`
                    : `${classFirstName}-fatherTitle`
                }
                onClick={(e) => toggleFirstMenu(m, e)}
              >
                <div className="left">
                  <i>{m.icon}</i>
                  <span>{m.label}</span>
                </div>
                {firstMenuHeight(m.key).height === '50px' ? (
                  <CaretDownOutlined />
                ) : (
                  <CaretUpOutlined />
                )}
              </div>
              <>{m.children && renderChildOptions(m)}</>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default forwardRef<unknown, MenuProps>(Menu);
