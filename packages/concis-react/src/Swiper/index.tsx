import React, {
  FC,
  memo,
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
  CSSProperties,
} from 'react';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import swiperIndex from './cardSwiperIndex';
import './index.module.less';

interface swiperProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 图片列表
   * @default []
   */
  imgList: Array<string>;
  /**
   * @description 轮播图宽度
   * @default 400px
   */
  pictureSize?: number;
  /**
   * @description 轮播图高度
   * @default 240px
   */
  height?: number;
  /**
   * @description 自动播放
   * @default false
   */
  autoPlayer?: boolean;
  /**
   * @description 展示小圆点
   * @default false
   */
  showTrigger?: boolean;
  /**
   * @description 自动播放间隔
   * @default 3000ms
   */
  deply?: number;
  /**
   * @description 卡片式轮播图
   * @default false
   */
  card?: boolean;
}
type imgPos = {
  // 卡片图配置接口范式
  left: number | string;
  top?: number | string;
  right?: number;
  bottom?: number;
  margin?: string;
};
interface imgOptions {
  leftPic: {
    pos: imgPos;
    width: string;
    height: string;
    zIndex: number;
    top: string;
    picIndex: number;
    opacity: number;
  };
  centerPic: {
    pos: imgPos;
    width: string;
    height: string;
    zIndex: number;
    top: string;
    picIndex: number;
    opacity: number;
  };
  rightPic: {
    pos: imgPos;
    width: string;
    height: string;
    zIndex: number;
    top: string;
    picIndex: number;
    opacity: number;
  };
}

