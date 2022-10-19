interface HighlightProps {
  /**
   * @description 字段，仅支持string
   */
  children?: string;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 关键词
   */
  query?: string[];
  /**
   * @description 高亮样式
   */
  styles?: stylesType;
}

type stylesType = {
  px?: string | number;
  py?: string | number;
  mx?: string | number;
  my?: string | number;
  rounded?: boolean;
  bg?: string;
};

type highlightStyle = {
  margin: string;
  padding: string;
  borderRadius: string;
  backgroundColor: string;
};

type Options = {
  text: string;
  query: string[];
};

type Chunk = {
  text: string;
  match: boolean;
};

export type { HighlightProps, highlightStyle, Options, Chunk };
