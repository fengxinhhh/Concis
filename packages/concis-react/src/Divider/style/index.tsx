import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisRadiusSm, concisDarkFontColor } = commonStyle;

const DividerStyle = styled.div`
  .concis-divider {
    &-line {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 ${concisRadiusSm};
    }

    &-before-line-text,
    &-after-line-text {
      flex: 1;
      height: 1px;
      color: #dcdcdc;
      border-color: inherit;
      border-bottom: 1px solid;
    }

    &-line-text {
      padding: 0 20px;
      color: #000;
      font-size: 14px;
    }
  }

  .concis-dark-divider {
    &-line {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 ${concisRadiusSm};
    }

    &-before-line-text,
    &-after-line-text {
      flex: 1;
      height: 1px;
      color: #484849;
      border-color: inherit;
      border-bottom: 1px solid;
    }

    &-line-text {
      padding: 0 20px;
      color: ${concisDarkFontColor};
      font-size: 14px;
    }
  }
`;

export { DividerStyle };
