declare module '*.css';
declare module '*.less' {
  const style: { readonly [key: string]: string };
  export default style;
}
