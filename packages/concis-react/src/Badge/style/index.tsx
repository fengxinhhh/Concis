import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisBadgeAbsolute = 'absolute',
  concisBadgeRelative = 'relative',
  concisBadgeTransform = 'translate(50%, -50%)',
  concisBadgeWhiteColor = '#ffffff',
  concisDefaultBadgeBg = '#f53f3f';

const { concisFontSm, concisRadiusLg, concisRadiusMd } = commonStyle;

function getBadgeBackgroundColor(theme) {
  return theme?.globalColor || concisDefaultBadgeBg;
}

const BackTopStyle = styled.span<{ globalColor }>`
  .concis-badge {
    position: ${concisBadgeRelative};
    display: inline-block;

    &-count,
    &-text {
      position: ${concisBadgeAbsolute};
      top: 2px;
      right: 2px;
      z-index: 3;
      color: ${concisBadgeWhiteColor};
      font-size: ${concisFontSm};
      background-color: ${(globalColor) => getBadgeBackgroundColor(globalColor)};
      border: 2px solid ${concisBadgeWhiteColor};
      transform: ${concisBadgeTransform};
    }

    &-count {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      padding: 0 6px;
      font-weight: 500;
      border-radius: ${concisRadiusLg};
    }

    &-text {
      padding: 2px 6px;
      border-radius: ${concisRadiusMd};
    }

    &-dot {
      position: ${concisBadgeAbsolute};
      z-index: 3;
      width: 6px;
      height: 6px;
      background-color: ${(globalColor) => getBadgeBackgroundColor(globalColor)};
      border: 2px solid ${concisBadgeWhiteColor};
      border-radius: ${concisRadiusLg};
      transform: ${concisBadgeTransform};
    }
  }

  .concis-no-child-badge {
    position: ${concisBadgeRelative};
    display: inline-block;
    min-width: 20px;
    height: 20px;
    color: ${concisBadgeWhiteColor};
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background-color: ${(globalColor) => getBadgeBackgroundColor(globalColor)};
    border-radius: ${concisRadiusMd};
  }
`;

export { BackTopStyle };
