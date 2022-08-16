const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

export function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}): { element: Element; callback: () => void }[] {
  let observeElement: { element: Element; callback: () => void }[] = [];
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = root;
    readonly rootMargin: string = rootMargin;
    readonly thresholds: ReadonlyArray<number> = thresholds;
    disconnect: () => void = disconnect;
    observe: (target: Element) => void = (element: Element) => {
      observeElement.push({
        element,
        callback: this.execute.bind(this),
      });
      observe();
    };
    takeRecords: () => IntersectionObserverEntry[] = () => [
      {
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 1,
        intersectionRect: {} as DOMRectReadOnly,
        isIntersecting: true,
        rootBounds: null,
        target: {} as Element,
        time: 1,
      },
    ];
    unobserve: (target: Element) => void = (element) => {
      observeElement = observeElement.filter((ele) => ele.element != element);
      unobserve();
    };
    callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
    constructor(
      callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
    ) {
      this.callback = callback;
    }
    execute() {
      const takeRecords = this.takeRecords();
      this.callback.call(this, takeRecords, this);
    }
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
  return observeElement;
}

export default Enzyme;
