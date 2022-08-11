import React, { FC, useState, useContext, useEffect, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  EyeOutlined,
  RightOutlined,
  LeftOutlined,
  CloseOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomOutOutlined,
  ZoomInOutlined,
} from '@ant-design/icons';
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
    preview = false,
    showOperation = true,
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
  // 旋转角度
  const [rotate, setRotate] = useState(0);
  // 预览列表
  const [previewList, setPreviewList] = useState<string[]>([]);
  // 预览下标
  const [previewShowIndex, setPreviewShowIndex] = useState(0);

  // 预览
  const handlePreview = (e: any) => {
    e.stopPropagation();
    if (previewList.length) {
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

  // 旋转
  const handleRotate = (e: any, val: number) => {
    e.stopPropagation();
    setRotate(rotate + val);
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

  // 上一张预览图
  const showPreviousImage = (e: any) => {
    e.stopPropagation();
    if (previewShowIndex - 1 < 0) return;
    setScale(1);
    setRotate(0);
    setPreviewShowIndex(previewShowIndex - 1);
  };

  // 上一张预览图
  const showNextImage = (e: any) => {
    e.stopPropagation();
    if (previewShowIndex + 1 > previewList.length - 1) return;
    setScale(1);
    setRotate(0);
    setPreviewShowIndex(previewShowIndex + 1);
  };

  // 禁止页面滚动
  useOverFlowScroll('body', visible as boolean);

  useEffect(() => {
    if (Array.isArray(preview)) {
      setPreviewList(preview);
    } else if (preview && src) {
      setPreviewList([src]);
    } else {
      return;
    }
    window.addEventListener('click', handleClose);
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
          <div className="preview-image-wrap" onWheel={onImgMousewheel}>
            <img
              className="preview-show-image"
              src={previewList[previewShowIndex]}
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg)`,
              }}
            />

            {/* 切换前后图片 */}
            {previewList.length > 1 && (
              <>
                <div
                  className={`preview-image-prev ${
                    previewShowIndex === 0 ? 'preview-btn-disabled' : ''
                  }`}
                  onClick={showPreviousImage}
                >
                  <LeftOutlined />
                </div>

                <div
                  className={`preview-image-next ${
                    previewShowIndex === previewList.length - 1 ? 'preview-btn-disabled' : ''
                  }`}
                  onClick={showNextImage}
                >
                  <RightOutlined />
                </div>
              </>
            )}
            {/* 关闭预览 */}
            <div className="preview-image-close">
              <CloseOutlined />
            </div>
            {/* 操作栏 */}
            {showOperation && (
              <div className="preview-image-operations">
                <RotateLeftOutlined onClick={(e) => handleRotate(e, -90)} />
                <RotateRightOutlined onClick={(e) => handleRotate(e, 90)} />
                <ZoomOutOutlined
                  className={scale <= 0.2 ? 'preview-btn-disabled' : ''}
                  onClick={handleSmall}
                />
                <ZoomInOutlined
                  className={scale >= 10 ? 'preview-btn-disabled' : ''}
                  onClick={handleLarge}
                />
              </div>
            )}
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default memo(Image);
