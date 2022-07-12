import React, { useState } from 'react';
import Affix from '../index';
import Button from '../../Button';
import usePageListener from '../../_util/hooks/usePageListener';

export default function AffixDemo1() {
  const [align, setAlign] = useState('top');
  process.env.NODE_ENV === 'production' && usePageListener('button');

  return (
    <div>
      {align == 'top' && (
        <Affix affixType="scroll" offsetTop={100} offsetLeft={600} style={{ padding: '10px 30px' }}>
          <div>top Affix</div>
        </Affix>
      )}
      {align == 'bottom' && (
        <Affix
          affixType="scroll"
          offsetBottom={100}
          offsetLeft={600}
          style={{ padding: '10px 30px' }}
        >
          <div>bottom Affix</div>
        </Affix>
      )}
      <div style={{ marginTop: '30px' }}></div>
      <Button width={200} handleClick={() => setAlign(align == 'bottom' ? 'top' : 'bottom')}>
        toggle to {align == 'bottom' ? 'top' : 'bottom'}
      </Button>

      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
      <p>Affix</p>
    </div>
  );
}
