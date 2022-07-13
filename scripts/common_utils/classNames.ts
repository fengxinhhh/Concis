type classNamesArg = Array<string>;

export default function (...args: classNamesArg): string {
  console.log(args);
  let classNames = [];
  args.forEach((item) => {
    classNames.push(item);
  });
  return [...new Set(classNames)].join(' ');
}
