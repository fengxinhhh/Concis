import React, { useState, useContext, useEffect, forwardRef, useMemo } from 'react';
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

const Image = (props, ref) => {
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
    previewRender,
  }: ImageProps = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    className,
    `concis-${darkTheme ? 'dark-' : ''}image`,
    `${preview ? 'concis-preview-image' : ''}`,
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

  useEffect(() => {
    if (!preview) return;
    getPreviewPath();
    window.addEventListener('click', handleClose);
    function getPreviewPath() {
      if (Array.isArray(preview)) {
        setPreviewList(preview);
      } else if (preview && src) {
        setPreviewList([src]);
      }
    }
    return () => {
      preview && window.removeEventListener('click', handleClose);
    };
  }, [preview]);

  // 预览
  const handlePreview = (e) => {
    e?.stopPropagation();
    if (previewList.length) {
      setVisible(true);
    }
  };

  // 关闭预览
  const handleClose = async (e) => {
    e?.stopPropagation();
    setVisible(false);
    // 计算动画时间，在预览窗消失后重置预览图状态
    function sleep() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, 200);
      });
    }
    await sleep();
    setRotate(0);
    setScale(1);
  };

  // 放大与缩小图片
  const toggleImageSize = (toggleType: 'small' | 'large', e) => {
    e?.stopPropagation();
    if ((toggleType === 'small' && scale <= 0.2) || (toggleType === 'large' && scale >= 10)) return;
    setScale(toggleType === 'small' ? scale - 0.1 : scale + 0.1);
  };

  // 旋转
  const handleRotate = (e, val: number) => {
    e.stopPropagation();
    setRotate(rotate + val);
  };

  // 滚轮缩放
  const onImgMousewheel = (e) => {
    e.stopPropagation();
    if (e.deltaY > 1) {
      toggleImageSize('small', e);
      return;
    }
    toggleImageSize('large', e);
  };

  const toggleImage = (toggleType: 'next' | 'prev', e) => {
    e.stopPropagation();
    if (
      (toggleType === 'next' && previewShowIndex + 1 > previewList.length - 1) ||
      (toggleType === 'prev' && previewShowIndex - 1 < 0)
    )
      return;
    setScale(1);
    setRotate(0);
    setPreviewShowIndex(toggleType === 'next' ? previewShowIndex + 1 : previewShowIndex - 1);
  };

  // 禁止页面滚动
  useOverFlowScroll('body', visible as boolean);

  // 遮罩层
  const renderPreviewDialog = useMemo(() => {
    // preview option项className
    function zoomIconClass(type: 'large' | 'small' | 'next' | 'prev') {
      if (
        (type === 'large' && scale >= 10) ||
        (type === 'small' && scale <= 0.2) ||
        (type === 'next' && previewShowIndex === previewList.length - 1) ||
        (type === 'prev' && previewShowIndex === 0)
      ) {
        return 'preview-btn-disabled';
      }
      return '';
    }

    return (
      <>
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
                  <div className="preview-image-progress">
                    {`${previewShowIndex + 1} / ${previewList.length}`}
                  </div>
                  <div
                    className={cs('preview-image-prev', zoomIconClass('prev'))}
                    onClick={(e) => toggleImage('prev', e)}
                  >
                    <LeftOutlined />
                  </div>
                  <div
                    className={cs('preview-image-next', zoomIconClass('next'))}
                    onClick={(e) => toggleImage('next', e)}
                  >
                    <RightOutlined />
                  </div>
                </>
              )}
              {/* 关闭预览 */}
              <div className="preview-image-close" onClick={handleClose}>
                <CloseOutlined />
              </div>
              {/* 操作栏 */}
              {showOperation && (
                <div className="preview-image-operations">
                  <RotateLeftOutlined onClick={(e) => handleRotate(e, -90)} />
                  <RotateRightOutlined onClick={(e) => handleRotate(e, 90)} />
                  <ZoomOutOutlined
                    className={zoomIconClass('small')}
                    onClick={(e) => toggleImageSize('small', e)}
                  />
                  <ZoomInOutlined
                    className={zoomIconClass('large')}
                    onClick={(e) => toggleImageSize('large', e)}
                  />
                </div>
              )}
            </div>
          </CSSTransition>
        )}
      </>
    );
  }, [preview, visible, scale, rotate, previewList, previewShowIndex, showOperation]);

  return (
    <>
      <div className={classNames} style={{ ...style }} ref={ref}>
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
            {previewRender ? previewRender(handlePreview) : <EyeOutlined onClick={handlePreview} />}
          </div>
        )}
      </div>
      {renderPreviewDialog}
    </>
  );
};

export default forwardRef<unknown, ImageProps>(Image);
