import { useSiteData } from 'dumi';
import React, { type FC } from 'react';
import { LazyLoad } from 'concis';
import './index.less';

const Footer: FC = () => {
  const { themeConfig } = useSiteData();

  if (!themeConfig.footer) return null;

  return (
    <LazyLoad>
      <div className="dumi-default-footer">{themeConfig.footer}</div>
    </LazyLoad>
  );
};

export default Footer;
