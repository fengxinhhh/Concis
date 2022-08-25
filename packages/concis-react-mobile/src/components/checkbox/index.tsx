import React from 'react';

import './index.module.less';

import { Checkbox as CCheckbox } from './checkbox';

import { Group } from './group';

import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export type { CheckboxValue } from './checkbox';

export const Checkbox = attachPropertiesToComponent(CCheckbox, {
  Group,
});
