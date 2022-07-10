import React from 'react';
import './color.less';

interface ColorProps {
  title: string;
  theme: string;
  colorList: Array<string>;
}

export default function Color(props: ColorProps) {
  const { title, theme, colorList } = props;

  return (
    <div className="color-container">
      <span className="color-title">{title}</span>
      <div className="color-list">
        {colorList.map((c, i) => {
          return (
            <div key={c} className="color-container-row" style={{ background: c }}>
              <div
                className="color-name"
                style={{ color: i < 5 ? '#000000' : '#ffffff' }}
              >{`${theme}-${i + 1}`}</div>
              <div className="color-val">{c}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
