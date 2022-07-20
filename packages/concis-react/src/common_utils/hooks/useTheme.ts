import React, { useState, useEffect, useRef } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('');
  const htmlRef = useRef(document.querySelector('html'));

  useEffect(() => {
    console.log(htmlRef.current.getAttribute('data-prefers-color'));
  }, [htmlRef.current]);

  return [theme];
};

export { useTheme };
