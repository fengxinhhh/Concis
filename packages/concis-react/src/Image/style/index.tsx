import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisImageBtnSize = '20px',
  { concisFontLg } = commonStyle;

const animationStyle = `
  .fadeImage-enter,
  .fadeImage-appear {
    opacity: 0;
  }

  .fadeImage-enter-active,
  .fadeImage-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fadeImage-exit {
    opacity: 1;
  }

  .fadeImage-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;

const ImageStyle = styled.span`
  .concis-image,
  .concis-dark-image {
    position: relative;
    display: inline-block;
    vertical-align: top;

    img {
      vertical-align: middle;
    }

    // 适应容器方式
    .concis-image-fill {
      object-fit: fill;
    }

    .concis-image-contain {
      object-fit: contain;
    }

    .concis-image-cover {
      object-fit: cover;
    }

    .concis-image-none {
      object-fit: none;
    }

    .concis-image-scale-down {
      object-fit: scale-down;
    }

    .concis-image-caption {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 30%);
      padding: 7px 16px;
      box-sizing: border-box;
      color: #fff;
      font-size: ${concisFontLg};
      text-align: left;
      word-break: break-all;
    }
  }

  .concis-preview-image {
    cursor: pointer;

    .preview-image-mask {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: rgba(0, 0, 0, 50%);
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;

      span {
        margin: 0 3px;
      }
    }

    &:hover .preview-image-mask {
      opacity: 1;
    }
  }

  .preview-image-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100vw;
    height: 100vh;
    background: rgba(29, 33, 41, 60%);
    transition: 0.1s linear;
    user-select: none;

    img {
      user-select: none;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      max-height: 100%;
      max-width: 100%;
      transition: 0.2s;
    }

    .preview-image-progress {
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-size: ${concisFontLg};
    }

    .preview-image-prev,
    .preview-image-next,
    .preview-image-close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-size: ${concisImageBtnSize};
      color: rgba(255, 255, 255, 80%);
      background: rgba(0, 0, 0, 10%);
      border-radius: 50%;
      margin: auto;
      cursor: pointer;
    }

    .preview-btn-disabled {
      color: rgba(255, 255, 255, 10%);
      cursor: not-allowed !important;
    }

    .preview-image-prev {
      left: 30px;
      top: 0;
      bottom: 0;
    }

    .preview-image-next {
      right: 30px;
      top: 0;
      bottom: 0;
    }

    .preview-image-close {
      right: 30px;
      top: 30px;
    }

    .preview-image-operations {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 270px;
      height: 44px;
      color: #fff;
      font-size: ${concisImageBtnSize};
      background: rgba(0, 0, 0, 10%);
      border-radius: 30px;
      margin: auto;

      span {
        cursor: pointer;
      }
    }
  }

  ${animationStyle}
`;

export { ImageStyle };
