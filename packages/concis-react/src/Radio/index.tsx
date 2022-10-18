import React, { forwardRef } from 'react';
import type { RadioProps } from './interface';

const Radio = (props, ref) => {
  const { children, className, style } = props;

  return (
    <div className={className} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef<unknown, RadioProps>(Radio);
