import React, { FC, memo, useContext } from 'react';
import type { stepProps } from '../interface';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';

const Step: FC<stepProps> = (props: stepProps) => {
  const { title, className } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-steps-content');

  return <div className={classNames}>{title}</div>;
};

export default memo(Step);
