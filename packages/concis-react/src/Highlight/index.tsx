import React, { forwardRef, useMemo, useContext, Fragment } from 'react';
import type { HighlightProps, highlightStyle, Options, Chunk } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { globalCtx } from '../GlobalConfig';
import cs from '../common_utils/classNames';
import './index.module.less';

// 根据query数组生成正则
function buildRegex(query: string[]) {
  if (!query.length) {
    return null;
  }
  return new RegExp(`(${query.join('|')})`, 'ig');
}
function highlightWords({ text, query }: Options): Chunk[] {
  const regex = buildRegex(query);
  // console.log(regex);
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
    return {
      padding: `${styles?.py || 0}px ${styles?.px || 5}px`,
      margin: `${styles?.my || 0}px ${styles?.mx || 0}px`,
      borderRadius: styles?.rounded ? '15px' : '5px',
      backgroundColor: styles?.bg ? styles.bg : '#b2f5ea',
    };
  }, [styles]);

  return (
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
  );
};

export default forwardRef<HighlightProps, unknown>(Highlight);
