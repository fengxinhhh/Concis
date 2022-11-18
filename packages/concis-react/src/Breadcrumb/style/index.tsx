import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisBreadcrumbLightItemColor = '#4e5969',
  concisBreadcrumbLightSeparatorColor = '#cdd1d8',
  concisBreadcrumbDarkItemColor = '#ffffffb3',
  concisBreadcrumbDarkSeparatorColor = '#ffffff4d';

const { concisFontMd } = commonStyle;

const BreadcrumbStyle = styled.div`
  .concis-breadcrumb,
  .concis-dark-breadcrumb {
    display: flex;
    font-size: ${concisFontMd};
    align-items: center;

    .concis-breadcrumb-item {
      color: ${concisBreadcrumbLightItemColor};
    }

    .concis-breadcrumb-item-ellipse {
      position: relative;
      bottom: 3px;
      color: ${concisBreadcrumbLightItemColor};
    }

    .concis-breadcrumb-item-separator {
      margin: 0 12px;
      color: ${concisBreadcrumbLightSeparatorColor};
    }
  }

  .concis-dark-breadcrumb {
    .concis-breadcrumb-item,
    .concis-breadcrumb-item-ellipse {
      color: ${concisBreadcrumbDarkItemColor};
    }

    .concis-breadcrumb-item-separator {
      color: ${concisBreadcrumbDarkSeparatorColor};
    }
  }
`;

export { BreadcrumbStyle };
