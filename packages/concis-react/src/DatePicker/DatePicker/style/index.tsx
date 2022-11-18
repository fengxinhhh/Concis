import styled, { css } from 'styled-components';
import { commonStyle } from '../../../styles/common';

const { concisDarkFontColor } = commonStyle;

const darkDatePickerStyle = `
  .concis-dark-date-picker {
    .input {
      color: ${concisDarkFontColor};
      background-color: transparent;
    }

    .disable:not(.day-empty) {
      background: #5c5c5c !important;
    }

    .date-picker-select {
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

const DatePickerStyle = styled.div<{ activedOptionColor }>`
  .concis-date-picker,
  .concis-dark-date-picker {
    font-size: 15px;

    .date-picker-select {
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
          width: 32px;
          height: 32px;
          margin: 5px 0;
          border-radius: 50%;

          &:hover:not(th, .day-empty, .disable, .active) {
            color: #fff;
            background-position: center;
            cursor: pointer;
            ${({ activedOptionColor }) => getActiveStyle(activedOptionColor)}
          }
        }

        .disable:not(.day-empty) {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: 0;
          cursor: not-allowed;
          opacity: 1;
        }

        .active {
          color: #fff;
          ${({ activedOptionColor }) => getActiveStyle(activedOptionColor)}
        }
      }

      .empty-row {
        height: 42px;
      }
    }
  }

  .concis-date-picker .pop-dialog {
    padding: 0;
  }

  ${darkDatePickerStyle}
`;

export { DatePickerStyle };
