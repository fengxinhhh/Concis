type classNamesArg = Array<any>;

export default function (...args: classNamesArg): string {
  const classNames: any = [];
  args.forEach((item) => {
    classNames.push(item);
  });
  return [...new Set(classNames)].join(' ');
}
