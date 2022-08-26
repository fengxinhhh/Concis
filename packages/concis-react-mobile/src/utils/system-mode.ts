import { useEffect, useRef, useState, useCallback } from 'react';

type SystemMode = {
  darkMode: MediaQueryList;
  theme: string;
};

export const getSystemMode = (): SystemMode => {
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  const theme = darkMode && darkMode.matches ? 'dark' : 'light';

  return {
    darkMode,
    theme,
  };
};

export const useSetSystemTheme = (value?: string) => {
  const rootRef = useRef(document.documentElement);
  const darkModeRef = useRef<SystemMode>(getSystemMode());

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
      darkModeRef.current.darkMode.addEventListener('change', darkModeChange);

      setTheme(darkModeRef.current.theme);
    } else {
      darkModeRef.current.darkMode?.removeEventListener('change', darkModeChange);

      setTheme(value);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (!darkModeRef.current?.darkMode) return;

      darkModeRef.current.darkMode?.removeEventListener('change', darkModeChange);
    };
  }, []);
};
