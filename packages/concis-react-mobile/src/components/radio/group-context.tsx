import React, { createContext, useContext } from 'react';

import { RadioValue } from '.';

export type GroupContextType = {
  value: RadioValue;
  disabled: boolean;
  onSelect: (value: RadioValue) => void;
  onUnSelect: (value: RadioValue) => void;
};

export const GroupContext = createContext<GroupContextType | null>(null);

export const useGroupContext = () => {
  const context = useContext(GroupContext);

  return context;
};
