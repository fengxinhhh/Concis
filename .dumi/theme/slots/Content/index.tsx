import { useSidebarData, useSiteData, useLocation } from 'dumi';
import React, { type FC, type ReactNode, useRef } from 'react';
import { Skeleton } from 'concis';
import './index.less';

const Content: FC<{ children: ReactNode }> = (props) => {
  const sidebar = useSidebarData();
  const { loading } = useSiteData();
  const { pathname } = useLocation();
  const p = useRef(pathname);
  console.log(9, loading, p.current, pathname);

  return (
    <div className="dumi-default-content" data-no-sidebar={!sidebar || undefined}>
      {p.current !== pathname && loading && (
        <>
          <div style={{ width: '600px' }}>
            <Skeleton loading title />
            <div style={{ width: '1000px' }}>
              <Skeleton loading title avatar row={4} width={['50%', '60%', '70%', '80%']} />
            </div>
            <div style={{ width: '900px' }}>
              <Skeleton loading title />
            </div>
            <div style={{ width: '1100px' }}>
              <Skeleton loading title avatar row={4} width={['50%', '60%', '70%', '80%']} />
            </div>
            <div style={{ width: '1100px' }}>
              <Skeleton loading title avatar row={4} width={['50%', '60%', '70%', '80%']} />
            </div>
          </div>
        </>
      )}
      {props.children}
    </div>
  );
};

export default Content;
