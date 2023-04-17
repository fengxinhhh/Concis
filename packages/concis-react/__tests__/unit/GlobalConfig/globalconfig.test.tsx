import React from 'react';
import GlobalConfig from '../../../src/GlobalConfig';
import Button from '../../../src/Button';
import Loading from '../../../src/Loading';
import CheckBox from '../../../src/CheckBox';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

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
    expect(component.find('.concis-button button').getDOMNode().style.background).toBe('red');
    expect(
      component
        .find('.concis-loading')
        .getDOMNode()
        .getAttribute('style')
        .includes('--global-color: red')
    ).toBe(true);
  });

  it('test dark theme run correctly', () => {
    const component = mount(
      <GlobalConfig darkTheme>
        <Button>button test</Button>
        <CheckBox>5</CheckBox>
      </GlobalConfig>
    );
    expect(component.find('.concis-dark-button')).toHaveLength(1);
    expect(component.find('.concis-dark-checkbox')).toHaveLength(1);
  });

  it('test globalColor and darkTheme run correctly', () => {
    const component = mount(
      <GlobalConfig darkTheme globalColor="red">
        <Button>button test</Button>
        <CheckBox>5</CheckBox>
      </GlobalConfig>
    );
    expect(component.find('.concis-dark-button')).toHaveLength(1);
    expect(component.find('.concis-dark-checkbox')).toHaveLength(1);
    expect(component.find('.concis-dark-button button').getDOMNode().style.background).toBe('red');
  });
});
