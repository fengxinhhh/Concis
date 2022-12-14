import styled, { css } from 'styled-components';
import { commonStyle } from '../../../styles/common';

const concisWhiteColor = '#ffffff',
  { concisTransformXs, concisFontMd, concisRadiusXs, concisTransformLg } = commonStyle;

function getActiveColor(color) {
  return css`
    color: #fff;
    background: ${color};
    font-weight: bold;
    border-radius: 5px;
  `;
}

function getAlignTransform(align) {
  const alignMap = {
    left: {
      right: '100%',
      bottom: '20px',
    },
    right: {
      left: '100%',
      bottom: '20px',
    },
    top: {
      bottom: '50px',
    },
    bottom: {
      top: '40px',
    },
  };
  return css`
    ${alignMap[align]}
  `;
}

const animationStyle = css`
  .fadeIn-enter,
  .fadeIn-appear {
    opacity: 0;
  }

  .fadeIn-enter-active,
  .fadeIn-appear-active {
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 0.3s linear;
  }
`;

const RangeDatePickerStyle = styled.span<{ activedColor; align }>`
  .concis-range-picker,
  .concis-dark-range-picker {
    position: relative;
    user-select: none;
    display: inline-block;

    .rangePicker {
      position: relative;
      display: flex;
      align-items: center;

      .activeBorder {
        position: absolute;
        bottom: -2px;
        left: 0;
        z-index: 99;
        width: 100px;
        height: 3px;
        transition: 0.3s linear;
        ${({ activedColor }) => getActiveColor(activedColor)}
      }
    }

    .date-box {
      position: absolute;
      z-index: 999;
      display: flex;
      width: 550px;
      padding: 20px 0;
      background-color: ${concisWhiteColor};
      box-shadow: 0 0 5px 2px #d0d0d0;
      transition: 0.2s linear;
      border-radius: 10px;
      margin-top: 20px;
      ${({ align }) => getAlignTransform(align)}

      .left {
        width: 50%;
        padding: 0 ${concisTransformXs};
        font-size: ${concisFontMd};

        .top-bar,
        .week {
          display: flex;
          justify-content: space-between;
        }

        .week {
          margin-top: 20px;
          padding: 0 25px 0 12px;
        }

        .day-list {
          display: flex;
          flex-wrap: wrap;

          .box-list {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            transition: 0.3s linear;

            &:hover {
              color: ${concisWhiteColor};
              border-radius: 5px;
              ${({ activedColor }) => getActiveColor(activedColor)}
            }
          }

          .actived {
            ${({ activedColor }) => getActiveColor(activedColor)}
          }

          .white {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
        }
      }

      .right {
        width: 50%;
        padding: 0 ${concisTransformXs};
        font-size: 14px;

        .top-bar,
        .week {
          display: flex;
          justify-content: space-between;
        }

        .week {
          margin-top: ${concisTransformLg};
          padding: 0 25px 0 12px;
        }

        .day-list {
          display: flex;
          flex-wrap: wrap;

          .day-box {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;

            &:hover {
              color: ${concisWhiteColor};
              border-radius: ${concisRadiusXs};
              ${({ activedColor }) => getActiveColor(activedColor)}
            }
          }

          .actived {
            ${({ activedColor }) => getActiveColor(activedColor)}
          }

          .disabled-day {
            width: 35.7px;
            height: 40px;
            color: #ccc;
            line-height: 40px;
            text-align: center;
            cursor: not-allowed;
          }

          .white {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
        }
      }
    }
  }

  .concis-dark-range-picker {
    .date-box {
      background-color: #373739;

      .day-list .disabled-day {
        opacity: 0.6;
      }
    }
  }

  ${animationStyle}
`;

export { RangeDatePickerStyle };
