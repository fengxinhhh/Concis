import { ReactNode, ButtonHTMLAttributes } from 'react';

interface TabsProps {
  children?: ReactNode;
  defaultActiveTab?: string;
  tabPosition?: 'top' | 'bottom' | 'left' | 'right';
  type?: 'line' | 'text' | 'round';
}
interface TabsPaneProps {
  key: string;
  title: string;
  children?: ReactNode;
  disabled?: boolean;
}
interface TabsHeaderProps {
  paneChildren: any[];
  defaultActiveTab?: string;
  changeHeaderActiveCallback?: (active: string) => void;
}
interface TabsContentProps {
  paneChildren: any[];
  defaultActiveTab?: string;
}

export type { TabsProps, TabsPaneProps, TabsHeaderProps, TabsContentProps };
