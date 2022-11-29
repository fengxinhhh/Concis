import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisPcStepSize = '32px',
  concisMobileStepSize = '24px',
  concisAfterStepBg = '#999999',
  {
    concisTransformXs,
    concisTransformSm,
    concisDarkFontColor,
    concisRadiusLg,
    concisFontSm,
    concisFontMd,
    concisFontLg,
    concisTransformMd,
  } = commonStyle;

const StepsStyle = styled.div<{ globalColor }>`
  .concis-steps,
  .concis-dark-steps {
    .step-content {
      position: relative;

      .line {
        position: relative;
        top: 27px;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 2px;
        background: ${({ globalColor }) => globalColor};
      }

      .step-line {
        display: flex;

        .step-box {
          position: relative;
          z-index: 999;
          display: flex;
          align-items: center;
          height: 54px;
          padding: 0 ${concisTransformXs};
          background-color: #fff;
          cursor: pointer;

          &:last-of-type {
            margin-right: 0;

            &::after {
              width: 0;
              height: 0;
            }
          }
          @media screen and (min-width: 1068px) {
            &::after {
              width: 100px;
              height: 2px;
              background-color: ${({ globalColor }) => globalColor};
              content: '';
            }
          }

          .before-index,
          .after-index,
          .active-index {
            width: ${concisPcStepSize};
            height: ${concisPcStepSize};
            line-height: ${concisPcStepSize};
            text-align: center;
            border-radius: ${concisRadiusLg};
          }

          .before-index {
            color: ${({ globalColor }) => globalColor};
            border: 1px solid ${({ globalColor }) => globalColor};
          }

          .after-index {
            color: ${concisAfterStepBg};
            border: 1px solid ${concisAfterStepBg};
          }

          .active-index {
            color: #fff;
            background: ${({ globalColor }) => globalColor};
            border: 1px solid ${({ globalColor }) => globalColor};
          }

          .sub-content {
            position: relative;
            top: ${concisTransformXs};
            display: flex;
            flex-direction: column;
            margin-left: ${concisTransformSm};
            font-size: ${concisFontLg};

            .top {
              .hover-title {
                cursor: pointer;
              }

              .hover-title:hover,
              .light-title:hover {
                color: ${({ globalColor }) => globalColor};
                transition: color 0.3s;
              }

              .grey-title {
                color: #999;
              }

              .light-title {
                color: #000;
              }

              .sub-title {
                margin-left: ${concisTransformSm};
                color: ${concisAfterStepBg};
                font-size: ${concisFontMd};
              }
            }

            .bottom {
              margin-top: ${concisTransformSm};
              font-size: ${concisFontMd};
            }
          }
        }
      }
    }
  }

  .concis-dark-steps .step-content .step-line .step-box {
    background-color: transparent;

    .sub-content .top .light-title {
      color: ${concisDarkFontColor};
    }
  }
  @media screen and (max-width: 1068px) {
    .concis-steps,
    .concis-dark-steps {
      .step-content {
        .step-line {
          .step-box {
            margin-right: 100px;
            font-size: ${concisFontSm};

            &:last-of-type {
              margin-right: 0;
            }

            .before-index,
            .after-index,
            .active-index {
              width: ${concisMobileStepSize};
              height: ${concisMobileStepSize};
            }

            .after-index,
            .active-index {
              line-height: ${concisMobileStepSize};
            }

            .active-index {
              text-align: center;
            }

            .sub-content {
              top: ${concisTransformMd};
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .concis-steps,
    .concis-dark-steps {
      .step-content {
        height: 100%;

        .line {
          height: 100%;
        }

        .step-line {
          flex-direction: column;

          .step-box {
            height: 94px;
            margin-right: 100px;

            .sub-content {
              top: ${concisTransformMd};
            }
          }
        }
      }
    }
  }
`;

export { StepsStyle };
