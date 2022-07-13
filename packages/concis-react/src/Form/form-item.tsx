import React, { useEffect, useState, useCallback, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../../../../scripts/common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { FormItemProps } from './interface';
import { FormItemAttrs, FormItemLabel } from './classes';
import { ctx } from './index';
import './styles/form-item.module.less';

const FormItem = (props: FormItemProps) => {
  const {
    children,
    className,
    style = {},
    label,
    wrapperCol = 0,
    wrapperTol = 0,
    field,
    rules = [],
    disabled = false,
  } = props;

  const [propsStyle, setPropsStyle] = useState({});
  const [labelStyle, setLabelStyle] = useState({});

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-form-item');

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
    setPropsStyle({ ...getPropsStyles(), ...style });
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
    <div className={classNames} style={propsStyle}>
      <div className="label" style={labelStyle}>
        {rules.length > 0 && (
          <svg fill="currentColor" viewBox="0 0 1024 1024" width="0.5em" height="0.5em">
            <path d="M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"></path>
          </svg>
        )}
        {label || ''}
      </div>
      <div
        className={field || 'content'}
        style={Ctx.get('layout') === 'horizontal' ? { position: 'relative' } : {}}
      >
        {children}
        {disabled && <div className="form-item-disabled"></div>}
        {field && rules.length > 0 && <div className="hide-rule-label">{rules[0].message}</div>}
      </div>
    </div>
  );
};

export default FormItem;
