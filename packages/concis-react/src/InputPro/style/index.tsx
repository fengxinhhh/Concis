import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisInputProShadow =
    '0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926',
  {
    concisTransformXs,
    concisRadiusXs,
    concisTransformMd,
    concisFontMd,
    concisDarkFontColor,
    concisPrimaryColor,
  } = commonStyle;

const animationStyle = `
  .input-pro-tragger-enter,
  .input-pro-tragger-appear {
    opacity: 0;
  }

  .input-pro-tragger-enter-active,
  .input-pro-tragger-appear-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .input-pro-tragger-exit {
    opacity: 1;
  }

  .input-pro-tragger-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

function getInputProTraggerStyle(align) {
  const alignMap = {
    top: {
      left: '25%',
      bottom: 'calc(100% + 5px)',
    },
    bottom: {
      left: '25%',
      top: 'calc(100% + 5px)',
    },
    left: {
      left: '-50%',
      top: '-120%',
    },
    right: {
      right: '-50%',
      top: '-120%',
    },
  };
  return css`
    ${alignMap[align]}
  `;
}

const InputProStyle = styled.span<{ selectColor; align }>`
  .concis-input-pro,
  .concis-dark-input-pro {
    position: relative;
    display: inline-block;

    &-tragger {
      position: absolute;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      padding: ${concisTransformXs} 0;
      background: #fff;
      border-radius: ${concisRadiusXs};
      box-shadow: ${concisInputProShadow};
      ${({ align }) => getInputProTraggerStyle(align)}

      .option,
      .selected-option,
      .disabled-option {
        padding: 7px ${concisTransformMd};
        color: #000;
        font-size: ${concisFontMd};
        cursor: pointer;

        &:hover:not(.disabled-option) {
          color: ${({ selectColor }) => selectColor || concisPrimaryColor};
        }
      }

      .disabled-option {
        color: #c9cdd4;
        cursor: not-allowed;
      }

      .selected-option {
        color: ${({ selectColor }) => selectColor || concisPrimaryColor};
      }
    }
  }

  .concis-dark-input-pro {
    &-tragger {
      background: #333;

      .option,
      .selected-option,
      .disabled-option {
        color: #9b9b9b;

        &:hover:not(.disabled-option) {
          color: ${concisDarkFontColor};
          background: #292929;
        }
      }

      .disabled-option {
        color: #59595a;
      }

      .selected-option {
        color: ${concisDarkFontColor};
      }
    }
  }

  ${animationStyle}
`;

export { InputProStyle };
