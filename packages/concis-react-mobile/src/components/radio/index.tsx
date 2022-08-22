import React, {
  useMemo,
  useContext,
  useImperativeHandle,
  useRef,
  forwardRef,
  ReactNode,
} from 'react';

import './index.module.less';

import { Radio as CRadio } from './radio';

import { RadioGroup } from './group';

export type { RadioValue } from './radio';

const Radio = CRadio;

Radio.Group = RadioGroup;

export { Radio };
