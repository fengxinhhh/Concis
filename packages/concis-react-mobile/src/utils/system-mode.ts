import { useEffect } from 'react';

export const getSystemMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
};

export const getSystemTheme = () => {
  const darkMode = getSystemMode();

  return darkMode && darkMode.matches ? 'dark' : 'light';
};

export const useSetSystemTheme = (theme?: string) => {
  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;

    const value = theme === 'auto' ? getSystemTheme() : theme;

    root.setAttribute('data-ccsm-theme', value);
  }, [theme]);
};
