(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react'), require('@ant-design/icons'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react', '@ant-design/icons'], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.DumboUI = {}), global.React, global.icons));
})(this, function (exports, React, icons) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }

  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  const Button = React.memo((props) => {
    const { type, width, height, disabled, circle, dashed, loading, handleClick, children } = props;
    const buttonStyle = React.useMemo(() => {
      if (
        !type &&
        type !== 'danger' &&
        type !== 'warning' &&
        type !== 'warning' &&
        type !== 'text'
      ) {
        return 'primary';
      }
      return type;
    }, [type]);
    const buttonSize = React.useMemo(() => {
      var size = {
        width: '100px',
        height: '40px',
      };
      if (width) {
        size.width = width + 'px';
      }
      if (height) {
        size.height = height + 'px';
      }
      if (circle) {
        size = Object.assign(Object.assign({}, size), { borderRadius: '50%' });
      }
      if (dashed && type === 'text') {
        size = Object.assign(Object.assign({}, size), { border: '1px dashed #ccc' });
      }
      if (disabled) {
        size = Object.assign(Object.assign({}, size), { cursor: 'not-allowed' });
      }
      return size;
    }, [width, height, circle, dashed]);
    return React__default['default'].createElement(
      'div',
      { className: 'button' },
      React__default['default'].createElement(
        'button',
        {
          className: buttonStyle,
          style: buttonSize,
          disabled: disabled ? true : false,
          onClick: handleClick,
        },
        loading && React__default['default'].createElement('div', { className: 'loading1' }),
        children,
      ),
    );
  });

  const Divider = React.memo((props) => {
    const { children, fontSize, borderColor, align, dashed } = props;
    const lineAlign = React.useMemo(() => {
      if (align === 'left') {
        return {
          justifyContent: 'left',
        };
      } else if (align === 'right') {
        return {
          justifyContent: 'right',
        };
      }
      return {};
    }, [align]);
    const lineColor = React.useMemo(() => {
      if (borderColor) {
        return {
          borderColor: borderColor,
        };
      }
      return {};
    }, [borderColor]);
    const textStyle = React.useMemo(() => {
      if (fontSize) {
        return {
          fontSize: `${fontSize}px`,
        };
      }
    }, [fontSize]);
    return React__default['default'].createElement(
      'div',
      { className: 'divider' },
      React__default['default'].createElement(
        'div',
        {
          className: dashed ? 'dashed' : 'line',
          style: Object.assign(Object.assign({}, lineAlign), lineColor),
        },
        children &&
          React__default['default'].createElement(
            'span',
            { className: 'line-text', style: textStyle },
            children,
          ),
      ),
    );
  });

  const Layout = (props) => {
    const { children, extraStyle } = props;
    const propsStyles = React.useMemo(() => {
      if (extraStyle) {
        return extraStyle;
      }
      return {};
    }, [extraStyle]);
    return React__default['default'].createElement(
      'div',
      { className: 'layout', style: propsStyles },
      children,
    );
  };
  var index$8 = React.memo(Layout);

  const Header = (props) => {
    const { children, extraStyle } = props;
    const propsStyle = React.useMemo(() => {
      if (extraStyle) {
        return extraStyle;
      }
      return {};
    }, [extraStyle]);
    return React__default['default'].createElement(
      'div',
      { className: 'header', style: propsStyle },
      children,
    );
  };
  var index$7 = React.memo(Header);

  const Slider = (props) => {
    const { row, extraStyle } = props;
    const sliderRow = React.useMemo(() => {
      if (row) {
        return {
          width: `${row}0%`,
        };
      }
      return {};
    }, [row]);
    const propsStyle = React.useMemo(() => {
      if (extraStyle) {
        return extraStyle;
      }
      return {};
    }, [extraStyle]);
    return React__default['default'].createElement(
      'div',
      { className: 'slider', style: Object.assign(Object.assign({}, sliderRow), propsStyle) },
      props.children,
    );
  };
  var index$6 = React.memo(Slider);

  const Content = (props) => {
    const { children, row, extraStyle } = props;
    const contentRow = React.useMemo(() => {
      if (row) {
        return {
          width: `${row}0%`,
        };
      }
      return {};
    }, [row]);
    const propsStyle = React.useMemo(() => {
      if (extraStyle) {
        return extraStyle;
      }
      return {};
    }, [extraStyle]);
    return React__default['default'].createElement(
      'div',
      { className: 'content', style: Object.assign(Object.assign({}, contentRow), propsStyle) },
      children,
    );
  };
  var index$5 = React.memo(Content);

  const Footer = (props) => {
    const { children, extraStyle } = props;
    const propsStyle = React.useMemo(() => {
      if (extraStyle) {
        return extraStyle;
      }
      return {};
    }, [extraStyle]);
    return React__default['default'].createElement(
      'div',
      { className: 'footer', style: propsStyle },
      children,
    );
  };
  var index$4 = React.memo(Footer);

  const Pagination = (props) => {
    const { changePageCallback, total, pageSizeOptions, showJumpInput, showSizeChanger } = props;
    const [nowIndex, setNowIndex] = React.useState(1);
    const [pageRenderArray, setPageRenderArray] = React.useState([]);
    const [sizePage, setSizePage] = React.useState(pageSizeOptions ? pageSizeOptions[0] : 10);
    React.useState(false);
    const totalPage = React.useMemo(() => {
      setNowIndex(1);
      if (Math.ceil(total / sizePage) > 6) {
        setPageRenderArray([2, 3, 4, 5, 6]);
      } else {
        if (Math.ceil(total / sizePage) > 2) {
          const array = new Array(Math.ceil(total / sizePage) - 2).fill(0);
          array.forEach((item, index) => {
            array[index] = index + 2;
          });
          setPageRenderArray(array);
        } else {
          setPageRenderArray([]);
        }
      }
      return Math.ceil(total / sizePage);
    }, [total, sizePage]);
    React.useEffect(() => {
      console.log(typeof nowIndex);
    }, [nowIndex]);
    //点击改页码
    const changePage = (pageNum) => {
      return () => {
        //小型分页器
        if (totalPage <= 6) {
          changePageCallback(pageNum);
          return setNowIndex(pageNum);
        }
        if (pageNum > 4 && pageNum <= totalPage - 4) {
          setPageRenderArray([pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2]);
        }
        //页码为1的情况
        if (pageNum <= 4) {
          setPageRenderArray([2, 3, 4, 5, 6]);
        }
        //页码到倒数第四页内的情况
        if (pageNum > totalPage - 4) {
          setPageRenderArray([
            totalPage - 5,
            totalPage - 4,
            totalPage - 3,
            totalPage - 2,
            totalPage - 1,
          ]);
        }
        setNowIndex(pageNum);
        changePageCallback(pageNum);
      };
    };
    //向前翻一页
    const prevPage = () => {
      if (nowIndex === 1) {
        return;
      }
      setNowIndex(nowIndex - 1);
      if (totalPage > 6) {
        if (nowIndex > totalPage - 3) {
          return;
        } else if (nowIndex > 4) {
          setPageRenderArray(
            pageRenderArray.map((item) => {
              return item - 1;
            }),
          );
        } else if (nowIndex - 5 <= 4) {
          //开头几页翻页的情况，回到第一页
          setPageRenderArray([2, 3, 4, 5, 6]);
        }
      }
      changePageCallback(nowIndex - 1);
    };
    //向后翻一页
    const nextPage = () => {
      if (nowIndex === totalPage) {
        return;
      }
      setNowIndex(nowIndex + 1);
      if (totalPage > 6) {
        if (nowIndex + 5 > totalPage) {
          setPageRenderArray([
            totalPage - 5,
            totalPage - 4,
            totalPage - 3,
            totalPage - 2,
            totalPage - 1,
          ]);
        } else if (nowIndex < 4) {
          return;
        } else if (nowIndex + 5 < totalPage) {
          setPageRenderArray(
            pageRenderArray.map((item) => {
              return item + 1;
            }),
          );
        }
      }
      changePageCallback(nowIndex + 1);
    };
    //向前翻五页
    const prevFivePage = () => {
      var updateIndex = 0;
      if (nowIndex - 5 <= 4) {
        //开头几页翻页的情况，回到第一页
        setPageRenderArray([2, 3, 4, 5, 6]);
        updateIndex = nowIndex - 5 <= 1 ? 1 : nowIndex - 5;
      } else if (nowIndex + 5 > totalPage) {
        setPageRenderArray([nowIndex - 7, nowIndex - 6, nowIndex - 5, nowIndex - 4, nowIndex - 3]);
        updateIndex = nowIndex - 5;
      } else if (nowIndex - 5 > 4) {
        //中间翻页的情况
        setPageRenderArray(
          pageRenderArray.map((item) => {
            return item - 5;
          }),
        );
        updateIndex = nowIndex - 5;
      }
      setNowIndex(updateIndex);
      changePageCallback(updateIndex);
    };
    //向后翻五页
    const nextFivePage = () => {
      var updateIndex = 0;
      if (nowIndex + 7 >= totalPage) {
        setPageRenderArray([
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
        ]);
        updateIndex = nowIndex + 5 > totalPage ? totalPage : nowIndex + 5;
      } else if (nowIndex - 5 < 0) {
        setPageRenderArray([nowIndex + 3, nowIndex + 4, nowIndex + 5, nowIndex + 6, nowIndex + 7]);
        updateIndex = nowIndex + 5;
      } else if (nowIndex + 5 < totalPage) {
        setPageRenderArray(
          pageRenderArray.map((item) => {
            return item + 5;
          }),
        );
        updateIndex = nowIndex + 5;
      }
      setNowIndex(updateIndex);
      changePageCallback(updateIndex);
    };
    //跳页
    const jumpPageNum = (e) => {
      if (e.keyCode === 13) {
        const jumpPage = Number(e.target.value);
        if (jumpPage > totalPage || jumpPage < 0 || isNaN(jumpPage)) {
          //超出页码范围，不挑
          return (e.target.value = '');
        }
        if (jumpPage > 6 && jumpPage < totalPage - 6) {
          setPageRenderArray([jumpPage - 2, jumpPage - 1, jumpPage, jumpPage + 1, jumpPage + 2]);
        } else if (jumpPage - 5 < 0) {
          setPageRenderArray([2, 3, 4, 5, 6]);
        } else if (jumpPage + 5 > totalPage) {
          setPageRenderArray([
            totalPage - 5,
            totalPage - 4,
            totalPage - 3,
            totalPage - 2,
            totalPage - 1,
          ]);
        }
        setNowIndex(jumpPage);
        changePageCallback(jumpPage);
        e.target.value = '';
      }
    };
    //select回调
    const handleSelectCallback = (pageSize) => {
      console.log(pageSize);
      setSizePage(pageSize);
    };
    return React__default['default'].createElement(
      'div',
      { className: 'pagination' },
      React__default['default'].createElement(
        'div',
        { className: nowIndex === 1 ? `prev disabled` : `prev`, onClick: prevPage },
        React__default['default'].createElement(icons.LeftOutlined, null),
      ),
      React__default['default'].createElement(
        'div',
        { className: nowIndex === 1 ? `actived numberBox` : `numberBox`, onClick: changePage(1) },
        '1',
      ),
      nowIndex > 4 &&
        totalPage > 6 &&
        React__default['default'].createElement(
          'div',
          { className: 'numberBox', onClick: prevFivePage },
          React__default['default'].createElement(icons.EllipsisOutlined, null),
        ),
      totalPage <= 4 &&
        pageRenderArray.length >= 1 &&
        pageRenderArray.map((index) => {
          return React__default['default'].createElement(
            'div',
            {
              className: nowIndex === index + 2 ? `actived numberBox` : `numberBox`,
              key: index,
              onClick: changePage(index + 2),
            },
            index + 2,
          );
        }),
      totalPage > 4 &&
        pageRenderArray.map((item, index) => {
          {
            return React__default['default'].createElement(
              'div',
              {
                className: nowIndex === item ? `actived numberBox` : `numberBox`,
                key: index,
                onClick: changePage(item),
              },
              item,
            );
          }
        }),
      totalPage - nowIndex >= 4 &&
        totalPage > 6 &&
        React__default['default'].createElement(
          'div',
          { className: 'numberBox', onClick: nextFivePage },
          React__default['default'].createElement(icons.EllipsisOutlined, null),
        ),
      totalPage > 1 &&
        React__default['default'].createElement(
          'div',
          {
            className: nowIndex === totalPage ? `actived numberBox` : `numberBox`,
            onClick: changePage(totalPage),
          },
          totalPage,
        ),
      React__default['default'].createElement(
        'div',
        {
          className: nowIndex === totalPage || totalPage <= 1 ? `next disabled` : `next`,
          onClick: nextPage,
        },
        React__default['default'].createElement(icons.RightOutlined, null),
      ),
      Array.isArray(pageSizeOptions) &&
        showSizeChanger &&
        React__default['default'].createElement(Select$1, {
          option: pageSizeOptions.map((item) => {
            return {
              label: `${item} 条/页`,
              value: item,
            };
          }),
          width: 100,
          handleSelectCallback: handleSelectCallback,
        }),
      showJumpInput &&
        React__default['default'].createElement(
          'div',
          { className: 'jumpBox' },
          React__default['default'].createElement('span', null, '\u8DF3\u81F3'),
          React__default['default'].createElement('input', {
            type: 'text',
            className: 'jump',
            onKeyUp: jumpPageNum,
          }),
          React__default['default'].createElement('span', null, '\u9875'),
        ),
    );
  };
  var index$3 = React.memo(Pagination);

  const Select = (props) => {
    const {
      option,
      width,
      placeholder,
      disabled,
      loading,
      showSearch,
      clearable,
      handleSelectCallback,
      handleTextChange,
    } = props;
    const [selected, setSelected] = React.useState('');
    const optionRef = React.createRef();
    React.useEffect(() => {
      optionRef.current.height = `0px`;
      console.log(option);
    }, []);
    const ownsWidth = React.useMemo(() => {
      //传参宽度
      if (width) {
        return {
          width: `${width}px`,
        };
      }
      return {};
    }, [width]);
    const disabledStyle = React.useMemo(() => {
      //禁用状态
      if (disabled) {
        return {
          cursor: 'not-allowed',
          background: 'rgb(238, 238, 238)',
        };
      }
    }, [disabled]);
    const toggleOptions = (e) => {
      //切换下拉
      e.stopPropagation();
      if (disabled) return;
      console.log(optionRef.current.style.height);
      if (optionRef.current.style.height === '0px' || optionRef.current.style.height === '') {
        if (showSearch) {
          optionRef.current.style.height = `${inputFilterOtpions.length * 100}%`;
        } else {
          optionRef.current.style.height = `${option.length * 100}%`;
        }
      } else {
        optionRef.current.style.height = '0px';
      }
      console.log(optionRef.current.height);
    };
    const changeOptions = (v, e) => {
      //选择选项
      e.stopPropagation();
      if (v.disabled) return;
      optionRef.current.style.height = '0px';
      setSelected(v.label);
      if (handleSelectCallback) {
        handleSelectCallback(v.value);
      }
    };
    const inputFilterOtpions = React.useMemo(() => {
      //输入状态options过滤
      return option.filter((item) => {
        return item.label.includes(selected);
      });
    }, [option, selected]);
    const handleInputChange = React.useCallback(
      (e) => {
        //输入后的回调
        setSelected(e.target.value);
        optionRef.current.style.height =
          option.filter((item) => {
            return item.label.includes(e.target.value);
          }).length *
            100 +
          '%';
        if (handleTextChange) {
          handleTextChange(e.target.value);
        }
      },
      [selected],
    );
    return showSearch
      ? React__default['default'].createElement(
          React__default['default'].Fragment,
          null,
          React__default['default'].createElement(
            'div',
            {
              className: 'select',
              style: Object.assign(Object.assign({}, ownsWidth), disabledStyle),
            },
            React__default['default'].createElement(
              'div',
              { className: 'selected' },
              React__default['default'].createElement('input', {
                type: 'text',
                className: 'selected',
                value: selected,
                placeholder: placeholder,
                onClick: toggleOptions,
                onChange: (e) => handleInputChange(e),
              }),
              clearable
                ? React__default['default'].createElement(icons.CloseOutlined, {
                    onClick: () => setSelected(''),
                  })
                : React__default['default'].createElement(icons.DownOutlined, {
                    onClick: toggleOptions,
                  }),
            ),
            React__default['default'].createElement(
              'div',
              { className: 'selectOptions', style: ownsWidth, ref: optionRef },
              inputFilterOtpions.map((s) => {
                return React__default['default'].createElement(
                  'div',
                  {
                    key: s.label,
                    className: 'option',
                    style: s.disabled
                      ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                      : {},
                    onClick: (e) => changeOptions(s, e),
                  },
                  s.label,
                );
              }),
            ),
          ),
        )
      : React__default['default'].createElement(
          'div',
          {
            className: 'select',
            style: Object.assign(Object.assign({}, ownsWidth), disabledStyle),
          },
          React__default['default'].createElement(
            'div',
            { className: 'selected', onClick: toggleOptions },
            selected
              ? React__default['default'].createElement('div', { className: 'size' }, selected)
              : (placeholder &&
                  React__default['default'].createElement(
                    'div',
                    { className: 'placeholder' },
                    placeholder,
                  )) ||
                  React__default['default'].createElement('div', null),
            loading
              ? React__default['default'].createElement(icons.LoadingOutlined, null)
              : React__default['default'].createElement(icons.DownOutlined, null),
          ),
          React__default['default'].createElement(
            'div',
            { className: 'selectOptions', style: ownsWidth, ref: optionRef },
            option.map((s) => {
              return React__default['default'].createElement(
                'div',
                {
                  key: s.label,
                  className: 'option',
                  style: s.disabled
                    ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                    : {},
                  onClick: (e) => changeOptions(s, e),
                },
                s.label,
              );
            }),
          ),
        );
  };
  var Select$1 = React.memo(Select);

  const Input = (props) => {
    const {
      width,
      moreStyle,
      type,
      placeholder,
      showClear,
      showTogglePwd,
      min,
      max,
      step,
      handleIptChange,
      handleKeyDown,
      handleNumChange,
      defaultValue,
    } = props;
    const [iptValue, setIptValue] = React.useState(defaultValue || '');
    const [pwdIptState, setPwdIptState] = React.useState(true); //密码框切换状态
    const changeIpt = (e) => {
      //改变文本框
      setIptValue(e.target.value);
      if (handleIptChange) {
        handleIptChange(e.target.value);
      }
    };
    const blurIpt = (e) => {
      //失去焦点
      if (type === 'num' && Number(iptValue) == NaN) {
        setIptValue('');
      }
    };
    const addNum = () => {
      //加
      if (type === 'num' && Number(iptValue) == NaN) {
        return setIptValue('');
      }
      const stepNum = step || 1;
      if (step && max && Number(iptValue) + stepNum > max) {
        handleNumChange && handleNumChange(max);
        return setIptValue(max);
      }
      if (step && min && Number(iptValue) + stepNum < min) {
        handleNumChange && handleNumChange(min);
        return setIptValue(min);
      }
      handleNumChange && handleNumChange(Number(iptValue) + stepNum);
      setIptValue(Number(iptValue) + stepNum);
    };
    const lowNum = () => {
      //减
      if (type === 'num' && Number(iptValue) == NaN) {
        return setIptValue('');
      }
      const stepNum = step || 1;
      if (step && min && Number(iptValue) - stepNum < min) {
        handleNumChange && handleNumChange(min);
        return setIptValue(min);
      }
      handleNumChange && handleNumChange(Number(iptValue) - stepNum);
      setIptValue(Number(iptValue) - stepNum);
    };
    const iptType = React.useMemo(() => {
      if (showTogglePwd && type === 'password') {
        return pwdIptState ? 'password' : 'text';
      }
      return type || 'text';
    }, [type, showTogglePwd, pwdIptState]);
    const exticStyle = React.useMemo(() => {
      let style = { width: '170px' };
      if (width) {
        style.width = width + 'px';
      }
      return Object.assign(Object.assign({}, style), moreStyle);
    }, [width, moreStyle]);
    return React__default['default'].createElement(
      'div',
      { className: 'box', style: { width: width ? width + 'px' : '170px' } },
      React__default['default'].createElement('input', {
        className: 'input',
        style: exticStyle,
        type: iptType,
        placeholder: placeholder,
        value: iptValue,
        onChange: changeIpt,
        onBlur: blurIpt,
        onKeyUp: (e) => handleKeyDown && handleKeyDown(e),
      }),
      //可清除
      (showClear &&
        React__default['default'].createElement(icons.CloseOutlined, {
          style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
          onClick: () => setIptValue(''),
        })) ||
        //密码框
        (type === 'password' &&
          showTogglePwd &&
          React__default['default'].createElement(icons.EyeOutlined, {
            style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
            onClick: () => setPwdIptState(!pwdIptState),
          })) ||
        //数字框
        (type === 'num' &&
          React__default['default'].createElement(
            'div',
            { className: 'numTags' },
            React__default['default'].createElement(icons.UpOutlined, {
              style: { cursor: 'pointer', fontSize: '10px' },
              onClick: addNum,
            }),
            React__default['default'].createElement(icons.DownOutlined, {
              style: { cursor: 'pointer', fontSize: '10px' },
              onClick: lowNum,
            }),
          )),
    );
  };
  var Input$1 = React.memo(Input);

  const Radio = (props) => {
    const { children } = props;
    return React__default['default'].createElement('div', { style: { display: 'none' } }, children);
  };
  var index$2 = React.memo(Radio);

  const RadioGroup = (props) => {
    const { children, value, canAddOption, boxStyle, onChange } = props;
    const [selectIndex, setSelectIndex] = React.useState(value || 0); //选中索引
    const [renderOptions, setRenderOptions] = React.useState(children);
    const [addOptionVal, setAddOptionVal] = React.useState('');
    const [showAddOption, setShowAddOption] = React.useState(canAddOption && false);
    React.useEffect(() => {
      console.log(boxStyle);
    });
    const changeOptions = (item, i, e) => {
      if (item.disabled) return;
      e && e.stopPropagation();
      setSelectIndex(i);
      onChange && onChange(item, i);
      canAddOption && setShowAddOption(false);
    };
    const addOptions = () => {
      //新增options
      setSelectIndex(renderOptions.length);
      setShowAddOption(true);
    };
    const handleKeyDown = (e) => {
      //新增确认
      if (e.keyCode == 13 && addOptionVal) {
        setRenderOptions((old) => {
          const addOption = {
            props: {
              children: addOptionVal,
            },
          };
          return [...old, addOption];
        });
        setShowAddOption(false);
      }
    };
    const handleIptChange = (val) => {
      //新增输入框
      setAddOptionVal(val);
    };
    const boxStyleClassName = React.useCallback(
      (props, i) => {
        if (props.disabled) {
          return 'groupDisabledStyle';
        }
        if (i == selectIndex) {
          return 'groupActive';
        }
        return 'groupStyle';
      },
      [children, boxStyle, value, selectIndex],
    );
    return React__default['default'].createElement(
      'div',
      { className: 'radioGroup' },
      renderOptions.map((item, index) => {
        return boxStyle
          ? React__default['default'].createElement(
              'div',
              {
                className: boxStyleClassName(item.props, index),
                style: item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
                key: index,
                onClick: (e) => changeOptions(item.props, index, e),
              },
              item.props.children,
            )
          : React__default['default'].createElement(
              'div',
              {
                className: 'radioBox',
                style: item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
                key: index,
                onClick: (e) => changeOptions(item.props, index, e),
              },
              React__default['default'].createElement(
                'span',
                { className: item.props.disabled ? 'disabledLabel' : 'radioLabel' },
                item.props.children,
              ),
              React__default['default'].createElement('input', {
                className: item.props.disabled ? 'disabledRadio' : 'radio',
                readOnly: true,
                type: 'radio',
                checked: selectIndex === index,
                disabled: item.props.disabled,
              }),
            );
      }),
      //新增Options项(优雅之王)
      canAddOption
        ? boxStyle
          ? React__default['default'].createElement(
              'div',
              { className: 'addOption' },
              React__default['default'].createElement(
                'div',
                {
                  className: selectIndex === renderOptions.length ? 'groupActive' : 'groupStyle',
                  onClick: addOptions,
                },
                'More...',
              ),
              showAddOption &&
                React__default['default'].createElement(Input$1, {
                  handleKeyDown: handleKeyDown,
                  handleIptChange: handleIptChange,
                }),
            )
          : React__default['default'].createElement(
              'div',
              { className: 'addOption' },
              React__default['default'].createElement(
                'div',
                { className: 'radioBox', onClick: addOptions },
                React__default['default'].createElement(
                  'span',
                  { className: 'radioLabel' },
                  'More...',
                ),
                React__default['default'].createElement('input', {
                  className: 'radio',
                  type: 'radio',
                  readOnly: true,
                  checked: selectIndex === renderOptions.length,
                }),
              ),
              showAddOption &&
                React__default['default'].createElement(Input$1, {
                  handleKeyDown: handleKeyDown,
                  handleIptChange: handleIptChange,
                }),
            )
        : React__default['default'].createElement(React__default['default'].Fragment, null),
    );
  };
  var index$1 = React.memo(RadioGroup);

  const Menu = (props) => {
    const [nowActiveMainKey, setNowActiveMainKey] = React.useState(''); //选中的一级菜单key
    const [nowActiveKey, setNowActiveKey] = React.useState(''); //选中的子菜单key
    const [parentMenuHeightList, setParentMenuHeightList] = React.useState({}); //父菜单高度集合
    const { items, width, dark, ableToggle, defaultOpen, handleRouteChange } = props;
    React.useEffect(() => {
      const initList = initParentMenuHeight(items, {}, '');
      if (defaultOpen) {
        //默认展开
        for (var key in initList) {
          initList[key].height = initList[key].childNum + 1;
          if (initList[key].children.length > 0) {
            initList[key].children.map((item) => (item.height = (item.childNum + 1) * 50 + 'px'));
            initList[key].height += initList[key].children.reduce((pre, next) => {
              return pre.childNum + next.childNum;
            });
          }
          initList[key].height = initList[key].height * 50 + 'px';
        }
      }
      setParentMenuHeightList(initList);
    }, []);
    // useEffect(() => {
    //   handleRouteChange && handleRouteChange(nowActiveKey);
    // }, [nowActiveKey]);
    const initParentMenuHeight = (item, obj, fatherKey) => {
      //初始化父级菜单高度
      item.forEach((m) => {
        var _a;
        if (m.children) {
          if (m.level == 1) {
            obj[m.key] = {
              key: m.key,
              height: '50px',
              childNum: m.children.length,
              level: m.level,
              children: [],
            };
          } else {
            (_a = obj[fatherKey]) === null || _a === void 0
              ? void 0
              : _a.children.push({
                  key: m.key,
                  height: '50px',
                  childNum: m.children.length,
                  level: m.level,
                });
          }
          initParentMenuHeight(m.children, obj, m.level && m.level == 1 ? m.key : '');
        }
      });
      return obj;
    };
    const toggleFirstMenu = (fMenu, e) => {
      //点击父级菜单
      e.stopPropagation();
      const selectKey = fMenu.key;
      console.log(selectKey);
      setParentMenuHeightList((old) => {
        console.log(old[selectKey].height == '50px');
        old[selectKey].height =
          old[selectKey].height == '50px' ? (old[selectKey].childNum + 1) * 50 + 'px' : '50px';
        console.log(old[selectKey].height);
        if (ableToggle) {
          //手风琴折叠
          if (old[selectKey].height !== '50px') {
            for (var key in old) {
              if (key !== selectKey) {
                old[key].height = '50px';
                if (old[key].children) {
                  old[key].children.map((item) => (item.height = '50px'));
                }
              }
            }
          }
        } else {
          //普通折叠
          if (old[selectKey].children.length !== 0) {
            old[selectKey].children.forEach((c) => {
              c.height = '50px';
            });
            console.log(old);
          }
        }
        console.log(old);
        return JSON.parse(JSON.stringify(old));
      });
    };
    const toggleChildMenu = (cMenu, e, fKey) => {
      //点击子级菜单
      if ((cMenu.level == 2 && !cMenu.children) || cMenu.level == 3) {
        setNowActiveMainKey(fKey);
        setNowActiveKey(cMenu.key);
      }
      if (cMenu.level == 2) {
        //二级菜单扩展切换
        setParentMenuHeightList((old) => {
          for (var key in old) {
            if (
              old[key].children &&
              old[key].children.findIndex((item) => item.key == cMenu.key) !== -1
            ) {
              //找出是哪个一级菜单的children
              const childIndex = old[key].children.findIndex((item) => item.key == cMenu.key);
              old[key].children[childIndex].height =
                old[key].children[childIndex].height == '50px'
                  ? (old[key].children[childIndex].childNum + 1) * 50 + 'px'
                  : '50px';
              let parentHeight = (old[key].childNum - old[key].children.length) * 50 + 50; //改变子菜单高度后统计父菜单高度
              parentHeight += old[key].children.reduce((pre, next) => {
                return Number(pre.height.split('px')[0]) + Number(next.height.split('px')[0]);
              });
              old[key].height = parentHeight;
            }
          }
          return JSON.parse(JSON.stringify(old));
        });
      }
      if (cMenu.level == 3) {
        for (var key in parentMenuHeightList) {
          if (
            parentMenuHeightList[key].children &&
            parentMenuHeightList[key].children.findIndex((item) => item.key == fKey) !== -1
          ) {
            setNowActiveMainKey(parentMenuHeightList[key].key);
          }
        }
      }
    };
    const firstMenuHeight = React.useCallback(
      (key) => {
        var _a;
        //第一级菜单高度
        if (parentMenuHeightList[key]) {
          return {
            height: (_a = parentMenuHeightList[key]) === null || _a === void 0 ? void 0 : _a.height,
          };
        }
        return {
          height: '50px',
        };
      },
      [parentMenuHeightList],
    );
    const childMenuHeight = React.useCallback(
      (key) => {
        var _a;
        //第二级菜单高度
        for (var i in parentMenuHeightList) {
          const childIndex =
            (_a = parentMenuHeightList[i].children) === null || _a === void 0
              ? void 0
              : _a.findIndex((item) => item.key == key);
          if (childIndex !== -1) {
            return {
              height: parentMenuHeightList[i].children[childIndex].height,
            };
          }
        }
        return {
          height: '50px',
        };
      },
      [parentMenuHeightList],
    );
    const customWidth = React.useMemo(() => {
      if (width) {
        if (typeof width == 'string') {
          return {
            width: width.includes('%') ? width : width + 'px',
          };
        } else if (typeof width == 'number') {
          return {
            width: width + 'px',
          };
        }
      }
      return {
        width: '220px',
      };
    }, [width]);
    const renderChildOptions = (childM) => {
      //传入level为1的children，进行子项递归
      if (childM.children) {
        return childM.children.map((m) => {
          return React__default['default'].createElement(
            'div',
            { key: m.key },
            React__default['default'].createElement(
              'div',
              {
                className: nowActiveKey == m.key ? 'activeMenuOptions' : 'childMenuOptions',
                style: Object.assign({}, childMenuHeight(m.key)),
              },
              React__default['default'].createElement(
                'div',
                {
                  className:
                    m.children && m.children.findIndex((i) => i.key == nowActiveKey) !== -1
                      ? 'activeFatherTitle'
                      : 'fatherTitle',
                  onClick: (e) => toggleChildMenu(m, e, childM.key),
                },
                React__default['default'].createElement('span', null, m.label),
                m.children &&
                  (childMenuHeight(m.key).height == '50px'
                    ? React__default['default'].createElement(icons.CaretDownOutlined, null)
                    : React__default['default'].createElement(icons.CaretUpOutlined, null)),
              ),
              React__default['default'].createElement(
                'div',
                { className: 'childMenuOptions', key: m.key },
                m.children && renderChildOptions(m),
              ),
            ),
          );
        });
      }
    };
    return React__default['default'].createElement(
      'div',
      { className: dark ? 'darkMenu' : 'menu', style: customWidth },
      items.map((m) => {
        return React__default['default'].createElement(
          'div',
          { key: m.key },
          React__default['default'].createElement(
            'div',
            { className: 'menuOptions', style: firstMenuHeight(m.key) },
            React__default['default'].createElement(
              'div',
              {
                className: nowActiveMainKey == m.key ? 'activeFatherTitle' : 'fatherTitle',
                onClick: (e) => toggleFirstMenu(m, e),
              },
              React__default['default'].createElement(
                'div',
                { className: 'left' },
                React__default['default'].createElement('i', null, m.icon),
                React__default['default'].createElement('span', null, m.label),
              ),
              firstMenuHeight(m.key).height == '50px'
                ? React__default['default'].createElement(icons.CaretDownOutlined, null)
                : React__default['default'].createElement(icons.CaretUpOutlined, null),
            ),
            React__default['default'].createElement(
              React__default['default'].Fragment,
              null,
              m.children && renderChildOptions(m),
            ),
          ),
        );
      }),
    );
  };
  var index = React.memo(Menu);

  exports.Button = Button;
  exports.Content = index$5;
  exports.Divider = Divider;
  exports.Footer = index$4;
  exports.Header = index$7;
  exports.Input = Input$1;
  exports.Layout = index$8;
  exports.Menu = index;
  exports.Pagination = index$3;
  exports.Radio = index$2;
  exports.RadioGroup = index$1;
  exports.Select = Select$1;
  exports.Slider = index$6;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=index.js.map
