import { getExampleUrl, setupPuppeteer, e2eTestTimeout } from '../../../../../../tests/e2eUtils';

describe('form e2e test', () => {
  const { click, page, getCount, getText, getChildrenCount, setValue, getValue } = setupPuppeteer();

  const formTest = async () => {
    await page().goto(getExampleUrl('form'), {
      waitUntil: 'domcontentloaded',
    });
    // 基本demo展示Dom测试
    expect(await getCount('#form-index1 .concis-form .concis-form-item')).toBe(4);
    expect(
      await getText(
        '#form-index1 .concis-form .concis-form-item:nth-child(1) .concis-form-item-label'
      )
    ).toBe('Username');
    expect(
      await getText(
        '#form-index1 .concis-form .concis-form-item:nth-child(2) .concis-form-item-label'
      )
    ).toBe('Post');
    expect(
      await getText(
        '#form-index1 .concis-form .concis-form-item:nth-child(3) .concis-form-item-label'
      )
    ).toBe('');
    expect(
      await getText(
        '#form-index1 .concis-form .concis-form-item:nth-child(4) .concis-form-item-label'
      )
    ).toBe('');
    // 切换布局radioGroup测试
    expect(await getCount('#form-index2 .concis-radio-group')).toBe(1);
    // 全局禁用测试
    expect(await getCount('#form-index5 .disabled')).toBe(1);
    // 单行禁用测试
    expect(
      await getCount(
        '#form-index7 .concis-form .concis-form-item:nth-child(2) .concis-form-item-disabled'
      )
    ).toBe(1);
    // 测试添加校验label icon显示
    expect(
      await getChildrenCount(
        '#form-index8 .concis-form .concis-form-item:nth-child(1) .concis-form-item-label'
      )
    ).toBe(1);
    // 校验失败的测试
    await click(
      '#form-index8 .concis-form .concis-form-item:nth-child(3) .concis-form-item-content'
    );
    expect(await getText('#form-index8 .concis-form .show-rule-label')).toBe('必须包含a');
    // 提交后弹窗测试
    await click(
      '#form-index9 .concis-form .concis-form-item:nth-child(3) .concis-form-item-content'
    );
    expect(await getChildrenCount('.all-container')).toBe(1);
    // 测试重置
    await setValue('#form-index6 .concis-form .concis-form-item:nth-child(1) input', '123');
    expect(await getValue('#form-index6 .concis-form .concis-form-item:nth-child(1) input')).toBe(
      '123'
    );
    await click(
      '#form-index6 .concis-form .concis-form-item:nth-child(12) .concis-form-item-content .concis-button:nth-child(2)'
    );
    // 测试重置后所有form-item都为空
    expect(await getValue('#form-index6 .concis-form .concis-form-item:nth-child(1) input')).toBe(
      ''
    );
    expect(await getValue('#form-index6 .concis-form .concis-form-item:nth-child(2) input')).toBe(
      ''
    );
  };
  test('test e2e test', async () => await formTest(), e2eTestTimeout);
});
