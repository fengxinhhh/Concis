import React, {
  useContext,
  useState,
  useCallback,
  createRef,
  useRef,
  useEffect,
  forwardRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavStyle } from './style';
import { NavProps, lineStyleProps, dialogStyleProps, navDataOption } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Nav = (props, ref) => {
  const { className, style, navData, navContent, leftSlot, rightSlot } = props;

  const [visible, setVisible] = useState(false);
  const [lineStyle, setLineStyle] = useState<lineStyleProps>({ width: '0', left: '0' });
  const [dialogStyle, setDialogStyle] = useState<dialogStyleProps>({
    width: '0',
    height: '0',
    left: '0',
  });
  const [hoverNavIndex, setHoverNavIndex] = useState(-1);
  const widthRef = createRef<HTMLDivElement>();
  const optionSizeList = useRef<Array<number>>();
  const dialogRef = createRef<HTMLDivElement>();
  const contentRef = createRef<HTMLDivElement>();
  const leftNavRef = createRef<HTMLDivElement>();

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-nav' : 'concis-nav';
  const classNames = cs(prefixCls, className, classFirstName);

  useEffect(() => {
    navOptionsWidth();
  }, []);

  useEffect(() => {
    // 每次hover切换选项，重新计算白框样式
    setDialogStyle(() => {
      return {
        width: `${dialogRef.current?.offsetWidth}px`,
        height: `${dialogRef.current?.offsetHeight}px`,
        left: `${
          (optionSizeList.current as number[]).slice(0, hoverNavIndex).reduce((a, b) => a + b, 0) +
          (hoverNavIndex === 0 ? 14 : 14 + hoverNavIndex * 28) -
          (dialogRef.current as HTMLDivElement)?.offsetWidth / 2 +
          (optionSizeList.current as number[])[hoverNavIndex] / 2
        }px`,
      };
    });
  }, [hoverNavIndex]);

  // 跳转
  const jump = (item: navDataOption) => {
    if (!item.link) return;
    window.location.href = item.link;
  };
  // 导航栏所有选项的宽度
  const navOptionsWidth = useCallback(() => {
    const widthList: number[] = [];
    const navOptions = Array.from((widthRef.current as HTMLDivElement).children);
    if (leftSlot) {
      navOptions.shift();
    }
    if (rightSlot) {
      navOptions.pop();
    }
    navOptions.forEach((item) => {
      widthList.push(item.clientWidth - 28);
    });
    optionSizeList.current = widthList;
  }, [navData, widthRef]);

  // 进入导航栏
  const enterNav = (index: number) => {
    if (!visible) {
      setDialogStyle((old) => {
        return {
          ...old,
          width: '0',
          height: '0',
        };
      });
    }
    setVisible(true);
    setHoverNavIndex(index);
    setLineStyle((line) => {
      return {
        ...line,
        left: `${
          (optionSizeList.current as number[]).slice(0, index).reduce((a, b) => a + b, 0) +
          (index === 0 ? 14 : 14 + index * 28) +
          (leftSlot !== undefined ? leftNavRef.current?.offsetWidth || 0 : 0)
        }px`,
        width: `${(optionSizeList.current as number[])[index]}px`,
      };
    });
  };
  // 离开导航栏
  const leaveNav = () => {
    setVisible(false);
    setHoverNavIndex(-1);
  };
  const leaveDialog = (e) => {
    const leaveToEl = e.nativeEvent.relatedTarget;
    // 如果移出整个Nav，清除所有状态
    if (leaveToEl.getAttribute('class') !== 'line fadeIn-enter-done') {
      setVisible(false);
      setHoverNavIndex(-1);
    }
  };

  return (
    <NavStyle>
      <div className={classNames} style={style} ref={ref} onMouseLeave={leaveNav}>
        <div className="concis-nav-bar" ref={widthRef}>
          {leftSlot && (
            <div className="concis-nav-left" ref={leftNavRef}>
              {leftSlot}
            </div>
          )}

          {navData.map((item, index) => {
            return (
              <div
                className="concis-nav-bar-option"
                key={index}
                onMouseEnter={() => enterNav(index)}
                onClick={() => jump(item)}
              >
                {item.label}
              </div>
            );
          })}
          <CSSTransition
            in={visible}
            timeout={200}
            appear
            classNames="fadeIn"
            mountOnEnter
            onEnter={(e) => {
              e.style.display = 'inline-block';
            }}
            onExited={(e) => {
              e.style.display = 'none';
            }}
          >
            <>
              <div className="line" style={lineStyle} />
              {navContent && navContent.length > 0 && (
                <CSSTransition
                  in={visible && hoverNavIndex !== -1}
                  timeout={100}
                  appear
                  classNames="dialogFade"
                  mountOnEnter
                  onEnter={(e) => {
                    e.style.display = 'inline-block';
                  }}
                  onExited={(e) => {
                    e.style.display = 'none';
                  }}
                >
                  <>
                    <div
                      className="line-dialog"
                      ref={contentRef}
                      style={dialogStyle}
                      onMouseLeave={leaveDialog}
                    >
                      {navContent[hoverNavIndex]}
                    </div>
                    <div className="line-dialog2" ref={dialogRef}>
                      {navContent[hoverNavIndex]}
                    </div>
                  </>
                </CSSTransition>
              )}
            </>
          </CSSTransition>
          {rightSlot && <div className="concis-nav-right">{rightSlot}</div>}
        </div>
      </div>
    </NavStyle>
  );
};

export default forwardRef<unknown, NavProps>(Nav);
