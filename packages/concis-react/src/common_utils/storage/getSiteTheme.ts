// 获取文档主题

const getSiteTheme = () => {
  const theme = window.localStorage.getItem('dumi:prefers-color');
  return theme;
};

export { getSiteTheme };
