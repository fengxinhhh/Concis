import React from 'react';
import { useRouteMeta, useLocation } from 'dumi';
import './index.less';

export default function DemoTabs() {
  const { toc } = useRouteMeta();
  let { pathname } = useLocation();
  console.log(toc);

  return (
    <ul className="concis-demo-tabs">
      {toc.map((t) => {
        return (
          <li key={t.id}>
            <a href={`${pathname}#${t.id}`}>
              <span>{t.id}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
