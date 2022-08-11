export default function getScrollTop(target: HTMLElement | Window | Document | null) {
  let result = 0;
  if (target === window) {
    result = (target as Window).pageYOffset;
  } else if (target instanceof Document) {
    result = (target as Document).documentElement.scrollTop;
  } else if (target) {
    result = (target as HTMLElement).scrollTop;
  }
  return result;
}
