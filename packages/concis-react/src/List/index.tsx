import React, { createContext, useMemo, useState, useEffect, useRef, useContext } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { listProps, listHeaderStyle, listContentStyle } from './interface';
import Item from './item';
import './style/list.module.less';

export const ctx = createContext<any>({}); // 顶层通信装置

const List = (props: listProps, ref: unknown) => {
  const {
    style = {},
    className,
    dataSource,
    render,
    header,
    size = 'default',
    lazyLoad = false,
    defaultShowNum = 5,
    virtualListProps,
    virtualShowNum = 5,
    lazyScrollToBottom,
  } = props;

  const contextProps = {
    size,
  };
  const [formatDataSrouce, setFormatDataSource] = useState(dataSource ? [...dataSource] : []); // 处理过的数据源
  const [scrollTop, setScrollTop] = useState(0);
  const listItemHeight = useRef<number>(0);

  const listContentRef = useRef<HTMLDivElement>(null);
  const victurlListContentRef = useRef<HTMLDivElement>(null);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}list`);

  useEffect(() => {
    if (lazyLoad && defaultShowNum) {
      setFormatDataSource((old: Array<any>) => {
        old = dataSource.slice(0, defaultShowNum);
        return [...old];
      });
    } else if (virtualListProps) {
      let rowHeight = document.querySelector('.concis-list-item')?.clientHeight as any;
      switch (size) {
        case 'default':
          rowHeight += 26;
          break;
        case 'small':
          rowHeight += 18;
          break;
        case 'large':
          rowHeight += 34;
          break;
        default: {
          rowHeight += 26;
        }
      }
      listItemHeight.current = rowHeight;
      setFormatDataSource((old: Array<any>) => {
        old = dataSource.slice(0, virtualShowNum + 2);
        return [...old];
      });
    } else {
      setFormatDataSource(dataSource);
    }
  }, [dataSource]);

  const listHeaderStyle = useMemo(() => {
    // 头部样式
    const defaultStyles: listHeaderStyle = {};
    switch (size) {
      case 'default':
        defaultStyles.padding = '12px 20px';
        break;
      case 'small':
        defaultStyles.padding = '8px 20px';
        break;
      case 'large':
        defaultStyles.padding = '16px 20px';
        break;
      default: {
        defaultStyles.padding = '12px 20px';
      }
    }
    return defaultStyles;
  }, [size]);

  const listStyle = useMemo(() => {
    // 表整体样式
    return style;
  }, [style]);
  const listContentStyle = useMemo(() => {
    // 表正文样式
    const returnStyle: listContentStyle = {};
    if (lazyLoad && defaultShowNum) {
      returnStyle.height = '400px';
      returnStyle.overflow = 'scroll';
    }
    return returnStyle;
  }, [lazyLoad, defaultShowNum]);
  const scrollList = () => {
    const { scrollHeight, clientHeight, scrollTop } = listContentRef.current as any;
    const bottomTran = scrollHeight - clientHeight - scrollTop; // 距离底部距离
    if (bottomTran <= 10) {
      lazyScrollToBottom && lazyScrollToBottom(bottomTran, true);
      setTimeout(() => {
        setFormatDataSource((old: Array<any>) => {
          old = dataSource.slice(0, old.length + defaultShowNum);
          return [...old];
        });
      }, 500);
    } else {
      lazyScrollToBottom && lazyScrollToBottom(bottomTran, false);
    }
  };
  const victurlScroll = () => {
    const startIndex = Math.floor(
      ((victurlListContentRef.current as HTMLElement).scrollTop / listItemHeight.current) as number
    );
    setScrollTop((victurlListContentRef.current as HTMLDivElement).scrollTop);
    setFormatDataSource((old: Array<any>) => {
      old = dataSource.slice(startIndex, startIndex + virtualShowNum + 2);
      return [...old];
    });
  };

  // 这里懒加载、虚拟列表使用React动画会破坏效果，渲染全部元素，待定
  return (
    <ctx.Provider value={contextProps}>
      <div className={classNames} style={listStyle}>
        <div className="list-header" style={listHeaderStyle}>
          {header}
        </div>
        {virtualListProps ? (
          <div
            className="victurl-list-content"
            style={{ height: `${(virtualShowNum * listItemHeight.current) as number}px` }}
            ref={victurlListContentRef}
            onScroll={victurlScroll}
          >
            <div
              className="victurl-relly-content"
              style={{
                height: `${((dataSource.length * listItemHeight.current) as number) - scrollTop}px`,
                transform: `translate(0, ${scrollTop}px)`,
              }}
            >
              {/* <TransitionGroup> */}
              {Array.isArray(formatDataSrouce) &&
                formatDataSrouce.length !== 0 &&
                formatDataSrouce.map(render)}
              {/* </TransitionGroup> */}
            </div>
          </div>
        ) : (
          <div
            className="list-content"
            style={listContentStyle}
            ref={listContentRef}
            onScroll={scrollList}
          >
            {lazyLoad ? (
              Array.isArray(formatDataSrouce) &&
              formatDataSrouce.length !== 0 &&
              formatDataSrouce.map(render)
            ) : (
              <TransitionGroup>
                {Array.isArray(formatDataSrouce) &&
                  formatDataSrouce.length !== 0 &&
                  formatDataSrouce.map(render)}
              </TransitionGroup>
            )}
          </div>
        )}
      </div>
    </ctx.Provider>
  );
};

interface ForwardRefListType
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<listProps> & React.RefAttributes<HTMLDivElement>
  > {
  <T = any>(
    props: React.PropsWithChildren<listProps<T>> & {
      ref?: React.Ref<HTMLDivElement>;
    }
  ): React.ReactElement;
  Item: typeof Item;
  displayName: string;
}

const ListComponent = React.forwardRef<HTMLDivElement, listProps>(List) as ForwardRefListType;
ListComponent.Item = Item;
ListComponent.displayName = 'List';

export default ListComponent;
