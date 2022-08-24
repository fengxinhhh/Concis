import React from 'react';

import './index.module.less';

import { Radio as CRadio } from './radio';

import { Group } from './group';

import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { RadioValue } from './radio';

export const Radio = attachPropertiesToComponent(CRadio, {
  Group,
});
