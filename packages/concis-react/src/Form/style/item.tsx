import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisRedColor = '#f53f3f',
  concisHalfOpacity = '0.5',
  concisNoneOpacity = 0,
  concisFullOpacity = 1,
  { concisTransformLg, concisFontMd, concisTransformXs, concisFontSm } = commonStyle;

const FormItemStyle = styled.div`
  .concis-form-item {
    position: relative;
    display: flex;
    margin-bottom: ${concisTransformLg};
    font-size: ${concisFontMd};

    &-label {
      position: relative;
      top: ${concisTransformXs};
      min-width: 100px;
      margin-right: ${concisTransformLg};
      color: #4e5969;
      text-align: right;

      svg {
        position: relative;
        bottom: 2px;
        margin-right: 4px;
        color: ${concisRedColor};
      }
    }

    &-disabled {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      cursor: not-allowed;
      opacity: ${concisHalfOpacity};
    }

    .hide-rule-label,
    .show-rule-label {
      position: absolute;
      bottom: calc(-1 * ${concisTransformLg});
      left: 0;
      color: ${concisRedColor};
      font-size: ${concisFontSm};
      opacity: ${concisNoneOpacity};
      transition: 0.2s linear;
    }

    .hide-rule-label {
      opacity: ${concisNoneOpacity};
    }

    .show-rule-label {
      opacity: ${concisFullOpacity};
    }
  }
`;

export { FormItemStyle };
