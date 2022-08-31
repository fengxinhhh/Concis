import React from 'react';
import { LazyLoad } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function LazyLoadDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('LazyLoad');
  return (
    <>
      <p>第一页</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <LazyLoad delay={1000}>
        <div>第二页</div>
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
      </LazyLoad>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <p>Hello Concis!</p>
      <LazyLoad delay={1000}>
        <div>第三页</div>
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
        <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" />
      </LazyLoad>
    </>
  );
}
