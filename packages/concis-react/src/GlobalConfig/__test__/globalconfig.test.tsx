import React from 'react';
import GlobalConfig from '../../../src/GlobalConfig';
import Button from '../../../src/Button';
import Loading from '../../../src/Loading';
import CheckBox from '../../../src/CheckBox';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(GlobalConfig);

describe('mountTest', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('test globalColor run correctly', () => {
    const component = mount(
      <GlobalConfig globalColor="red">
        <Button>button test</Button>
        <Loading />
      </GlobalConfig>
    );
    expect(component.prop('globalColor')).toBe('red');
  });

  it('test dark theme run correctly', () => {
    const component = mount(
      <GlobalConfig darkTheme>
        <Button>button test</Button>
        <CheckBox>5</CheckBox>
      </GlobalConfig>
    );
    expect(component.prop('globalColor')).toBeUndefined();
    expect(component.prop('darkTheme')).toBe(true);
  });

  it('test globalColor and darkTheme run correctly', () => {
    const component = mount(
      <GlobalConfig darkTheme globalColor="red">
        <Button>button test</Button>
        <CheckBox>5</CheckBox>
      </GlobalConfig>
    );
    expect(component.prop('globalColor')).toBe('red');
    expect(component.prop('darkTheme')).toBe(true);
  });
});
