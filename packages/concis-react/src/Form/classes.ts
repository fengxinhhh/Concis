class FormItemAttrs {
  wrapperCol: number; // 底部距离

  wrapperTol: number; // 顶部距离

  layout: string; // 表单布局形式

  constructor(wrapperCol: number, wrapperTol: number, layout: string) {
    this.wrapperCol = wrapperCol;
    this.wrapperTol = wrapperTol;
    this.layout = layout;
  }

  getStyle() {
    return {
      marginBottom: `${20 + this.wrapperCol}px`,
      marginTop: `${20 + this.wrapperTol}px`,
      ...this.formatLayout(),
    };
  }

  formatLayout() {
    let layoutStyle = {};
    switch (this.layout) {
      case 'horizontal':
        layoutStyle = {};
        break;
      case 'vertical':
        layoutStyle = {
          flexDirection: 'column',
          alignItems: 'flex-start',
        };
        break;
      default: {
        break;
      }
    }
    return layoutStyle;
  }
}

class FormItemLabel {
  layout: string; // 表单布局形式

  constructor(layout: string) {
    this.layout = layout;
  }

  getStyle() {
    return {
      ...this.getAlign(),
    };
  }

  getAlign() {
    let layoutStyle = {};
    switch (this.layout) {
      case 'horizontal':
        layoutStyle = {};
        break;
      case 'vertical':
        layoutStyle = {
          textAlign: 'left',
          marginBottom: '15px',
        };
        break;
      default: {
        break;
      }
    }
    return layoutStyle;
  }
}

export { FormItemAttrs, FormItemLabel };
