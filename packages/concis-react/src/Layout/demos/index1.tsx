import Layout from '..';
import Header from '../Header/index';
import Content from '../Content';
import Footer from '../Footer';
import Slider from '../Slider';
import React from 'react';
import usePageListener from '../../common_utils/hooks/usePageListener';
/**
 * transform: true
 */
export default function LayoutDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Layout');

  const headerBg = { background: '#7DBCEA', color: '#fff' };
  const contentBg = { background: '#1890ff', color: '#fff' };
  const sliderBg = { background: '#3ba0e9', color: '#fff' };

  return (
    <>
      <div>
        <Layout>
          <Header extraStyle={headerBg}>header</Header>
          <Content row={10} extraStyle={contentBg}>
            content
          </Content>
          <Footer extraStyle={headerBg}>footer</Footer>
        </Layout>
      </div>
      <br />
      <div>
        <Layout>
          <Header extraStyle={headerBg}>header</Header>
          <Layout>
            <Slider row={3} extraStyle={sliderBg}>
              slider
            </Slider>
            <Content row={7} extraStyle={contentBg}>
              content
            </Content>
          </Layout>
          <Footer extraStyle={headerBg}>footer</Footer>
        </Layout>
      </div>
      <br />
      <div>
        <Layout>
          <Header extraStyle={headerBg}>header</Header>
          <Layout>
            <Content row={5} extraStyle={contentBg}>
              content
            </Content>
            <Slider row={5} extraStyle={sliderBg}>
              slider
            </Slider>
          </Layout>
          <Footer extraStyle={headerBg}>footer</Footer>
        </Layout>
      </div>
      <br />
      <div>
        <Layout>
          <Header extraStyle={headerBg}>header</Header>
          <Layout>
            <Slider row={3} extraStyle={sliderBg}>
              slider
            </Slider>
            <Content row={4} extraStyle={contentBg}>
              content
            </Content>
            <Slider row={3} extraStyle={sliderBg}>
              slider
            </Slider>
          </Layout>
          <Footer extraStyle={headerBg}>footer</Footer>
        </Layout>
      </div>
    </>
  );
}
