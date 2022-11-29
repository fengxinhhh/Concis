import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisRateDefaultSize = '30px',
  { concisTransformSm } = commonStyle;

const animationStyle = `
  .rate-option-enter {
    transform: scale(1);
  }

  .rate-option-enter-active {
    transform: scale(1.2);
    transition: transform 300ms;
  }

  .rate-option-exit {
    transform: scale(1.2);
  }

  .rate-option-exit-active {
    transform: scale(1.2);
    transition: transform 300ms;
  }
`;

const RateStyle = styled.div`
  .concis-rate {
    .rate-container {
      display: flex;
      width: 100%;

      .rate-box {
        position: relative;
        width: ${concisRateDefaultSize};
        height: ${concisRateDefaultSize};
        margin-right: 8px;

        .rate-row {
          color: #f6dd06;
          transition: 0.2s linear;

          &:hover:not(.readonly-rate-row) {
            transform: scale(1.2);
            cursor: pointer;
          }
        }

        &:last-of-type {
          position: relative;
          padding-right: ${concisTransformSm};
        }
      }
    }
  }

  ${animationStyle}
`;

export { RateStyle };
