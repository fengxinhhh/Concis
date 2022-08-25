import { assignWith } from 'lodash';

type MergeProps = (<A, B>(a: A, b: B) => B & A) & (<A, B, C>(a: A, b: B, c: C) => C & B & A);

export const mergeProps: MergeProps = (...props: any[]) => {
  function customizer(objValue: any, srcValue: any) {
    return srcValue === undefined ? objValue : srcValue;
  }

  let result = { ...props[0] };

  for (const item of props) {
    result = assignWith(result, item, customizer);
  }

  return result;
};
