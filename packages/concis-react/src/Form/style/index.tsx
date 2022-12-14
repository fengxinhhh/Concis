import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisDarkFontColor } = commonStyle;

const darkFormStyle = `
  .concis-dark-form .concis-form-item-label {
    color: ${concisDarkFontColor};
  }

  .concis-dark-form .disabled,
  .concis-dark-form-item-disabled {
    background-color: transparent;
  }
`;
const FormStyle = styled.div`
  .concis-form,
  .concis-dark-form {
    position: relative;

    .disabled {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      width: 100%;
      height: 100%;
      background: #fff;
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  ${darkFormStyle}
`;

export { FormStyle };
