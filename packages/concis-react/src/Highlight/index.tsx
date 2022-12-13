import React, { forwardRef, useMemo, useContext, Fragment } from 'react';
import { HighlightStyle } from './style';
import type { HighlightProps, highlightStyle, Options, Chunk } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { globalCtx } from '../GlobalConfig';
import cs from '../common_utils/classNames';

// 根据query数组生成正则
function buildRegex(query: string[]) {
  if (!query.length) {
    return null;
  }
  return new RegExp(`(${query.join('|')})`, 'ig');
}
function highlightWords({ text, query }: Options): Chunk[] {
  const regex = buildRegex(query);
  if (!regex) {
    return [{ text, match: false }];
  }
  const result = text.split(regex).filter(Boolean);
  return result.map((str) => ({ text: str, match: regex.test(str) }));
}

function useHighlight(props: Options) {
  const { text, query } = props;
  if (typeof text !== 'string') {
    throw new Error('You must set the children with string type.');
  }
  return useMemo(() => highlightWords({ text, query }), [text, query]);
}

const Highlight = (props, ref) => {
  const { children, query, className, style, styles } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}highlight`);

  const chunks = useHighlight({ query, text: children });

  const lighLightStyle = useMemo((): highlightStyle => {
    const defaultPy = 0,
      defaultPx = 0,
      defaultMy = 0,
      defaultMx = 0,
      defaultRadius = '5px',
      defaultBg = '#b2f5ea';

    return {
      padding: `${styles?.py || defaultPy}px ${styles?.px || defaultPx}px`,
      margin: `${styles?.my || defaultMy}px ${styles?.mx || defaultMx}px`,
      borderRadius: styles?.rounded ? '15px' : defaultRadius,
      backgroundColor: styles?.bg ? styles.bg : defaultBg,
    };
  }, [styles]);

  return (
    <HighlightStyle>
      <div className={classNames} style={style} ref={ref}>
        {chunks?.map((chunk, index) => {
          const { match, text } = chunk;
          return match ? (
            <span key={index} className="hightlight-text" style={lighLightStyle}>
              {text}
            </span>
          ) : (
            <Fragment key={index}>{text}</Fragment>
          );
        })}
      </div>
    </HighlightStyle>
  );
};

export default forwardRef<HighlightProps, unknown>(Highlight);
