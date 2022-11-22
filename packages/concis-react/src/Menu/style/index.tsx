import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisOptionHeight = '50px',
  optionWidth = '220px',
  { concisFontMd, concisTransformSm, concisTransformXs, concisDarkPrimaryColor } = commonStyle;

function getWidth(width) {
  if (width) {
    if (typeof width === 'string') {
      return css`
        width: ${(width as string).includes('%') ? width : `${width}px`};
      `;
    }
    if (typeof width === 'number') {
      return css`
        width: ${width}px;
      `;
    }
  }
  return css`
    width: ${optionWidth};
  `;
}

const darkMenuStyle = `
  .concis-dark-menu {
    &-fatherTitle {
      &:hover {
        color: ${({ menuOptionBg }) => menuOptionBg};
      }
    }

    &-childMenuOptions {
      color: #fff;

      &:hover {
        color: ${({ menuOptionBg }) => menuOptionBg};
      }
    }

    .active {
      color: #fff !important;
      background: rgba(60, 126, 255, 50%);

      .concis-dark-menu-fatherTitle:hover {
        color: #fff !important;
      }
    }
  }
`;

const MenuStyle = styled.div<{ globalColor; menuOptionBg; width }>`
  .concis-menu,
  .concis-dark-menu {
    padding: 2px 0;
    user-select: none;
    ${({ width }) => getWidth(width)}

    &-menuOptions {
      padding: 0 ${concisTransformSm};
      overflow: hidden;
      font-size: ${concisFontMd};
      line-height: ${concisOptionHeight};
      cursor: pointer;
      transition: 0.2s linear;
    }

    &-fatherTitle,
    &-activeFatherTitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${concisOptionHeight};

      .left {
        i {
          margin-right: ${concisTransformSm};
        }
      }
    }

    &-activeMenuOptions,
    &-childMenuOptions {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-left: ${concisTransformXs};
      overflow: hidden;
      font-size: ${concisFontMd};
      line-height: ${concisOptionHeight};
      cursor: pointer;
      transition: 0.2s linear;
    }

    .active {
      border-radius: 15px 0 0 15px;
    }
  }

  .concis-menu {
    color: black;
    background-color: #fff;

    &-fatherTitle,
    &-activeFatherTitle {
      &:hover {
        color: ${({ globalColor }) => globalColor};
      }
    }

    &-activeFatherTitle {
      color: ${({ globalColor }) => globalColor};
    }

    &-activeMenuOptions {
      color: ${({ globalColor }) => globalColor};
      background-color: ${({ menuOptionBg }) => menuOptionBg};

      ::after {
        width: 3px;
        height: ${concisOptionHeight};
        background-color: ${concisDarkPrimaryColor};
        content: '';
      }
    }
  }

  ${darkMenuStyle}
`;

export { MenuStyle };
