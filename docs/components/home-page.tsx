import React, { useContext, useMemo } from 'react';
import { context } from 'dumi/theme';
import styles from './home-page.less';
import { version } from '../../packages/concis-react/package.json';

export default () => {
  const { locale } = useContext(context);

  const characteristics = useMemo(() => {
    if (locale === 'zh-CN') {
      return [
        {
          img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
          title: '开箱即用',
          txt: '简单易用，降低使用者的代码量',
        },
        {
          img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
          title: 'TypeScript',
          txt: '使用 TypeScript 开发，提供完整的类型定义文件',
        },
        {
          img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
          title: '预设行为',
          txt: '更少的代码，更少的 Bug',
        },
        {
          img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
          title: '简单易用',
          txt: '在 Ant Design 上进行了自己的封装，更加易用',
        },
      ];
    }
    return [
      {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
        title: 'Out of the box',
        txt: 'Easy to use and reduce the users code',
      },
      {
        img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
        title: 'TypeScript',
        txt: 'Use TypeScript development to provide a complete type definition file',
      },
      {
        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
        title: 'Preset behavior',
        txt: 'Less code, fewer bugs',
      },
      {
        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
        title: 'Easy to use',
        txt: 'Encapsulated on Ant Design to make it easier to use',
      },
    ];
  }, [locale]);
  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Concis</h1>
            <p className={styles.description}>
              {locale === 'zh-CN'
                ? '体验轻量级React Web开发体验'
                : 'Experience lightweight React Web development experience'}

              <span className={styles.version}>v{version}</span>
            </p>
            <p className={styles.buttons}>
              <a href="/#/guide/introduce">{locale === 'zh-CN' ? '开始' : 'Start'}</a>
              <a href="/#/common/button">{locale === 'zh-CN' ? '组件' : 'Components'}</a>
              <a href="https://github.com/fengxinhhh/Concis">
                {locale === 'zh-CN' ? '在Github上查看' : 'View on Github'}
              </a>
            </p>
          </div>
          <div className={styles.headerRight}>
            <img
              className={styles.headerImage}
              alt="header-image"
              src="http://concis.org.cn/images/concis-logo.png"
            />
            <span className={styles.plus}>+</span>
            <img
              className={styles.headerImage}
              alt="header-image"
              src="http://concis.org.cn/images/react-icon.svg"
            />
          </div>
        </div>
        {/* 功能特性 */}
        <div className={styles.group}>
          <div className={styles.groupTitle}>
            <div />
            <span>{locale === 'zh-CN' ? '功能特性' : 'Characteristics'}</span>
            <div />
          </div>
          <ul className={styles.features}>
            {characteristics.map((item) => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 74, height: 84 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
