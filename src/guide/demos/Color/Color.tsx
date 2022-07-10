import React, { useEffect, useState } from 'react';
import './color.less';

interface ColorProps {
  title: string;
  theme: string;
  colorList: Array<string>;
}

export default function Color(props: ColorProps) {
  const { title, theme, colorList } = props;

  const [colorValOp, setColorValOp] = useState(0);

  const enterContainer = () => {
    setColorValOp(1);
  };
  const leaveContainer = () => {
    setColorValOp(0);
  };

  return (
    <div className="color-container" onMouseEnter={enterContainer} onMouseLeave={leaveContainer}>
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
