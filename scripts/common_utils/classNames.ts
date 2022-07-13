type classNamesArg = Array<string>;

export default function (...args: classNamesArg): string {
  let classNames = [];
  args.forEach((item) => {
    classNames.push(item);
  });
  return [...new Set(classNames)].join(' ');
}
