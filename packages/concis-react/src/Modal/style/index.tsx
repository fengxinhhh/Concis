import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisModalLightBorder = '#e5e6eb',
  concisModalDarkBorder = '#484849',
  concisModalTopTransform = '30%',
  concisModalLeftTransform = '50%',
  {
    concisRadiusXs,
    concisTransformLg,
    concisTransformSm,
    concisFontLg,
    concisFontSm,
    concisFontMd,
  } = commonStyle;

const darkModalStyle = `
  .concis-dark-modal {
    &-dialog {
      background: rgba(23, 23, 26, 60%);
    }

    &-content {
      color: #c4c4c5;
      background: #2a2a2b;

      &-header {
        .concis-title {
          border-bottom: 1px solid ${concisModalDarkBorder};
        }
      }

      &-view {
        border-bottom: 1px solid ${concisModalDarkBorder};
      }
    }
  }
`;

const animationStyle = `
  .fadeModal-enter,
  .fadeModal-appear {
    opacity: 0;
  }

  .fadeModal-enter-active,
  .fadeModal-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fadeModal-exit {
    opacity: 1;
  }

  .fadeModal-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  .fadeContent-enter,
  .fadeContent-appear {
    opacity: 0;
  }

  .fadeContent-enter-active,
  .fadeContent-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fadeContent-exit {
    opacity: 1;
  }

  .fadeContent-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  @media screen and (max-width: 767px) {
    .concis-modal {
      &-content {
        width: 90vw;
      }
    }
  }
`;

const ModalStyle = styled.div<{ modalWidth }>`
  .concis-modal,
  .concis-dark-modal {
    &-dialog {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1001;
      width: 100vw;
      height: 100vh;
      background: rgba(29, 33, 41, 60%);
      transition: 0.1s linear;
    }

    &-content {
      position: absolute;
      top: ${concisModalTopTransform};
      left: ${concisModalLeftTransform};
      z-index: 1002;
      width: ${({ modalWidth }) =>
        typeof modalWidth === 'string' ? modalWidth : `${modalWidth}%`};
      overflow-x: auto;
      background: #fff;
      border-radius: ${concisRadiusXs};
      transform: translate(-50%, -50%);

      &-header {
        .concis-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${concisTransformLg};
          font-weight: 500;
          border-bottom: 1px solid ${concisModalLightBorder};

          .title {
            span {
              margin-left: ${concisTransformSm};
              font-size: ${concisFontLg};
            }
          }

          .close-icon {
            font-size: ${concisFontSm};
            cursor: pointer;
          }
        }
      }

      &-view {
        padding: ${concisTransformLg} 24px;
        font-size: ${concisFontMd};
        border-bottom: 1px solid ${concisModalLightBorder};
      }

      &-footer {
        width: 100%;
        padding: 16px ${concisTransformLg};
        text-align: right;

        .button {
          .concis-button-text,
          .concis-button-primary {
            height: 30px !important;
          }
        }

        .cancel-btn {
          margin-right: ${concisTransformSm};
        }
      }
    }
  }

  ${darkModalStyle}

  ${animationStyle}
`;

export { ModalStyle };
