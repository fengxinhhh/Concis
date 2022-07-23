import { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  visible?: boolean;
  onOk?: Function;
  onCancel?: Function;
}
type DialogStyle = {
  width?: string;
  height?: string;
  opacity?: string;
};

export type { ModalProps, DialogStyle };