const Swiper: FC<swiperProps> = (props) => {
  const {
    imgList,
    className,
    style,
    pictureSize = 400,
    height = 240,
    autoPlayer,
    deply = 3000,
    showTrigger,
    card,
  } = props;

  const [renderImgList, setRenderImgList] = useState<Array<string>>(imgList);
  const [propsImgList, setPropsImgList] = useState<Array<string>>(imgList);
  const [rightTransform, setRightTransform] = useState(pictureSize);
  const [transition, setTransition] = useState('0.2s linear');
  const [cardSwiperIndex, setCardSwiperIndex] = useState<any>(swiperIndex[imgList.length]);
  const [cardImgTransform, setCardImgTransform] = useState<imgOptions>({
    // 卡片图片样式参数
    leftPic: {
      pos: {
        left: 0,
      },
      width: `${pictureSize / 2}px`,
      height: `${height - 60}px`,
      zIndex: 2,
      top: '20px',
      picIndex: 0,
      opacity: 0.4,
    },
    centerPic: {
      pos: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
      },
      width: `${pictureSize}px`,
      height: `${height}px`,
      zIndex: 5,
      top: '',
      picIndex: 1,
      opacity: 1,
    },
    rightPic: {
      pos: {
        left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
      },
      width: `${pictureSize / 2}px`,
      height: `${height - 60}px`,
      zIndex: 2,
      top: '20px',
      picIndex: 2,
      opacity: 0.4,
    },
  });
  const [cardPlayCircleIndex, setCardPlayCircleIndex] = useState(0); //  卡片轮播图小圆点下标

  const timer: any = useRef();
  const cardTimer: any = useRef();

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, card ? 'concis-card-swiper' : 'concis-swipers');

  useEffect(() => {
    const propsImgList = JSON.parse(JSON.stringify(imgList));
    setPropsImgList(imgList);
    propsImgList.push(propsImgList[0]);
    propsImgList.unshift(propsImgList[propsImgList.length - 2]);
    setRenderImgList(propsImgList);
    const imgLen: number = imgList.length;
    setCardSwiperIndex(swiperIndex[imgLen]);
  }, []);
  useEffect(() => {
    if (autoPlayer) {
      if (card) {
        requestAnimationFrame(cardAutoPlay);
      } else {
        requestAnimationFrame(autoPlay);
      }
    }
    return () => {
      clearInterval(timer.current);
      clearInterval(cardTimer.current);
    };
  }, []);

  const autoPlay = () => {
    // 普通轮播自动播放
    timer.current = setInterval(() => {
      setRightTransform((o) => {
        const newState = JSON.parse(JSON.stringify(o));
        if (newState >= renderImgList.length * pictureSize) {
          setTransition('');
        } else {
          setTransition('0.2s linear');
        }
        return newState >= renderImgList.length * pictureSize ? 0 : newState + pictureSize;
      });
    }, deply);
  };
  const cardAutoPlay = () => {
    // 卡片图自动播放
    cardTimer.current = setInterval(() => {
      setCardImgTransform((old) => {
        if (old.centerPic.pos.margin) {
          old.centerPic = {
            pos: {
              left: 0,
            },
            width: `${pictureSize / 2}px`,
            height: `${height - 60}px`,
            zIndex: 2,
            top: '20px',
            picIndex: 0,
            opacity: 0.4,
          };
        } else if (!old.centerPic.pos.margin && old.centerPic.pos.left === 0) {
          old.centerPic = {
            pos: {
              left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
            },
            width: `${pictureSize / 2}px`,
            height: `${height - 60}px`,
            zIndex: 2,
            top: '20px',
            picIndex: 2,
            opacity: 0.4,
          };
        } else {
          old.centerPic = {
            pos: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: 'auto',
            },
            width: `${pictureSize}px`,
            height: `${height}px`,
            zIndex: 5,
            top: '',
            picIndex: 1,
            opacity: 1,
          };
        }
        if (old.leftPic.pos.margin) {
          old.leftPic = {
            pos: {
              left: 0,
            },
            width: `${pictureSize / 2}px`,
            height: `${height - 60}px`,
            zIndex: 2,
            top: '20px',
            picIndex: 0,
            opacity: 0.4,
          };
        } else if (!old.leftPic.pos.margin && old.leftPic.pos.left === 0) {
          old.leftPic = {
            pos: {
              left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
            },
            width: `${pictureSize / 2}px`,
            height: `${height - 60}px`,
            zIndex: 2,
            top: '20px',
            picIndex: 2,
            opacity: 0.4,
          };
        } else {
          old.leftPic = {
            pos: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: 'auto',
            },
            width: `${pictureSize}px`,
            height: `${height}px`,
            zIndex: 5,
            top: '',
            picIndex: 1,
            opacity: 1,
          };
        }
        if (old.rightPic.pos.margin) {
          old.rightPic = {
            pos: {
              left: 0,
            },
            width: `${pictureSize / 2}px`,
            height: `${height - 60}px`,
            zIndex: 2,
            top: '20px',
            picIndex: 0,
            opacity: 0.4,
          };
        } else if (!old.rightPic.pos.margin && old.rightPic.pos.left === 0) {
          old.rightPic = {
            pos: {
              left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
            },
            width: `${pictureSize / 2}px`,
            height: `${height - 60}px`,
            zIndex: 2,
            top: '20px',
            picIndex: 2,
            opacity: 0.4,
          };
        } else {
          old.rightPic = {
            pos: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: 'auto',
            },
            width: `${pictureSize}px`,
            height: `${height}px`,
            zIndex: 5,
            top: '',
            picIndex: 1,
            opacity: 1,
          };
        }
        return JSON.parse(JSON.stringify(old));
      });
      setCardSwiperIndex((old: any) => {
        old.push(old[0]);
        old.shift();
        return JSON.parse(JSON.stringify(old));
      });
      setCardPlayCircleIndex((old) => {
        if (old >= cardSwiperIndex.length - 1) {
          return 0;
        }
        return old + 1;
      });
    }, deply);
  };
  const toggleNext = () => {
    if (rightTransform >= (renderImgList.length - 2) * pictureSize) {
      setTransition('');
      setRightTransform(0);
      setTimeout(() => {
        setTransition('0.2s linear');
        setRightTransform(pictureSize);
      }, 0);
    } else {
      setRightTransform(rightTransform + pictureSize);
    }
  };
  const togglePrev = () => {
    if (rightTransform <= 0) {
      setTransition('');
      setRightTransform((renderImgList.length - 2) * pictureSize);
      setTimeout(() => {
        setTransition('0.2s linear');
        setRightTransform((renderImgList.length - 2) * pictureSize - pictureSize);
      }, 0);
    } else {
      setRightTransform(rightTransform - pictureSize);
    }
  };
  const clickToggle = (index: number) => {
    setRightTransform((index + 1) * pictureSize);
  };
  const circleStyle = useCallback(
    (index: number) => {
      // 点击普通轮播图小圆点
      if (rightTransform === pictureSize && index === 0) {
        return 'option-active';
      }
      if (rightTransform === 0 && index === renderImgList.length - 3) {
        return 'option-active';
      }
      if (rightTransform / pictureSize - 1 === index) {
        return 'option-active';
      }

      return 'option';
    },
    [rightTransform]
  );
  const cardImgStyle = useCallback(
    (option: number) => {
      // 卡片式轮播图片样式
      if (option === 0) {
        // center
        return {
          width: cardImgTransform.centerPic.width,
          ...cardImgTransform.centerPic.pos,
          height: cardImgTransform.centerPic.height,
          zIndex: cardImgTransform.centerPic.zIndex,
          top: cardImgTransform.centerPic.top,
          opacity: cardImgTransform.centerPic.opacity,
        };
      }
      if (option === 1) {
        // left
        return {
          width: cardImgTransform.leftPic.width,
          ...cardImgTransform.leftPic.pos,
          height: cardImgTransform.leftPic.height,
          zIndex: cardImgTransform.leftPic.zIndex,
          top: cardImgTransform.leftPic.top,
          opacity: cardImgTransform.leftPic.opacity,
        };
      }
      if (option === 2) {
        // right
        return {
          width: cardImgTransform.rightPic.width,
          ...cardImgTransform.rightPic.pos,
          height: cardImgTransform.rightPic.height,
          zIndex: cardImgTransform.rightPic.zIndex,
          top: cardImgTransform.rightPic.top,
          opacity: cardImgTransform.rightPic.opacity,
        };
      }
    },
    [cardImgTransform]
  );
  const toggleCard = (styles: any) => {
    // 卡片轮播手动切换
    if (styles.zIndex === 2 && styles.left !== 0) {
      // 点击next
      const oldCardImgTransform = { ...cardImgTransform };
      if (oldCardImgTransform.centerPic.pos.margin) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.centerPic.pos.margin &&
        oldCardImgTransform.centerPic.pos.left === 0
      ) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      }
      if (oldCardImgTransform.leftPic.pos.margin) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.leftPic.pos.margin &&
        oldCardImgTransform.leftPic.pos.left === 0
      ) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      }
      if (oldCardImgTransform.rightPic.pos.margin) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.rightPic.pos.margin &&
        oldCardImgTransform.rightPic.pos.left === 0
      ) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      }
      setCardImgTransform(oldCardImgTransform);
      const oldCardSwiperIndex = [...cardSwiperIndex];
      oldCardSwiperIndex.push(oldCardSwiperIndex.shift() as any);
      setCardSwiperIndex(oldCardSwiperIndex);
      setCardPlayCircleIndex((old) => {
        if (old >= cardSwiperIndex.length - 1) {
          return 0;
        }
        return old + 1;
      });
    } else if (styles.zIndex === 2 && styles.left === 0) {
      // 点击prev，中间图往右，右图往左，左图往中
      const oldCardImgTransform = { ...cardImgTransform };
      if (oldCardImgTransform.centerPic.pos.margin) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.centerPic.pos.margin &&
        oldCardImgTransform.centerPic.pos.left === 0
      ) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      } else {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      }
      if (oldCardImgTransform.leftPic.pos.margin) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.leftPic.pos.margin &&
        oldCardImgTransform.leftPic.pos.left === 0
      ) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      } else {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      }
      if (oldCardImgTransform.rightPic.pos.margin) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.rightPic.pos.margin &&
        oldCardImgTransform.rightPic.pos.left === 0
      ) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      } else {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      }
      setCardImgTransform(oldCardImgTransform);
      const oldCardSwiperIndex = [...cardSwiperIndex];
      oldCardSwiperIndex.unshift(oldCardSwiperIndex[oldCardSwiperIndex.length - 1]);
      oldCardSwiperIndex.pop();
      setCardSwiperIndex(oldCardSwiperIndex);
      setCardPlayCircleIndex((old) => {
        if (old - 1 < 0) {
          return cardSwiperIndex.length - 1;
        }
        return old - 1;
      });
    }
  };
  const clickCardToggle = (index: number) => {
    // 点击卡片轮播图小圆点
    if (cardPlayCircleIndex < index) {
      setCardPlayCircleIndex(index);
      const oldCardImgTransform = { ...cardImgTransform };
      if (oldCardImgTransform.centerPic.pos.margin) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.centerPic.pos.margin &&
        oldCardImgTransform.centerPic.pos.left === 0
      ) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      }
      if (oldCardImgTransform.leftPic.pos.margin) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.leftPic.pos.margin &&
        oldCardImgTransform.leftPic.pos.left === 0
      ) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      }
      if (oldCardImgTransform.rightPic.pos.margin) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.rightPic.pos.margin &&
        oldCardImgTransform.rightPic.pos.left === 0
      ) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      }
      setCardImgTransform(oldCardImgTransform);
      setCardSwiperIndex((old: any) => {
        old.sort((a: any, b: any) => a[0] - b[0]);
        for (let i = 0; i < index; i++) {
          old.push(old.shift() as any);
        }
        return JSON.parse(JSON.stringify(old));
      });
    } else if (cardPlayCircleIndex > index) {
      setCardPlayCircleIndex(index);
      const oldCardImgTransform = { ...cardImgTransform };
      if (oldCardImgTransform.centerPic.pos.margin) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.centerPic.pos.margin &&
        oldCardImgTransform.centerPic.pos.left === 0
      ) {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      } else {
        oldCardImgTransform.centerPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      }
      if (oldCardImgTransform.leftPic.pos.margin) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.leftPic.pos.margin &&
        oldCardImgTransform.leftPic.pos.left === 0
      ) {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      } else {
        oldCardImgTransform.leftPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      }
      if (oldCardImgTransform.rightPic.pos.margin) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: `${pictureSize * 2 - 40 - pictureSize / 2}px`,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 2,
          opacity: 0.4,
        };
      } else if (
        !oldCardImgTransform.rightPic.pos.margin &&
        oldCardImgTransform.rightPic.pos.left === 0
      ) {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          },
          width: `${pictureSize}px`,
          height: `${height}px`,
          zIndex: 5,
          top: '',
          picIndex: 1,
          opacity: 1,
        };
      } else {
        oldCardImgTransform.rightPic = {
          pos: {
            left: 0,
          },
          width: `${pictureSize / 2}px`,
          height: `${height - 60}px`,
          zIndex: 2,
          top: '20px',
          picIndex: 0,
          opacity: 0.4,
        };
      }
      setCardImgTransform(oldCardImgTransform);
      setCardSwiperIndex((old: any) => {
        old.sort((a: any, b: any) => a[0] - b[0]);
        for (let i = 0; i < old.length; i++) {
          if (old[i] === cardSwiperIndex[index]) {
            break;
          } else {
            old.push(old.shift() as any);
          }
        }
        return JSON.parse(JSON.stringify(old));
      });
    }
  };

  return (
    <Fragment>
      {!card ? (
        <div
          className={classNames}
          style={{ width: `${pictureSize}px`, height: `${height}px`, ...style }}
        >
          <div
            className="swiperList"
            style={{
              right: `${rightTransform}px`,
              transition,
              width: `${pictureSize * renderImgList.length}px`,
            }}
          >
            {renderImgList.map((img, index) => {
              return (
                <img
                  key={index}
                  className="swiper-img"
                  style={{ width: `${pictureSize}px`, height: `${height}px` }}
                  src={img}
                />
              );
            })}
          </div>
          <div className="prev-btn" onClick={togglePrev}>
            <LeftCircleOutlined />
          </div>
          <div className="next-btn" onClick={toggleNext}>
            <RightCircleOutlined />
          </div>
          {showTrigger && (
            <div className="menu-options">
              {new Array(imgList.length).fill('').map((o, i) => {
                return <div key={i} className={circleStyle(i)} onClick={() => clickToggle(i)} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <div
          className={classNames}
          style={{ height: `${height}px`, width: `${pictureSize * 2}px`, ...style }}
        >
          <div
            className="center-pic"
            style={{ width: `${pictureSize * 2 - 40}px`, height: `${height}px` }}
          >
            <img
              src={propsImgList[cardSwiperIndex[0][cardImgTransform.centerPic.picIndex]]}
              style={cardImgStyle(0)}
              className="center"
              onClick={() => toggleCard(cardImgStyle(0))}
            />
            <img
              src={propsImgList[cardSwiperIndex[0][cardImgTransform.leftPic.picIndex]]}
              style={cardImgStyle(1)}
              className="left"
              onClick={() => toggleCard(cardImgStyle(1))}
            />
            <img
              src={propsImgList[cardSwiperIndex[0][cardImgTransform.rightPic.picIndex]]}
              style={cardImgStyle(2)}
              className="right"
              onClick={() => toggleCard(cardImgStyle(2))}
            />
          </div>
          {showTrigger && (
            <div className="menu-options">
              {new Array(propsImgList.length).fill('').map((o, i) => {
                return (
                  <div
                    key={i}
                    className={i === cardPlayCircleIndex ? 'option-active' : 'option'}
                    onClick={() => clickCardToggle(i)}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default memo(Swiper);
