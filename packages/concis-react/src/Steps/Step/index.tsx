import React, { FC, memo, useContext } from 'react';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';

interface stepProps {
  className?: string;
  title: string;
  subTitle?: string;
  description?: string;
}
const Step: FC<stepProps> = (props) => {
  const { title, className } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-steps-content');

  return <div className={classNames}>{title}</div>;
};

export default memo(Step);
