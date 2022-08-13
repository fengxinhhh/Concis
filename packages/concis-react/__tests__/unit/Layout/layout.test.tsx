import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../../src/Layout/index';
import Header from '../../../src/Layout/Header';
import Slider from '../../../src/Layout/Slider';
import Footer from '../../../src/Layout/Footer';
import Content from '../../../src/Layout/Content';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;
let container: HTMLDivElement | null;

mountTest(Layout);
mountTest(Header);
mountTest(Slider);
mountTest(Footer);
mountTest(Content);

describe('Layout', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container as HTMLDivElement);
    container = null;
  });

  it('test layout & header & footer show correctly', () => {
    const component = mount(
      <Layout>
        <Header>header</Header>
        <Content row={10}>content</Content>
        <Footer>footer</Footer>
      </Layout>,
    );
    expect(component.find('.concis-header').text()).toBe('header');
    expect(component.find('.concis-layout-content').text()).toBe('content');
    expect(component.find('.concis-footer').text()).toBe('footer');
  });

  it('test layout & header & footer & slider show correctly', () => {
    const component = mount(
      <Layout>
        <Header>header</Header>
        <Layout>
          <Slider row={3}>slider</Slider>
          <Content row={7}>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>,
    );
    expect(component.find('.concis-header').text()).toBe('header');
    expect(component.find('.concis-layout .concis-layout-content').text()).toBe('content');
    expect(component.find('.concis-layout .concis-slider').text()).toBe('slider');
    expect(component.find('.concis-footer').text()).toBe('footer');
  });

  it('test props styles setting correctly', () => {
    const component = (
      <Layout>
        <Header extraStyle={{ background: 'rgb(154, 231, 217)' }}>header</Header>
        <Layout>
          <Slider row={3} extraStyle={{ fontSize: '12px', background: 'rgb(107, 201, 183)' }}>
            slider
          </Slider>
          <Content row={7} extraStyle={{ fontSize: '50px', background: 'rgb(159, 209, 200)' }}>
            content
          </Content>
        </Layout>
        <Footer extraStyle={{ background: 'rgb(154, 231, 217)' }}>footer</Footer>
      </Layout>
    );
    ReactDOM.render(component, container);

    expect(
      container
        ?.querySelector('.header')
        ?.getAttribute('style')
        ?.includes('background: rgb(154, 231, 217)'),
    );
    expect(
      container
        ?.querySelector('.slider')
        ?.getAttribute('style')
        ?.includes('font-size: 12px; background: rgb(107, 201, 183)'),
    );
    expect(
      container
        ?.querySelector('.layout-content')
        ?.getAttribute('style')
        ?.includes('font-size: 50px; background: rgb(159, 209, 200)'),
    );
    expect(
      container
        ?.querySelector('.footer')
        ?.getAttribute('style')
        ?.includes('background: rgb(154, 231, 217)'),
    );
  });
});
