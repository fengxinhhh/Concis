export const getClassNames = (obj: any) => {
  const result: string[] = [];

  for (const key of Object.keys(obj)) {
    if (obj[key]) {
      result.push(key);
    }
  }

  return result.join(' ');
};
