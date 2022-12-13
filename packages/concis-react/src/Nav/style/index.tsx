import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisTransformSm, concisTransformLg, concisRadiusXs, concisTransformMd } = commonStyle,
  concisNavOptionPadding = `${concisTransformSm} 14px 14px`,
  concisNavOptionHeight = '70px';

const darkNavStyle = `
.concis-dark-nav {
    .concis-nav-bar {
      color: #fff;
    }
  }
`;

const animationStyle = `
  .fadeIn-enter,
  .fadeIn-appear {
    opacity: 0;
  }

  .fadeIn-enter-active,
  .fadeIn-appear-active {
    opacity: 1;
    transition: opacity 0.2s linear;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  .dialogFade-enter,
  .dialogFade-appear {
    opacity: 0;
  }

  .dialogFade-enter-active,
  .dialogFade-appear-active {
    opacity: 1;
    transition: opacity 0.1s linear;
  }

  .dialogFade-exit {
    opacity: 1;
  }

  .dialogFade-exit-active {
    opacity: 0;
    transition: opacity 0.1s linear;
  }
`;

const NavStyle = styled.div`
  .concis-nav,
  .concis-dark-nav {
    display: inline-block;

    .concis-nav-left {
      display: inline-block;
      height: ${concisNavOptionHeight};
      padding: ${concisNavOptionPadding};
    }

    .concis-nav-right {
      display: inline-block;
      height: ${concisNavOptionHeight};
      padding: ${concisNavOptionPadding};
      margin-left: ${concisTransformLg};
    }

    .concis-nav-bar {
      color: #000;
      font-size: 18px;
      display: flex;
      height: ${concisNavOptionHeight};
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      transition: 0.2s linear;

      &-option {
        height: 100%;
        padding: ${concisNavOptionPadding};
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }

      .line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #1890ff;
        transition: 0.2s linear;
        z-index: 500;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 45%;
          width: ${concisTransformLg};
          height: ${concisTransformSm};
          background: url(https://thingsboard.io/images/head-arrow.svg) no-repeat;
        }
      }

      .line-dialog {
        position: absolute;
        top: 100%;
        transition: 0.2s linear;
        background-color: #fff;
        z-index: 499;
        border-radius: ${concisRadiusXs};
        color: #000;
        padding: ${concisTransformMd} ${concisTransformLg};
        overflow: hidden;
        box-shadow: 0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926;
      }

      .line-dialog2 {
        position: absolute;
        top: 100%;
        background-color: #fff;
        z-index: 1;
        border-radius: ${concisRadiusXs};
        color: #000;
        padding: ${concisTransformMd} ${concisTransformLg};
        opacity: 0;
      }
    }
  }

  ${darkNavStyle}

  ${animationStyle}
`;

export { NavStyle };
