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
                    <Header extraStyle={{background: "#9ae7d9"}}>
                        header
                    </Header>
                    <Layout>
                        <Slider row={3} extraStyle={{fontSize: "12px", background: "#6bc9b7"}}>
                            slider
                        </Slider>
                        <Content row={7} extraStyle={{fontSize: "50px", background: "#9fd1c8"}}>
                            content
                        </Content>
                    </Layout>
                    <Footer extraStyle={{background: "#9ae7d9"}}>
                        footer
                    </Footer>
                </Layout>
            </div>
        </>

    );
}
