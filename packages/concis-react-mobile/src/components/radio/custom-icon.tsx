import React, { memo } from 'react';

export type CustomIconType = React.ReactNode | ((checked: boolean) => React.ReactNode);

type Props = {
  classPrefix: string;
  icon: CustomIconType;
  checked: boolean;
};

export const CustomIcon: React.FC<Props> = memo(({ classPrefix, icon, checked }) => {
  return (
    <div className={`${classPrefix}-custom-icon`}>
      {typeof icon === 'function' ? icon(checked) : icon}
    </div>
  );
});
