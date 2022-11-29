import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisTableSearchBtnSize = '32px',
  concisTableSearchBtnThHeight = '40px',
  { concisFontMd, concisTransformSm, concisFontSm, concisPrimaryColor } = commonStyle;

function getPaginationAlignStyle(align) {
  const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };
  if (!align) {
    return css`
      justify-content: flex-start;
    `;
  }
  return css`
    justify-content: ${alignMap[align]};
  `;
}

const TableStyle = styled.div<{ paginationAlign }>`
  .concis-table-container,
  .concis-dark-table-container {
    position: relative;

    .table {
      display: flex;
      font-size: ${concisFontMd};

      table {
        border: none;
        border-collapse: collapse;

        tr:first-of-type {
          border-top: 1px solid #e5e5e6;
        }

        tr {
          height: ${concisTableSearchBtnThHeight};
          border: 1px solid #e5e5e6;

          .sort-icon {
            display: flex;
            flex-direction: column;
            float: left;
            margin-left: ${concisTransformSm};
            color: #a9adb2;
            font-size: ${concisFontSm};
            cursor: pointer;
          }
        }

        td,
        th {
          padding: ${concisTransformSm} 30px;
          text-align: left;

          .radioBox {
            cursor: pointer;
          }
        }
      }

      .search-th-btn {
        width: 24px;
        height: ${concisTableSearchBtnThHeight};
        margin-left: ${concisTransformSm};
        font-size: 17px;
        line-height: ${concisTableSearchBtnThHeight};
        text-align: center;
        cursor: pointer;
        transition: 0.2s linear;

        &:hover,
        &:active {
          background-color: #c9cdd4;
        }
      }
    }
  }

  .pagination {
    display: flex;
    width: 100%;
    margin-top: 30px;
    ${({ paginationAlign }) => getPaginationAlignStyle(paginationAlign)}
  }

  .filter-dialog {
    display: flex;

    .search-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${concisTableSearchBtnSize};
      height: ${concisTableSearchBtnSize};
      margin-left: 24px;
      color: #fff;
      background: ${concisPrimaryColor};
      cursor: pointer;
    }
  }

  .concis-dark-table-container {
    table {
      tr:first-of-type {
        border-top: 1px solid #484849;
      }

      tr {
        height: ${concisTableSearchBtnThHeight};
        border: 1px solid #484849;
      }
    }
  }
`;

export { TableStyle };
