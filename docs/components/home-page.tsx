import React, { useContext } from 'react'
import styles from './home-page.less';
import { version } from '../../packages/concis-react/package.json';
// import { context } from 'dumi/theme'

const codesandboxLink =
  'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json'

export default () => {
  // const { locale } = useContext(context)


  const characteristics = [
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
      title: '开箱即用',
      txt: '简单易用，降低使用者的代码量'
    },
    {
      img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
      title: 'TypeScript',
      txt: '使用 TypeScript 开发，提供完整的类型定义文件'
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
      title: '预设行为',
      txt: '更少的代码，更少的 Bug'
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
      title: '简单易用',
      txt: '在 Ant Design 上进行了自己的封装，更加易用'
    },
  ]
  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Concis</h1>
            <p className={styles.description}>
              体验轻量级React Web开发体验
              <span className={styles.version}>v{version}</span>
            </p>
            <p className={styles.buttons}>
              <a href='/#/guide/introduce'>
                开始
              </a>
              <a href='/#/common/button'>
                组件
              </a>
              <a href='https://github.com/fengxinhhh/Concis'>
                在GitHub上查看
              </a>
            </p>
          </div>
          <div className={styles.headerRight}>
            <img
              className={styles.headerImage}
              alt='header-image'
              src='http://www.react-view-ui.com:92/images/concis-logo.png'
            />
            <span className={styles.plus}>+</span>
            <img
              className={styles.headerImage}
              alt='header-image'
              src='http://www.react-view-ui.com:92/images/react-icon.svg'
            />
          </div>

        </div>
        {/* 功能特性 */}
        <div className={styles.group}>
          <div className={styles.groupTitle}>
            <div></div>
            <span>主要特性</span>
            <div></div>
          </div>
          <ul className={styles.features}>
            {characteristics.map(item => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 74, height: 84 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              )
            })}
          </ul>
        </div>


      </div>
    </div>
  )
}


