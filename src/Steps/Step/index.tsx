import React, { FC, memo } from 'react';

interface stepProps {
  /**
   * @description 步骤标题
   * @default ""
   */
  title: string;
  subTitle?: string;
  description?: string;
}
const Step: FC<stepProps> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default memo(Step);
