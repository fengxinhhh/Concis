import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { PopoverStyle } from './style';
import { on, off } from '../common_utils/dom/event';
import type { popoverProps, PopoverRef } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

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

  return (
    <PopoverStyle
      align={align}
      showBtnSize={showBtnSize}
      dialogWidth={dialogWidth}
      noBorder={noBorder}
    >
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
                style={style}
                onClick={(e) => e.stopPropagation()}
                ref={dialogRef as any}
              >
                {content}
              </div>
            </React.Fragment>
          </CSSTransition>
        </div>
      </div>
    </PopoverStyle>
  );
});

export default Popover;
