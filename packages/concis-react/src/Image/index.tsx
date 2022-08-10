import React, { FC, useState, useContext, useEffect, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { EyeOutlined } from '@ant-design/icons';
import { ImageProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import useOverFlowScroll from '../common_utils/hooks/useOverFlowScroll';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Image: FC<ImageProps> = (props) => {
  const {
    src,
    alt,
    fit,
    draggable = true,
    className,
    style,
    width,
    height,
    round,
    preview,
    caption,
    captionStyle,
  } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    className,
    `concis-${darkTheme ? 'dark-' : ''}image`,
    `${preview ? 'concis-preview-image' : ''}`
  );

  // 显示预览大图
  const [visible, setVisible] = useState(false);
  // 缩放比例
  const [scale, setScale] = useState(1);

  // 预览
  const handlePreview = (e: any) => {
    e.stopPropagation();
    if (preview) {
      setVisible(true);
    }
  };

  // 关闭预览
  const handleClose = (e: any) => {
    e.stopPropagation();
    setVisible(false);
  };

  // 缩小
  const handleSmall = (e?: any) => {
    e?.stopPropagation();
    if (scale <= 0.2) {
      return;
    }
    setScale(scale - 0.1);
  };

  // 放大
  const handleLarge = (e?: any) => {
    e?.stopPropagation();
    if (scale >= 10) {
      return;
    }
    setScale(scale + 0.1);
  };

  // 滚轮缩放
  const onImgMousewheel = (e: any) => {
    e.stopPropagation();
    if (e.deltaY > 1) {
      handleSmall();
      return;
    }
    handleLarge();
  };

  // 禁止页面滚动
  useOverFlowScroll('body', visible as boolean);

  useEffect(() => {
    preview && window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [preview]);

  return (
    <>
      <div className={classNames} style={{ ...style }} onClick={handlePreview}>
        <img
          src={src}
          alt={alt}
          draggable={draggable}
          className={`${fit ? `concis-image-${fit}` : ''}`}
          style={{ width, height, borderRadius: round }}
        />

        {caption && (
          <div
            className="concis-image-caption"
            style={{
              ...captionStyle,
              borderBottomLeftRadius: round,
              borderBottomRightRadius: round,
            }}
          >
            {caption}
          </div>
        )}
        {preview && (
          <div className="preview-image-mask">
            <EyeOutlined />
            <span>预览</span>
          </div>
        )}
      </div>
      {preview && (
        <CSSTransition
          in={visible}
          timeout={200}
          appear
          mountOnEnter
          classNames="fadeImage"
          unmountOnExit
          onEnter={(e: HTMLDivElement) => {
            e.style.display = 'block';
          }}
          onExited={(e: HTMLDivElement) => {
            e.style.display = 'none';
          }}
        >
          <div
            className="preview-image-wrap"
            // style={{ display: visible ? 'block' : 'none' }}
            onWheel={onImgMousewheel}
          >
            <img
              className="preview-show-image"
              src={src}
              style={{
                transform: `scale(${scale})`,
              }}
            />
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default memo(Image);
