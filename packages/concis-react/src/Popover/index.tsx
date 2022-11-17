import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { on, off } from '../common_utils/dom/event';
import type { popoverProps, alignStyle, PopoverRef } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Popover = forwardRef<PopoverRef, popoverProps>((props, ref) => {
  const {
    children,
    className,
    style = {},
    type = 'hover',
    align = 'bottom',
    content,
    noBorder,
    dialogWidth = 200,
    defaultShow = false,
    closeDeps,
    onVisibleChange,
  } = props;
  const showBtnRef = useRef();
  const dialogRef = useRef();

  const [showDialog, setShowDialog] = useState<boolean>(defaultShow || false); // 是否显示
  const [showBtnSize, setShowBtnSize] = useState({
    width: '',
    height: '',
  });
  const [prevCloseDeps, setPrevCloseDeps] = useState(closeDeps);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}popover-card`);
  useImperativeHandle(ref, () => ({
    setShowDialog,
  }));

  useEffect(() => {
    setShowBtnSize({
      width: (showBtnRef.current as any).offsetWidth,
      height: (showBtnRef.current as any).offsetHeight,
    });
    function resetVisible() {
      setShowDialog(false);
    }
    if (type === 'click') {
      on(window, 'click', resetVisible)();
    }

    return () => {
      if (type === 'click') {
        off(window, 'click', resetVisible)();
      }
    };
  }, []);

  useEffect(() => {
    // 依赖于父组件的状态改变，关闭popover
    if (
      Array.isArray(prevCloseDeps) &&
      !(
        prevCloseDeps?.length === closeDeps?.length &&
        prevCloseDeps.every((p, i) => p === closeDeps[i])
      )
    ) {
      setShowDialog(false);
    }
    setPrevCloseDeps(closeDeps);
  }, [closeDeps]);

  useEffect(() => {
    onVisibleChange && onVisibleChange(showDialog);
  }, [showDialog]);

  const clickToggleDialog = (e: any) => {
    // 点击打开dialog
    e.stopPropagation();
    if (type === 'click') {
      setShowDialog(!showDialog);
    }
  };

  const hoverOpenDialog = () => {
    // 移入打开dialog
    if (type === 'hover' && showDialog === false) {
      setShowDialog(true);
    }
  };

  const hoverCloseDialog = () => {
    // 移开关闭dialog
    if (type === 'hover' && showDialog === true) {
      setShowDialog(false);
    }
  };

  const dialogStyle = useMemo(() => {
    const alignStyle: alignStyle = { width: `${dialogWidth}px` };
    const { width, height } = showBtnSize;
    const popoverContentMargin = 5;
    if (align === 'bottom') {
      alignStyle.top = `${height + popoverContentMargin}px`;
    } else if (align === 'top') {
      alignStyle.bottom = `${height + popoverContentMargin}px`;
    } else if (align === 'right') {
      alignStyle.left = `${width + popoverContentMargin}px`;
      alignStyle.bottom = `${Number(height) / 2}px`;
    } else if (align === 'left') {
      alignStyle.right = `${width + popoverContentMargin}px`;
      alignStyle.bottom = `${Number(height) / 2}px`;
    }
    if (!noBorder) {
      alignStyle.border = '1px solid #ccc';
    }
    return {
      ...alignStyle,
    };
  }, [content, showDialog, defaultShow, showBtnSize]);

  return (
    <div
      className={classNames}
      onMouseEnter={() => hoverOpenDialog()}
      onMouseLeave={() => hoverCloseDialog()}
    >
      <div className="open-container">
        <div className="show-btn" onClick={(e) => clickToggleDialog(e)} ref={showBtnRef as any}>
          {children}
        </div>
        <CSSTransition
          in={showDialog}
          timeout={200}
          appear
          mountOnEnter
          classNames="fadeIn"
          onEnter={(e: HTMLDivElement) => {
            e.style.display = 'block';
          }}
          onExited={(e: HTMLDivElement) => {
            e.style.display = 'none';
          }}
        >
          <React.Fragment>
            <div
              className="pop-dialog"
              style={{ ...dialogStyle, ...style }}
              onClick={(e) => e.stopPropagation()}
              ref={dialogRef as any}
            >
              {content}
            </div>
          </React.Fragment>
        </CSSTransition>
      </div>
    </div>
  );
});

export default Popover;
