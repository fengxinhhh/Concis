import styled from 'styled-components';
import { spaceAlignParams } from '../interface';

function getAlignStyle(align) {
  switch (align) {
    case 'start':
      return {
        alignItems: 'flex-start',
      };
    case 'center':
      return {
        alignItems: 'center',
      };
    case 'end':
      return {
        alignItems: 'flex-end',
      };
    case 'baseline':
      return {
        alignItems: 'baseline',
      };
    default:
      return {
        alignItems: 'center',
      };
  }
}

function spaceStyles(direction, align) {
  const returnStyle: spaceAlignParams = direction === 'horizontal' ? getAlignStyle(align) : {};
  returnStyle.display = 'flex';
  if (direction === 'vertical') {
    returnStyle.flexDirection = 'column';
  } else {
    returnStyle.flexDirection = 'row';
  }
  return returnStyle;
}

const SpaceStyle = styled.div<{ direction; align }>`
  .concis-space {
    flex-wrap: wrap;
    ${({ direction, align }) => spaceStyles(direction, align)}

    &-item {
      display: inline-block;
    }
  }
`;

export { SpaceStyle };
