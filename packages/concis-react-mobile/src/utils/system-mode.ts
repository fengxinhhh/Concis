import { useEffect, useRef, useState, useCallback } from 'react';

export const getDarkMode = (): MediaQueryList => {
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  return darkMode;
};

export const useSetSystemTheme = (value?: string) => {
  const rootRef = useRef(document.documentElement);
  const darkModeRef = useRef<MediaQueryList>(getDarkMode());

  const [theme, setTheme] = useState('');

  // 绑定addEventListener的回调函数，需要useCallback包裹防止重新生成函数
  const darkModeChange = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (!theme || !rootRef.current) return;

    rootRef.current.setAttribute('data-ccsm-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!value) return;

    if (value === 'auto') {
      darkModeRef.current.addEventListener('change', darkModeChange);

      setTheme(darkModeRef.current.matches ? 'dark' : 'light');
    } else {
      darkModeRef.current?.removeEventListener('change', darkModeChange);

      setTheme(value);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (!darkModeRef.current) return;

      darkModeRef.current.removeEventListener('change', darkModeChange);
    };
  }, []);
};
