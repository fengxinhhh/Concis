import React, {
  FC,
  memo,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import lodash from 'loadsh';
import './index.module.less';

interface popoverProps {
  children?: ReactNode;
  /**
   * @description 触发形式 hover/click
   * @default hover
   */
  type?: string;
  /**
   * @description 对齐方式 left/right/top/bottom
   * @default bottom
   */
  align?: string;
  /**
   * @description 卡片内容
   * @default <></>
   */
  content: ReactNode;
  /**
   * @description 卡片宽度
   * @default 200px
   */
  dialogWidth?: number;
  /**
   * @description 提供给调用层的卡片显示隐藏状态
   * @default false
   */
  propsVisiable?: boolean;
  /**
   * @description 卡片显示隐藏回调
   */
  onVisableChange?: Function;
}
type alignStyle = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};
const Popover: FC<popoverProps> = (props) => {
  const {
    children,
    type = 'hover',
    align = 'bottom',
    content,
    dialogWidth = 200,
    propsVisiable,
    onVisableChange,
  } = props;

  const showBtnRef = useRef();
  const [showDialog, setShowDialog] = useState<boolean>(propsVisiable || false); //是否显示
  const [showBtnSize, setShowBtnSize] = useState({
    width: '',
    height: '',
  });

  useEffect(() => {
    setShowBtnSize({
      width: (showBtnRef.current as any).offsetWidth,
      height: (showBtnRef.current as any).offsetHeight,
    });
    if (type == 'click') {
      window.addEventListener('click', () => {
        setShowDialog(false);
        if (propsVisiable) {
          setShowDialog(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (propsVisiable != undefined) {
      console.log('执行');
      setShowDialog(propsVisiable as boolean);
    }
  }, [propsVisiable]);
  const clickToggleDialog = (e: any) => {
    //点击打开dialog
    e.stopPropagation();
    if (type == 'click') {
      setShowDialog(!showDialog);
      onVisableChange && onVisableChange(!showDialog);
    }
  };
  const hoverOpenDialog = lodash.debounce(() => {
    //移入打开dialog
    if (type == 'hover' && showDialog == false) {
      setShowDialog(true);

      onVisableChange && onVisableChange(true);
    }
  }, 200);
  const hoverCloseDialog = lodash.debounce(() => {
    //移开关闭dialog
    if (type == 'hover' && showDialog == true) {
      setShowDialog(false);
      onVisableChange && onVisableChange(false);
    }
  }, 200);
  const dialogStyle = useMemo(() => {
    let alignStyle: alignStyle = {};
    if (align == 'bottom') {
    } else if (align == 'top') {
      alignStyle.bottom = showBtnSize.height + 'px';
    } else if (align == 'right') {
      alignStyle.left = showBtnSize.width + 'px';
      alignStyle.bottom = Number(showBtnSize.height) / 2 + 'px';
    } else if (align == 'left') {
      alignStyle.right = showBtnSize.width + 'px';
      alignStyle.bottom = Number(showBtnSize.height) / 2 + 'px';
    }
    return {
      width: showDialog ? `${dialogWidth}px` : '0px',
      height: showDialog ? '' : '0px',
      opacity: showDialog ? 1 : 0,
      ...alignStyle,
    };
  }, [content, showDialog, propsVisiable, showBtnSize]);
  return (
    <div className="popover-card">
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
          style={dialogStyle}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => hoverOpenDialog()}
          onMouseLeave={() => hoverCloseDialog()}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default memo(Popover);
