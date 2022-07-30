import React from 'react';
import { mount } from 'enzyme';

// 此处Component的类型存在疑问，待完善，先暂时用any保证每条mount可以跑起来
export default function mountTest(Component: any) {
  describe(`mount and unmount`, () => {
    it(`component could be updated and unmounted without errors`, () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}
