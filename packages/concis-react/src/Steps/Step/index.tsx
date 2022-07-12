import React, { FC, memo } from 'react';

interface stepProps {
  title: string;
  subTitle?: string;
  description?: string;
}
const Step: FC<stepProps> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default memo(Step);
