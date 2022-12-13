import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisRadioSize = '15px',
  concisRadioBoxHeight = '32px',
  { concisTransformXs, concisRadiusLg, concisFontMd, concisTransformLg, concisDisabledColor } =
    commonStyle;

const darkRadioStyle = `
  .concis-dark-radio-group {
    .groupDisabledStyle,
    .disabledLabel {
      color: #bbb8b8 !important;
    }

    .groupActive {
      background: @concis-dark-primary-color;
    }

    .groupStyle:hover {
      color: @concis-dark-primary-color;
    }
  }
`;

const RadioStyle = styled.div<{ globalColor }>`
  .concis-radio-group,
  .concis-dark-radio-group {
    display: flex;
    align-items: center;
    height: ${concisRadioBoxHeight};

    .radioBox {
      display: flex;
      align-items: center;
      height: ${concisRadioBoxHeight};
      margin: 0 ${concisTransformXs};
      cursor: pointer;

      .radio-checked,
      .radio {
        box-sizing: border-box;
        width: ${concisRadioSize};
        height: ${concisRadioSize};
        margin-right: ${concisTransformXs};
        background: #fff;
        border-radius: ${concisRadiusLg};
        cursor: pointer;
        transition: 0.1s linear;
      }

      .radio-checked {
        border: 5px solid ${({ globalColor }) => globalColor};
      }

      .radio {
        border: 2px solid rgb(226, 226, 226);
      }

      .disabledRadio {
        cursor: not-allowed;
      }

      .radioLabel {
        font-size: ${concisFontMd};
      }

      .disabledLabel {
        color: #00000040;
        font-size: ${concisFontMd};
      }
    }

    .addOption {
      display: flex;
      flex-direction: row;
    }

    .groupDisabledStyle,
    .groupStyle,
    .groupActive {
      display: inline-block;
      height: ${concisRadioBoxHeight};
      margin: 0;
      padding: 0 ${concisTransformLg};
      color: #000000d9;
      font-size: ${concisFontMd};
      line-height: 30px;
    }

    .groupDisabledStyle {
      background: #00000040;
      border: 1px solid ${concisDisabledColor};
      cursor: pointer;
      opacity: 0.7;
    }

    .groupStyle {
      background: #fff;
      border: 1px solid ${concisDisabledColor};
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        color: ${({ globalColor }) => globalColor};
      }
    }

    .groupActive {
      color: #fff;
      background: ${({ globalColor }) => globalColor};
      border: 1px solid ${concisDisabledColor};
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  ${darkRadioStyle}
`;

export { RadioStyle };
