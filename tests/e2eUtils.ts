import puppeteer from 'puppeteer';

const getExampleUrl = (componentName: string) => {
  // 获取测试组件的页面url
  return `http://localhost:8000/#/common/${componentName}`;
};
const e2eTestTimeout = 100 * 1000;

const setupPuppeteer = () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
  });
  beforeEach(async () => {
    page = await browser.newPage();

    await page.evaluateOnNewDocument(() => {
      localStorage.clear();
    });
    page.on('console', (e) => {
      if (e.type() === 'error') {
        const err = e.args()[0];
        console.error(`Error from Puppeteer-loaded page:\n`, err);
      }
    });
  });
  afterEach(async () => {
    await page.close();
  });
  afterAll(async () => {
    await browser.close();
  });

  const click = async (dom: string, options?: puppeteer.ClickOptions) => {
    // 点击元素
    await page.click(dom, options);
  };
  // 获取元素
  const $ = async (dom: string) => {
    return await page.$(dom);
  };
  const getCount = async (dom: string) => {
    // 获取元素数量
    return (await page.$$(dom)).length;
  };
  const getText = async (dom: string) => {
    // 获取元素文本内容
    return await page.$eval(dom, (node) => node.textContent);
  };
  const getValue = async (dom: string) => {
    // 获取文本框的内容
    return await page.$eval(dom, (node) => (node as HTMLInputElement).value);
  };
  const getHtml = async (dom: string) => {
    // 获取元素的innerHTML
    return await page.$eval(dom, (node) => node.innerHTML);
  };
  const getClassList = async (dom: string) => {
    // 获取元素所有类名
    return await page.$eval(dom, (node) => [...node.classList]);
  };
  const getChildrenCount = async (dom: string) => {
    // 获取子元素数量
    return await page.$eval(dom, (node) => node.children.length);
  };
  const domIsShow = async (dom: string) => {
    // 判断元素是否在document中
    const display = await page.$eval(dom, (node) => {
      return window.getComputedStyle(node).display;
    });
    return display !== 'none';
  };
  const isChecked = async (dom: string) => {
    // 判断多选框是否被选中
    return await page.$eval(dom, (node) => (node as HTMLInputElement).checked);
  };
  const isFocused = async (dom: string) => {
    // 判断元素是否被聚焦
    return await page.$eval(dom, (node) => node === document.activeElement);
  };
  const setValue = async (dom: string, value: string) => {
    // 设置输入框内容
    const el = (await page.$(dom))!;
    await el.evaluate((node) => ((node as HTMLInputElement).value = ''));
    await el.type(value);
  };
  const setText = async (dom: string, value: string) => {
    // 设置元素内容
    const el = (await page.$(dom))!;
    await el.evaluate((node) => ((node as HTMLElement).innerText = ''));
    await el.evaluate((node) => ((node as HTMLElement).innerText = value));
  };
  const enterValue = async (dom: string, value: string) => {
    // 设置输入框内容后回车
    const el = (await page.$(dom))!;
    await el.evaluate((node) => ((node as HTMLInputElement).value = ''));
    await el.type(value);
    await el.press('Enter');
  };
  const clearValue = async (dom: string) => {
    // 清空输入框内容
    await page.$eval(dom, (node) => ((node as HTMLInputElement).value = ''));
  };
  const timeout = async (time: number) => {
    // 延时
    return page.evaluate((time) => {
      return new Promise((r) => {
        setTimeout(r, time);
      });
    }, time);
  };
  return {
    page: () => page,
    click,
    $,
    getCount,
    getText,
    getValue,
    getHtml,
    getChildrenCount,
    getClassList,
    domIsShow,
    isChecked,
    isFocused,
    setValue,
    setText,
    enterValue,
    clearValue,
    timeout,
  };
};

export { getExampleUrl, setupPuppeteer, e2eTestTimeout };
