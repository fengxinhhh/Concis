import { useSidebarData, useLocation } from 'dumi';
import React, { type FC, type ReactNode, useState, useEffect, useRef } from 'react';
import { Skeleton } from 'concis';
import './index.less';

const Content: FC<{ children: ReactNode }> = (props) => {
  const [loading, setLoading] = useState(true);
  const visteredRouterList = useRef<string[]>([]);
  const sidebar = useSidebarData();
  let { pathname } = useLocation();

  // 承载一个loading，如果未访问过的路由，就显示loading，fix dumi native route bug
  useEffect(() => {
    if (!visteredRouterList.current.includes(pathname)) {
      setLoading(true);
      visteredRouterList.current = [...visteredRouterList.current, pathname];
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [pathname]);

  return (
    <div className="dumi-default-content" data-no-sidebar={!sidebar || undefined}>
      {loading ? (
        <>
          <div style={{ width: '600px' }}>
            <Skeleton loading title />
            <div style={{ width: '1000px' }}>
              <Skeleton loading title avatar row={4} width={['50%', '60%', '70%', '80%']} />
            </div>
            <div style={{ width: '1000px' }}>
              <Skeleton loading title />
            </div>
            <div style={{ width: '1200px' }}>
              <Skeleton loading title avatar row={4} width={['50%', '60%', '70%', '80%']} />
            </div>
            <div style={{ width: '1200px' }}>
              <Skeleton loading title avatar row={4} width={['50%', '60%', '70%', '80%']} />
            </div>
          </div>
          {props.children[props.children.length - 1]}
        </>
      ) : (
        props.children
      )}
    </div>
  );
};

export default Content;
