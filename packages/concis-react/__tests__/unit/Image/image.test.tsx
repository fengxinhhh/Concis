import React from 'react';
import { act } from 'react-dom/test-utils';
import Image from '../../../src/Image/index';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { shallow, mount } = Enzyme;

mountTest(Image);

describe(`image`, () => {
  it('image src correctly', () => {
    // 图片链接测试
    const src = 'http://concis.org.cn/images/swiper-img5.webp';
    const component = shallow(<Image src={src} />);

    expect(component.find('img')).toHaveLength(1);
    expect(component.find('img').prop('src')).toBe(src);
  });

  it('image fit correctly', () => {
    // 图片填充方式测试
    const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down'];
    const component = shallow(
      <div>
        {fitList.map((fit: any) => (
          <Image src="http://concis.org.cn/images/swiper-img5.webp" fit={fit} key={fit} />
        ))}
      </div>
    );

    const images = Array.from(component.find('img'));
    images.forEach((image: any, index) => {
      expect(image.prop('class')).toBe(`concis-image-${fitList[index]}`);
    });
  });

  it('image round correctly', () => {
    // 图片圆角测试
    const round = '10px';
    const component = mount(
      <Image src="http://concis.org.cn/images/swiper-img5.webp" round={round} />
    );
    expect(
      component.find('img').getDOMNode().getAttribute('style').includes(`border-radius: ${round};`)
    ).toBe(true);
  });

  it('image caption correctly', () => {
    // 图片描述文案
    const text = '描述文案';
    const component = mount(
      <Image
        src="http://concis.org.cn/images/swiper-img5.webp"
        caption={text}
        captionStyle={{ color: 'skyblue' }}
      />
    );
    const caption = component.find('.concis-image-caption');
    expect(caption).toHaveLength(1);
    expect(caption.text()).toBe(text);
    expect(caption.getDOMNode().getAttribute('style').includes('color: skyblue;')).toBe(true);
  });

  it('image preview correctly', () => {
    // 预览测试
    const component = shallow(<Image src="http://concis.org.cn/images/swiper-img5.webp" />);
    const image = component.find('.concis-image');
    image.simulate('click');
    expect(component.find('.preview-image-wrap')).toHaveLength(0);

    act(() => {
      // 开启预览
      component.setProps({
        preview: true,
      });
    });
    image.simulate('click');
    expect(component.find('.preview-image-wrap')).toHaveLength(1);
    expect(component.find('.preview-image-prev')).toHaveLength(0);

    // 关闭预览
    component.find('.preview-image-close').simulate('click');
    setTimeout(() => {
      expect(component.find('.preview-image-wrap')).toHaveLength(0);
    }, 600);
  });

  it('image previewList correctly', () => {
    // 多图预览测试
    const previewList = [
      'http://concis.org.cn/images/swiper-img1.webp',
      'http://concis.org.cn/images/swiper-img5.webp',
      'http://concis.org.cn/images/swiper-img4.webp',
    ];
    const component = mount(
      <Image src="http://concis.org.cn/images/swiper-img5.webp" preview={previewList} />
    );
    const image = component.find('.concis-image');
    image.simulate('click');
    const previewWrap = component.find('.preview-image-wrap');
    const nextBtn = previewWrap.find('.preview-image-next');
    expect(nextBtn).toHaveLength(1);

    // 测试切换下一张
    nextBtn.simulate('click');
    setTimeout(() => {
      expect(previewWrap.find('.preview-image-progress').text()).toBe('1 / 3');
      expect(previewWrap.find('img').prop('src')).toBe(previewList[1]);
    }, 200);

    // 测试旋转缩放
    const operationBtns = previewWrap.find('.preview-image-operations span');
    expect(operationBtns).toHaveLength(4);
    operationBtns.at(0).simulate('click');
    operationBtns.at(2).simulate('click');
    setTimeout(() => {
      expect(
        previewWrap
          .find('img')
          .getDOMNode()
          .getAttribute('style')
          .includes(`'transform: scale(0.9) rotate(-90deg)`)
      ).toBe(true);
    }, 200);

    // 关闭预览
    component.find('.preview-image-close').simulate('click');
    setTimeout(() => {
      expect(component.find('.preview-image-wrap')).toHaveLength(0);
    }, 600);
  });
});
