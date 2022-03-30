import Layout from '..';
import Header from '../Header/index'
import Content from '../Content';
import Footer from '../Footer'
import Slider from '../Slider';
import React from 'react';
/**
 * transform: true
 */
export default function LayoutDemo1() {
    return (
        <>
            <div>
                <Layout>
                    <Header>
                        header
                    </Header>
                    <Content row={10}>
                        content
                    </Content>
                    <Footer>
                        footer
                    </Footer>
                </Layout>
            </div>
            <br />
            <div>
                <Layout>
                    <Header>
                        header
                    </Header>
                    <Layout>
                        <Slider row={3}>
                            slider
                        </Slider>
                        <Content row={7}>
                            content
                        </Content>
                    </Layout>

                    <Footer>
                        footer
                    </Footer>
                </Layout>
            </div>
            <br />
            <div>
                <Layout>
                    <Header>
                        header
                    </Header>
                    <Layout>
                        <Content row={5}>
                            content
                        </Content>
                        <Slider row={5}>
                            slider
                        </Slider>
                    </Layout>

                    <Footer>
                        footer
                    </Footer>
                </Layout>
            </div>
            <br/>
            <div>
                <Layout>
                    <Header>
                        header
                    </Header>
                    <Layout>
                        <Slider row={3}>
                            slider
                        </Slider>
                        <Content row={4}>
                            content
                        </Content>
                        <Slider row={3}>
                            slider
                        </Slider>
                    </Layout>

                    <Footer>
                        footer
                    </Footer>
                </Layout>
            </div>
        </>

    );
}
