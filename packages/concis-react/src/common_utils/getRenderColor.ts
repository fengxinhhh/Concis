//根据暗黑模式、普通模式、用户自定义全局色判断最终使用颜色

const getRenderColor = (isDark: boolean, globalColor: string | undefined): string => {
  if (globalColor) {
    return globalColor;
  }
  return isDark ? '#1d6db8' : '#1890ff';
};

export { getRenderColor };
