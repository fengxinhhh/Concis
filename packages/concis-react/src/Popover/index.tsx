import React, {
  FC,
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from 'react';
import lodash from 'lodash';
import type { popoverProps, alignStyle, PopoverRef } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Popover: FC<popoverProps> = forwardRef<PopoverRef, popoverProps>(
  (props: popoverProps, ref) => {
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
        window.addEventListener('click', resetVisible);
      }

      return () => {
        if (type === 'click') {
          window.removeEventListener('click', resetVisible);
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

    useEffect(() => {
      let isUnMounted = true;
      const dialogDom = dialogRef.current;
      if (showDialog) {
        (dialogDom as any).style.width = `${
          showDialog ? (dialogWidth === 'auto' ? 'auto' : `${dialogWidth}px`) : '0px'
        }`;
        (dialogDom as any).style.height = showDialog ? '' : '0px';
        setTimeout(() => {
          if (isUnMounted) {
            (dialogDom as any).style.opacity = showDialog ? 1 : 0;
          }
        }, 100);
      } else {
        (dialogDom as any).style.opacity = showDialog ? 1 : 0;
        setTimeout(() => {
          if (isUnMounted) {
            (dialogDom as any).style.width = showDialog ? `${dialogWidth}px` : '0px';
            (dialogDom as any).style.height = showDialog ? '' : '0px';
          }
        }, 100);
      }
      return () => {
        isUnMounted = false;
      };
    }, [showDialog]);
    const clickToggleDialog = (e: any) => {
      // 点击打开dialog
      e.stopPropagation();
      if (type === 'click') {
        setShowDialog(!showDialog);
      }
    };
    const hoverOpenDialog = lodash.debounce(() => {
      // 移入打开dialog
      if (type === 'hover' && showDialog === false) {
        setShowDialog(true);
      }
    }, 200);
    const hoverCloseDialog = lodash.debounce(() => {
      // 移开关闭dialog
      if (type === 'hover' && showDialog === true) {
        setShowDialog(false);
      }
    }, 200);

    const dialogStyle = useMemo(() => {
      const alignStyle: alignStyle = {
        opacity: 0,
      };
      if (align === 'bottom') {
      } else if (align === 'top') {
        alignStyle.bottom = `${showBtnSize.height}px`;
      } else if (align === 'right') {
        alignStyle.left = `${showBtnSize.width}px`;
        alignStyle.bottom = `${Number(showBtnSize.height) / 2}px`;
      } else if (align === 'left') {
        alignStyle.right = `${showBtnSize.width}px`;
        alignStyle.bottom = `${Number(showBtnSize.height) / 2}px`;
      }
      if (!noBorder) {
        alignStyle.border = '1px solid #ccc';
      }
      return {
        ...alignStyle,
      };
    }, [content, showDialog, defaultShow, showBtnSize]);

    return (
      <div className={classNames}>
        <div
          className="open-container"
          onMouseEnter={() => hoverOpenDialog()}
          onMouseLeave={() => hoverCloseDialog()}
        >
          <div className="show-btn" onClick={(e) => clickToggleDialog(e)} ref={showBtnRef as any}>
            {children}
          </div>
          <div
            className="pop-dialog"
            style={{ ...dialogStyle, ...style }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => hoverOpenDialog()}
            onMouseLeave={() => hoverCloseDialog()}
            ref={dialogRef as any}
          >
            {content}
          </div>
        </div>
      </div>
    );
  },
);

export default Popover;
