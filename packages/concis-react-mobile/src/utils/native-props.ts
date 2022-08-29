import React, { AriaAttributes } from 'react';
import type { CSSProperties } from 'react';

export type NativeProps<P extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<P, string>>;
  tabIndex?: number;
} & AriaAttributes;
