import { ReactNode, CSSProperties } from 'react';

type CommentProps = {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 作者名
   */
  author?: string;
  /**
   * @description 作者名后的额外内容
   */
  afterAuthor?: ReactNode;
  /**
   * @description 头像
   */
  avatar?: JSX.Element;
  /**
   * @description 评论内容
   */
  content?: ReactNode;
  /**
   * @description 时间描述
   */
  datetime?: string;
  /**
   * @description 底部配置项
   */
  actions?: ReactNode;
  /**
   * @description 标题栏对齐方式
   * @default left
   */
  align?: 'left' | 'right';
};

export type { CommentProps };
