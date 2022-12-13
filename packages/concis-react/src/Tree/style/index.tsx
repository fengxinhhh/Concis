import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisTransformSm, concisFontMd } = commonStyle;

const darkTreeStyle = css`
  .cocnis-dark-tree-container .tree-select-dialog {
    box-sizing: border-box;
    padding: 0 ${concisTransformSm} 0 ${concisTransformSm};
    overflow: hidden;
    color: #c7c7c8;
    background: #373739;
    border-radius: 0 2px 2px 0;
    box-shadow: 0 0 2px 1px #d4d4d4;
    transition: 0.1s linear;
  }
`;

const treeAnimation = css`
  .treeDialog-enter,
  .treeDialog-appear {
    opacity: 0;
  }

  .treeDialog-enter-active,
  .treeDialog-appear-active {
    opacity: 1;
    transition: opacity 100ms;
  }

  .treeDialog-exit {
    opacity: 1;
  }

  .treeDialog-exit-active {
    opacity: 0;
    transition: opacity 100ms;
  }
`;

const TreeStyle = styled.div`
  .cocnis-tree-container,
  .cocnis-dark-tree-container {
    position: relative;
    display: inline-block;
    height: 100%;

    .tree-select-dialog {
      position: absolute;
      top: 35px;
      z-index: 10;
      box-sizing: border-box;
      padding: 0 ${concisTransformSm} 0 ${concisTransformSm};
      overflow: hidden;
      background-color: #fff;
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 2px 1px #d4d4d4;
      transition: 0.1s linear;

      .treeNode {
        display: flex;
        align-items: center;
        overflow: hidden;
        color: var(--tree-node-color);
        font-size: ${concisFontMd};
        cursor: pointer;
        transition: 0.1s linear;

        .text {
          margin-left: ${concisTransformSm};
          user-select: none;
        }

        span {
          pointer-events: none;
        }
      }
    }
  }

  ${darkTreeStyle}

  ${treeAnimation}
`;

export { TreeStyle };
