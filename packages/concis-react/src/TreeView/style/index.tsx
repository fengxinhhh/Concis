import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisTreeViewBorderColor = '#d9d9d9',
  { concisTransformSm, concisFontMd, concisTransformXs, concisDarkFontColor, concisPrimaryColor } =
    commonStyle;

const darkTreeViewStyle = css`
  .concis-dark-tree-select .treeNode span {
    color: ${concisDarkFontColor} !important;
  }
`;

const TreeViewStyle = styled.div<{ globalColor }>`
  .concis-tree-select,
  .concis-dark-tree-select {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 ${concisTransformSm} 0 ${concisTransformSm};
    overflow: hidden;
    border-radius: 0 2px 2px 0;
    transition: 0.2s linear;

    .treeNode {
      display: flex;
      align-items: center;
      overflow: hidden;
      font-size: ${concisFontMd};
      cursor: pointer;
      transition: 0.2s linear;

      .disblaed-checkBox,
      .checkBox-actived,
      .checkBox-noActived,
      .checkBox-activedLess {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin-left: ${concisTransformXs};
        color: #fff;
      }

      .disblaed-checkBox {
        border: 1px solid ${concisTreeViewBorderColor};
        cursor: not-allowed;
      }

      .checkBox-actived {
        background: ${({ globalColor }) => globalColor || concisPrimaryColor};
      }

      .checkBox-noActived {
        border: 1px solid ${concisTreeViewBorderColor};
        transition: 0.3s linear;

        &:hover {
          border: 1px solid ${({ globalColor }) => globalColor || concisPrimaryColor};
        }
      }

      .checkBox-activedLess {
        border: 1px solid ${concisTreeViewBorderColor};

        .less-box {
          width: 8px;
          height: 8px;
          background-color: ${({ globalColor }) => globalColor || concisPrimaryColor};
          position: relative;
          right: 0.5px;
          bottom: 0.5px;
        }
      }

      .text {
        margin-left: ${concisTransformSm};
        user-select: none;
      }
    }
  }

  ${darkTreeViewStyle}
`;

export { TreeViewStyle };
