import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisPaginationNumboxWidth = '30px',
  concisPaginationNumboxHeight = '30px',
  concisPaginationSelectWidth = '80px',
  { concisTransformXs, concisFontMd, concisRadiusXs, concisTransformSm, concisDarkFontColor } =
    commonStyle;

const darkPaginationStyle = `
  .concis-dark-pagination-numberBox,
  .concis-dark-pagination-next,
  .concis-dark-pagination-prev {
    background-color: transparent;
  }

  .concis-dark-pagination-jumpBox input {
    color: ${concisDarkFontColor};
    background-color: #343436;
    outline: none;
  }
`;

const PaginationStyle = styled.div<{ globalColor }>`
  .concis-pagination,
  .concis-dark-pagination {
    display: flex;

    &-prev,
    &-next,
    &-numberBox,
    &-pageSizeSelect {
      min-width: ${concisPaginationNumboxWidth};
      height: ${concisPaginationNumboxHeight};
      margin: 0 ${concisTransformXs};
      font-size: ${concisFontMd};
      line-height: 30px;
      text-align: center;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: ${concisRadiusXs};
      cursor: pointer;
      user-select: none;
    }

    &-numberBox:hover {
      color: ${({ globalColor }) => globalColor};
      border: 1px solid ${({ globalColor }) => globalColor};
      cursor: pointer;
    }

    &-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &-actived {
      color: ${({ globalColor }) => globalColor};
      border-color: ${({ globalColor }) => globalColor};
    }

    &-pageSizeSelect {
      min-width: ${concisPaginationSelectWidth};
      margin-left: ${concisTransformSm};

      .size {
        margin-right: ${concisTransformXs};
      }

      .options {
        position: relative;
        top: ${concisTransformXs};
        display: flex;
        flex-direction: column;
        width: ${concisPaginationSelectWidth};
        box-shadow: 0 0 20px rgb(218, 218, 218);
        transition: 0.2s linear;

        .option {
          font-size: ${concisFontMd};
          line-height: 2em;
          text-align: center;

          &:hover {
            color: ${({ globalColor }) => globalColor};
          }
        }
      }

      &:hover {
        border: 1px solid ${({ globalColor }) => globalColor};
      }
    }

    &-jumpBox {
      margin-left: 10px;

      &-jump {
        width: 40px;
        height: 25px;
        margin: 0 ${concisTransformSm};
        border: 1px solid #ccc;
        border-radius: ${concisRadiusXs};
        outline-color: ${({ globalColor }) => globalColor};
        transition: 0.2s linear;

        &:hover {
          border-color: ${({ globalColor }) => globalColor};
        }

        &:active {
          border-color: ${({ globalColor }) => globalColor};
        }
      }
    }
  }

  ${darkPaginationStyle}
`;

export { PaginationStyle };
