import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisWhiteColor = '#ffffff',
  concisDisabledColor = '#d9d9d9';

const {
  concisFontSm,
  concisFontMd,
  concisDarkFontColor,
  concisPrimaryColor,
  concisDarkPrimaryColor,
} = commonStyle;

function getActiveCheckboxColor(activeColor, darkTheme) {
  return activeColor || (darkTheme ? concisDarkPrimaryColor : concisPrimaryColor);
}

const checkGroupStyle = `
.concis-checkGroup,
.concis-dark-checkGroup {
  .checkbox {
    display: flex;
    align-items: center;
  }

  .groupBox {
    margin-right: 10px;
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
}

.concis-dark-checkbox,
.concis-dark-checkGroup {
  .text {
    color: ${concisDarkFontColor};
  }
}
`;

const CheckBoxStyle = styled.span<{ activeColor; darkTheme }>`
  .concis-checkbox,
  .concis-checkGroup,
  .concis-dark-checkbox,
  .concis-dark-checkGroup {
    display: inline-block;
    cursor: pointer;

    .concis-checkbox-content {
      display: flex;
      align-items: center;
    }

    &-actived,
    &-noActived,
    &-disabled {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${concisFontSm};
      height: ${concisFontSm};
      margin-left: 5px;
      padding: 7px;
      box-sizing: border-box;
      transition: 0.2s linear;
      border-radius: 5px;
    }

    &-disabled {
      border: 1px solid #858585;
      cursor: not-allowed;
    }

    &-actived {
      color: ${concisWhiteColor};
      background: ${({ activeColor, darkTheme }) => getActiveCheckboxColor(activeColor, darkTheme)};
      border: 1px solid
        ${({ activeColor, darkTheme }) => getActiveCheckboxColor(activeColor, darkTheme)};
    }

    &-noActived {
      color: ${concisWhiteColor};
      background: ${concisWhiteColor};
      border: 1px solid ${concisDisabledColor};

      &:hover {
        border: 1px solid #afacac;
      }
    }

    .text {
      margin-left: 5px;
      font-size: ${concisFontMd};
      user-select: none;
    }

    .disabled {
      cursor: not-allowed;
    }
  }

  .disabled-checkbox {
    cursor: not-allowed;
    opacity: 0.3;

    .concis-checkbox-disabled {
      border: 1px solid #858585;
    }
  }

  ${checkGroupStyle}
`;

export { CheckBoxStyle };
