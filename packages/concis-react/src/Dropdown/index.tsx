import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  forwardRef,
  useRef,
  RefObject,
} from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { onClickOutSide, dispatchRef } from '../common_utils/dom/event';
import { DropdownProps, dataType } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './styles/index.module.less';

const Dropdown = (props, ref) => {
  const {
    placeholder = 'Please select',
    data,
    className,
    style,
    disabled,
    type = 'click',
    status = 'default',
    colums = false,
    columsWidth = 500,
    position = 'bottom',
  } = props;

  const [visible, setVisible] = useState(false);
  const [dropValue, setDropValue] = useState(placeholder);
  const [dropData, setDropData] = useState<Array<string | dataType>>(data);
  const dropdownDom = useRef(null);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classFirstName = darkTheme ? 'concis-dark-dropdown' : 'concis-dropdown';
  const classNames = cs(prefixCls, className, classFirstName);

  useEffect(() => {
    setDropData((data) => {
      return data?.map((item: string | dataType) => {
        if (typeof item !== 'string' && item?.children) {
          return {
            ...item,
            visible: false,
          };
        }
        return item;
      });
    });
    let destoryEvent;
    if (type === 'click') {
      destoryEvent = onClickOutSide(dropdownDom, reset);
    }

    return () => {
      if (type === 'click') {
        destoryEvent();
      }
    };
  }, []);

  // reset操作
  const reset = () => {
    setVisible(false);
    closeAllChild();
  };

  // 关闭所有子项
  const closeAllChild = () => {
    setDropData((data) => {
      return data.map((item: string | dataType) => {
        if (typeof item !== 'string' && item?.children) {
          return {
            ...item,
            visible: false,
          };
        }
        return item;
      });
    });
  };

  // 移入移除子项
  const hoverInDropOption = (item: string | dataType, status: boolean) => {
    if (typeof item !== 'string' && item?.children && type === 'hover') {
      setDropData((data) => {
        return data.map((subItem: string | dataType) => {
          if (typeof subItem !== 'string' && item === subItem) {
            return {
              ...subItem,
              visible: status,
            };
          }
          return subItem;
        });
      });
    }
  };

  // 点击子项触发
  const changeDropVal = (item: string | dataType, e: any) => {
    e.stopPropagation();
    if (typeof item !== 'string' && item.disabled) return;
    if (typeof item === 'string') {
      // 选中
      setDropValue(item);
      setVisible(false);
      closeAllChild();
    } else {
      if (item?.children && type === 'click') {
        setDropData((data) => {
          return data.map((subItem: string | dataType) => {
            if (typeof subItem !== 'string' && item === subItem) {
              return {
                ...subItem,
                visible: true,
              };
            }
            return subItem;
          });
        });
      } else if (item?.children && type === 'hover') {
      } else {
        // 选中
        setDropValue(item.content);
        setVisible(false);
        closeAllChild();
        if (item.link) {
          window.location.href = item.link;
        }
      }
    }
  };

  const hoverMouseEvent = (eventType: 'enter' | 'leave', e) => {
    if (disabled || type !== 'hover') return;
    e.stopPropagation();
    setVisible(eventType === 'enter');
  };

  const Option = (props) => {
    const { item, index, children } = props;

    return (
      <div
        className={cs('list', typeof item !== 'string' && item.disabled ? 'list-disabled' : '')}
        key={index}
        onClick={(e) => changeDropVal(item, e)}
        onMouseEnter={() => hoverInDropOption(item, true)}
        onMouseLeave={() => hoverInDropOption(item, false)}
      >
        {typeof item !== 'string' && item.icon && item.icon}
        <div className="list-option">{typeof item === 'string' ? item : item?.content}</div>
        {children}
      </div>
    );
  };

  // 渲染列表
  const listELementRender = useMemo(() => {
    // 多列平铺
    if (colums) {
      return dropData?.map((item, index) => {
        return <Option item={item} key={index} />;
      });
    }

    // 常规下拉
    return dropData?.map((item, index) => {
      return (
        <Option item={item} key={index}>
          {typeof item !== 'string' && item?.children && (
            <RightOutlined className="drop-down-icon" />
          )}
          {typeof item !== 'string' && item?.children && item.visible ? (
            <CSSTransition
              in={item.visible}
              timeout={200}
              appear
              mountOnEnter
              classNames="fadeContent"
              unmountOnExit
              onEnter={(e: HTMLDivElement) => {
                e.style.display = 'inline-block';
              }}
              onExited={(e: HTMLDivElement) => {
                e.style.display = 'none';
              }}
            >
              <div className="sub-list">
                {item?.children.map((subItem, subIndex) => {
                  return (
                    <div
                      className={cs(
                        'sub-list-item',
                        typeof subItem !== 'string' && subItem.disabled
                          ? 'sub-list-item-disabled'
                          : ''
                      )}
                      key={subIndex}
                      onClick={(e) => changeDropVal(subItem, e)}
                    >
                      {typeof subItem !== 'string' && subItem.icon && subItem.icon}
                      <div className="list-option">
                        {typeof subItem === 'string' ? subItem : subItem?.content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CSSTransition>
          ) : (
            <></>
          )}
        </Option>
      );
    });
  }, [status, dropValue, visible, dropData, position]);

  return (
    <div
      className={classNames}
      style={{ '--colums-width': `${columsWidth}px`, ...style } as any}
      ref={(node) => {
        dropdownDom.current = node;
        dispatchRef<RefObject<HTMLElement> | HTMLElement>(ref, node);
      }}
    >
      <div
        className={cs(
          'concis-dropdown-result',
          `concis-dropdown-result-${status}`,
          disabled ? 'concis-dropdown-result-disabled' : '',
          visible ? `concis-dropdown-result-${status}-active` : ''
        )}
        onClick={(e) => {
          if (disabled || type !== 'click') return;
          e.stopPropagation();
          setVisible(!visible);
        }}
        onMouseEnter={(e) => hoverMouseEvent('enter', e)}
        onMouseLeave={(e) => hoverMouseEvent('leave', e)}
      >
        {dropValue}
        <DownOutlined className="drop-icon" />
      </div>
      <CSSTransition
        in={visible}
        timeout={200}
        appear
        mountOnEnter
        classNames="fadeContent"
        unmountOnExit
        onEnter={(e: HTMLDivElement) => {
          e.style.display = colums ? 'flex' : 'inline-block';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div
          className={cs(
            'concis-dropdown-content',
            colums ? 'concis-dropdown-content-colums' : '',
            `concis-dropdown-content-${position}`
          )}
          onMouseEnter={(e) => hoverMouseEvent('enter', e)}
          onMouseLeave={(e) => hoverMouseEvent('leave', e)}
        >
          {listELementRender}
        </div>
      </CSSTransition>
    </div>
  );
};

const forwardRefDropdown = forwardRef<unknown, DropdownProps>(Dropdown);

forwardRefDropdown.displayName = 'Dropdown';

export default forwardRefDropdown;
