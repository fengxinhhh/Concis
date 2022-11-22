import styled, { css } from 'styled-components';

function getSizeStyle(size) {
  const sizeMap = {
    default: '12px 20px',
    small: '8px 20px',
    large: '16px 20px',
  };

  return css`
    padding: ${sizeMap[size]};
  `;
}

const ListStyle = styled.div<{ size }>`
  .concis-list,
  .concis-dark-list {
    border: 1px solid rgb(229, 230, 235);

    .list-header {
      ${({ size }) => getSizeStyle(size)}
    }

    .victurl-list-content {
      position: relative;
      overflow-y: auto;

      .victurl-relly-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }

  .concis-dark-list {
    color: #8e8e8e;
    border: 1px solid #484849;

    .list-header {
      color: #c6c6c6;
    }

    .concis-list-item {
      border-top: 1px solid #484849;
    }
  }
`;

export { ListStyle };
