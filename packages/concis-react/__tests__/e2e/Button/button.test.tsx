import { getExampleUrl, setupPuppeteer, e2eTestTimeout } from '../../e2eUtils';

describe('button e2e test', () => {
  const { getHtml, page, getCount, getClassList } = setupPuppeteer();

  const buttonTest = async () => {
    await page().goto(getExampleUrl('button'), {
      waitUntil: 'domcontentloaded',
    });
    //demo1
    expect(await getCount('#button-index1 .concis-button')).toBe(5);
    expect(
      (await getClassList('#button-index1 .concis-button:nth-child(1) button')).includes(
        'concis-button-primary',
      ),
    ).toBe(true);
    expect(
      (await getClassList('#button-index1 .concis-button:nth-child(2) button')).includes(
        'concis-button-danger',
      ),
    ).toBe(true);
    expect(
      (await getClassList('#button-index1 .concis-button:nth-child(3) button')).includes(
        'concis-button-warning',
      ),
    ).toBe(true);
    expect(
      (await getClassList('#button-index1 .concis-button:nth-child(4) button')).includes(
        'concis-button-info',
      ),
    ).toBe(true);
    expect(
      (await getClassList('#button-index1 .concis-button:nth-child(5) button')).includes(
        'concis-button-text',
      ),
    ).toBe(true);
    //demo2
    expect(await getCount('#button-index2 .concis-button')).toBe(5);
    expect(
      (await getHtml('#button-index2 .concis-button:nth-child(1)')).includes('width: 400px'),
    ).toBe(true);
    //demo3
    expect(await getCount('#button-index3 .concis-button')).toBe(5);
    expect(
      (await getHtml('#button-index3 .concis-button:nth-child(1)')).includes('border-radius: 50%'),
    ).toBe(true);
    //demo4
    expect(await getCount('#button-index4 .concis-button')).toBe(5);
    expect(
      (await getHtml('#button-index4 .concis-button:nth-child(1)')).includes('cursor: not-allowed'),
    ).toBe(true);
    //demo5
    expect(await getCount('#button-index5 .concis-button')).toBe(5);
    //demo6
    expect(await getCount('#button-index6 .concis-button')).toBe(5);
    expect(
      await getCount('#button-index6 .concis-button:nth-child(1) button .concis-button-loading'),
    ).toBe(1);
    //demo7
    expect(await getCount('#button-index8 .concis-button')).toBe(3);
    expect(await getCount('#button-index8 .concis-button:nth-child(1) button .button-icon')).toBe(
      1,
    );
    //demo8
    expect(await getCount('#button-index7 .concis-button-group')).toBe(5);
    expect(await getCount('#button-index7 .concis-button-group:nth-child(1) .concis-button')).toBe(
      4,
    );
  };

  test('test e2e test', async () => await buttonTest(), e2eTestTimeout);
});
