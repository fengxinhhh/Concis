import React, { createContext, useContext } from 'react';

import { CheckboxValue } from '.';

export type GroupContextType = {
  value: CheckboxValue[];
  disabled: boolean;
  block: boolean;
  onSelect: (value: CheckboxValue) => void;
  onUnSelect: (value: CheckboxValue) => void;
};

export const GroupContext = createContext<GroupContextType | null>(null);

export const useGroupContext = () => {
  const context = useContext(GroupContext);

  return context;
};
