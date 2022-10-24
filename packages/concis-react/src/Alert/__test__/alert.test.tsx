import React from 'react';
import Alert from '../../../src/Alert';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Alert);

describe('Alert', () => {
  it('test base Alert correctly', () => {
    const component = mount(<Alert content="Here is an example text" />);
    expect(component.find('.concis-alert-info').length).toBe(1);
    expect(component.find('.concis-alert').length).toBe(1);
  });

  it('test diff type Alert correctly', () => {
    const component = mount(
      <div>
        <Alert type="success" content="Here is an example text" />
        <Alert type="warning" content="Here is an example text" />
        <Alert type="error" content="Here is an example text" />
        <Alert type="info" content="Here is an example text" />
      </div>
    );
    expect(component.find('.concis-alert-success').length).toBe(1);
    expect(component.find('.concis-alert-warning').length).toBe(1);
    expect(component.find('.concis-alert-error').length).toBe(1);
    expect(component.find('.concis-alert-info').length).toBe(1);
  });

  it('test can close Alert correctly', () => {
    const component = mount(<Alert content="Here is an example text" showClear />);
    const closeIcon = component.find('.close-icon');
    expect(closeIcon.length).toBe(1);
    closeIcon.simulate('click');
    setTimeout(() => {
      expect(component.find('.concis-alert').length).toBe(0);
    }, 200);
  });

  it('test closeElement show correctly', () => {
    const component = mount(
      <Alert
        content="Here is an example text"
        showClear
        closeElement={<div className="close-element">close</div>}
      />
    );
    const closeElement = component.find('.close-element');
    expect(closeElement.length).toBe(1);
    component.setProps({ closeElement: 'close' });
    expect(component.find('.close-icon').text()).toBe('close');
  });

  it('text Alert with title props show correctly', () => {
    const component = mount(<Alert content="Here is an example text" title="title" />);
    expect(component.find('.concis-alert .alert-content .alert-text .title').text()).toBe('title');
  });

  it('text showIcon = false show correctly', () => {
    const component = mount(<Alert content="Here is an example text" showIcon={false} />);
    expect(component.find('.concis-alert .alert-content .alert-icon').length).toBe(0);
  });
});
