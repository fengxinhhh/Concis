import { CSSProperties, ReactNode } from 'react';

interface PreviewJumpProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  icon?: ReactNode;
  jumpText?: ReactNode | string;
  jumpContent?: ReactNode;
  link?: string;
  disabled?: boolean;
}

export type { PreviewJumpProps };
