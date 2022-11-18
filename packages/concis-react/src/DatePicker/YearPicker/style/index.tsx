import styled, { css } from 'styled-components';
import { commonStyle } from '../../../styles/common';

const { concisRadiusXs } = commonStyle;

const darkYearPickerStyle = `
  .concis-dark-year-picker {
    table tr .disable:not(.day-empty) {
      background: #515357;
    }

    .year-picker-select {
      .left-select,
      .right-select {
        span {
          &:hover {
            background-image: linear-gradient(#5c5c5c, #5c5c5c);
          }
        }
      }
    }
  } 
`;

function getActiveStyle(activedColor) {
  return css`
    background-image: linear-gradient(${activedColor}, ${activedColor});
  `;
}

const YearPickerStyle = styled.div<{ activedOptionColor }>`
  .concis-year-picker,
  .concis-dark-year-picker {
    font-size: 12px;

    .year-picker-select {
      display: flex;
      justify-content: space-around;
      padding: 6px 0;
      border-bottom: 1px solid #e0e0e0;

      .left-select,
      .right-select {
        span {
          width: 25px;
          height: 25px;
          font-size: 13px;

          svg {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          //dis
          &:hover {
            background-image: linear-gradient(#e0e0e0, #e0e0e0);
            background-position: center;
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }

      .middle-select {
        display: flex;
        align-items: center;
      }
    }

    table {
      width: 100%;
      padding: 10px;
      tr {
        display: flex;

        td,
        th {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 64px;
          height: 32px;
          border-radius: 16px;

          span {
            padding: 8px;
          }

          &:hover:not(th, .day-empty, .disable, .active) span {
            color: #fff0ec;
            background-position: center;
            border-radius: ${concisRadiusXs};
            cursor: pointer;
            ${({ activedOptionColor }) => getActiveStyle(activedOptionColor)}
          }
        }

        .disable:not(.day-empty) {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: ${concisRadiusXs};
          cursor: not-allowed;
          opacity: 1;
        }

        .active span {
          color: #fff0ec;
          background-size: 150%;
          border-radius: ${concisRadiusXs};
          ${({ activedOptionColor }) => getActiveStyle(activedOptionColor)}
        }
      }
    }
  }

  .pop-dialog {
    padding: 0;
  }

  ${darkYearPickerStyle}
`;

export { YearPickerStyle };
