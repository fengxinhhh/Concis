import React, {
  FC,
  memo,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext,
} from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import lodash from 'lodash';
import './index.module.less';

interface popoverProps {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
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
   * @description 无边框
   * @default false
   */
  noBorder?: boolean;
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
  border?: string;
};
const Popover: FC<popoverProps> = (props: popoverProps) => {
  const {
    children,
    className,
    type = 'hover',
    align = 'bottom',
    content,
    noBorder,
    dialogWidth = 200,
    propsVisiable,
    onVisableChange,
  } = props;

  const showBtnRef = useRef();
  const dialogRef = useRef();
  const [showDialog, setShowDialog] = useState<boolean>(propsVisiable || false); //是否显示
  const [showBtnSize, setShowBtnSize] = useState({
    width: '',
    height: '',
  });

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-popover-card');

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
      setShowDialog(propsVisiable as boolean);
    }
  }, [propsVisiable]);
  useEffect(() => {
    const dialogDom = dialogRef.current;
    if (showDialog) {
      (dialogDom as any).style.width = showDialog ? `${dialogWidth}px` : '0px';
      (dialogDom as any).style.height = showDialog ? '' : '0px';
      setTimeout(() => {
        (dialogDom as any).style.opacity = showDialog ? 1 : 0;
      }, 100);
    } else {
      (dialogDom as any).style.opacity = showDialog ? 1 : 0;
      setTimeout(() => {
        (dialogDom as any).style.width = showDialog ? `${dialogWidth}px` : '0px';
        (dialogDom as any).style.height = showDialog ? '' : '0px';
      }, 100);
    }
  }, [showDialog]);
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
    if (!noBorder) {
      alignStyle.border = '1px solid #ccc';
    }
    return {
      ...alignStyle,
    };
  }, [content, showDialog, propsVisiable, showBtnSize]);
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
          style={dialogStyle}
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
};

export default memo(Popover);
