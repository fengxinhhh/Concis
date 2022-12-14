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

const ItemStyle = styled.div<{ size }>`
  .concis-list-item {
    border-top: 1px solid rgb(229, 230, 235);
    ${({ size }) => getSizeStyle(size)}
  }
`;

export { ItemStyle };
