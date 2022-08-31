import React from 'react';
import { Loading } from 'concis';

export default function LoadingDemo1() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <p>蒙层下的加载内容.......蒙层下的加载内容.......</p>
      <p>蒙层下的加载内容.......蒙层下的加载内容.......</p>
      <p>蒙层下的加载内容.......蒙层下的加载内容.......</p>
      <p>蒙层下的加载内容.......蒙层下的加载内容.......</p>
      <p>蒙层下的加载内容.......蒙层下的加载内容.......</p>
      <Loading mask />
    </div>
  );
}
