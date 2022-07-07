import React, { useEffect, useState, useCallback, useContext } from 'react';
import { FormItemProps } from './interface';
import { FormItemAttrs, FormItemLabel } from './classes';
import { ctx } from './index';
import './styles/form-item.module.less';

const FormItem = (props: FormItemProps) => {
  const { children, label, wrapperCol = 0, wrapperTol = 0 } = props;

  const [propsStyle, setPropsStyle] = useState({});
  const [labelStyle, setLabelStyle] = useState({});

  const Ctx = (function () {
    //创建一个ctx单例，防止组件内污染全局变量
    const c = useContext(ctx);
    return {
      get: (prop: string) => {
        return c[prop] || null;
      },
    };
  })();

  useEffect(() => {
    setPropsStyle(getPropsStyles());
    setLabelStyle(getLabelPropsStyle());
  }, [props]);

  const getPropsStyles = useCallback(() => {
    //基于props，动态构建一个props style集合
    const formAttrs = new FormItemAttrs(wrapperCol, wrapperTol, Ctx.get('layout'));
    return formAttrs.getStyle();
  }, [wrapperCol, wrapperTol, Ctx.get('layout')]);
  const getLabelPropsStyle = useCallback(() => {
    //基于props，动态构建一个label props style集合
    const labelAttrs = new FormItemLabel(Ctx.get('layout'));
    return labelAttrs.getStyle();
  }, [Ctx.get('layout')]);

  return (
    <div className="form-item" style={propsStyle}>
      <div className="label" style={labelStyle}>
        {label || ''}
      </div>
      {children}
    </div>
  );
};

export default FormItem;
