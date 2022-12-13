import React, { memo, useContext, useRef, useMemo } from 'react';
import { ZoomStyle } from './style';
import type { ZoomboxProps } from './interface';
import { on, off } from '../common_utils/dom/event';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';

const darkThemeBorderColor = '#484b49',
  lightThemeBorderColor = '#e5e6eb';

const Zoombox = (props: ZoomboxProps) => {
  const {
    children,
    className,
    style,
    notAllowed,
    noBorder,
    minWidth = 0,
    minHeight = 0,
    maxWidth,
    maxHeight,
    onMoving,
    onMovingEnd,
    onMovingStart,
  } = props;

  const zoomRef = useRef<HTMLDivElement>(null);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}zoombox `);

  const chooseZoomBox = (e) => {
    e.stopPropagation();
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    // 按下坐标
    const client = {
      x: e.clientX,
      y: e.clientY,
    };
    // 按下相对元素位置
    const offset = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    // 按下的元素大小
    const zoomDom = zoomRef.current;

    const domSizeWhenClick = {
      width: zoomDom.offsetWidth,
      height: zoomDom.offsetHeight,
    };
    onMovingStart && onMovingStart();

    on(window, 'mousemove', move)();
    on(window, 'mouseup', up)();

    function move(ev: MouseEvent) {
      // 左上角拖拽缩放
      function dragTopLeft() {
        const newWidth = computed(domSizeWhenClick.width + (client.x - ev.clientX), 'width');
        const newHeight = computed(domSizeWhenClick.height + (client.y - ev.clientY), 'height');
        setStyle(newWidth, newHeight);
      }
      // 右上角拖拽缩放
      function dragTopRight() {
        const newWidth = computed(domSizeWhenClick.width - (client.x - ev.clientX), 'width');
        const newHeight = computed(domSizeWhenClick.height + (client.y - ev.clientY), 'height');
        setStyle(newWidth, newHeight);
      }
      // 左下角拖拽缩放
      function dragBottomLeft() {
        const newWidth = computed(domSizeWhenClick.width + (client.x - ev.clientX), 'width');
        const newHeight = computed(domSizeWhenClick.height - (client.y - ev.clientY), 'height');
        setStyle(newWidth, newHeight);
      }
      // 右下角拖拽缩放
      function dragBottomRight() {
        const newWidth = computed(domSizeWhenClick.width - (client.x - ev.clientX), 'width');
        const newHeight = computed(domSizeWhenClick.height - (client.y - ev.clientY), 'height');
        setStyle(newWidth, newHeight);
      }
      // 根据min、max、new计算更新值
      function computed(newSize: number, type: 'width' | 'height'): number {
        if (type === 'width') {
          if (maxWidth && newSize > maxWidth) {
            return maxWidth;
          }
          if (newSize < minWidth) {
            return minWidth;
          }
          return newSize;
        }
        if (type === 'height') {
          if (maxHeight && newSize > maxHeight) {
            return maxHeight;
          }
          if (newSize < minHeight) {
            return minHeight;
          }
          return newSize;
        }
      }
      // 更新样式
      function setStyle(width, height) {
        zoomDom.style.width = `${width}px`;
        zoomDom.style.height = `${height}px`;
        onMoving && onMoving(ev, { width, height });
      }
      if (offset.x < domSizeWhenClick.width / 2 && offset.y < domSizeWhenClick.height / 2) {
        // 左上角
        dragTopLeft();
      } else if (offset.x > domSizeWhenClick.width / 2 && offset.y < domSizeWhenClick.height / 2) {
        // 右上角
        dragTopRight();
      } else if (offset.x < domSizeWhenClick.width / 2 && offset.y > domSizeWhenClick.height / 2) {
        // 左下角
        dragBottomLeft();
      } else {
        // 右下角
        dragBottomRight();
      }
    }
    // 鼠标抬起
    function up() {
      off(window, 'mousemove', move)();
      onMovingEnd && onMovingEnd();
    }
  };

  const zoomStyle = useMemo(() => {
    return {
      ...style,
      userSelect: notAllowed ? 'none' : '',
      border: noBorder
        ? 'none'
        : `2px solid ${darkTheme ? darkThemeBorderColor : lightThemeBorderColor}`,
    } as React.CSSProperties;
  }, [notAllowed, noBorder]);

  return (
    <ZoomStyle>
      <div className={classNames} style={zoomStyle} ref={zoomRef} onMouseDown={chooseZoomBox}>
        {children}
      </div>
    </ZoomStyle>
  );
};

export default memo(Zoombox);
