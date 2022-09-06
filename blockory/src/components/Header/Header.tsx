import React, { useContext } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'
import { AuthInfoContext } from 'Authentication/AuthContext/AuthContext'
import HeaderButton from 'components/Header/HeaderButton/HeaderButton'

import styles from './Header.module.scss'
import Logo1 from '../../img/nab_bl_1.png'
import Logo2 from '../../img/nab_bl_2.png'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const currentPath = location.pathname

  const [authInfo, setAuthInfo] = useContext(AuthInfoContext)

  const logout = () => {
    setAuthInfo({ UserName: '', SessionId: '' })
    navigate('/signin')
  }

  return currentPath === '/' ? (
    <div className={styles.largeHeader}>
      <HeaderButton
        pathname="/writingstep1"
        imageSrc={Logo1}
        imageAlt={styles.logo1}
        buttonText="にっき
              <br />を<br />
              かく"
        className={styles.navBlock3}
      />

      <HeaderButton
        pathname="/mydiarylist"
        imageSrc={Logo2}
        imageAlt={styles.logo2}
        buttonText="じぶん
              <br />の<br />
              にっき"
        className={styles.navBlock4}
      />

      <HeaderButton
        pathname="/otherdiarylist"
        imageSrc={Logo1}
        imageAlt={styles.logo1}
        buttonText=" みんな
              <br />の<br />
              にっき"
        className={styles.navBlock6}
      />

      <HeaderButton
        pathname="/news"
        imageSrc={Logo2}
        imageAlt={styles.logo2}
        buttonText="おしらせ"
        className={styles.navBlock7}
      />
    </div>
  ) : (
    <div
      className={styles.smallHeader}
      style={{ display: currentPath === '/signin' || currentPath === '/howto' ? 'none' : 'block' }}
    >
      <HeaderButton
        pathname="/"
        imageSrc={Logo2}
        imageAlt={styles.logo2}
        buttonText="トップ"
        className={styles.navBlock1}
      />

      <div className={styles.navBlock2}>
        <div // eslint-disable-line
          className={styles.hover}
          onClick={logout}
        >
          <img src={Logo1} alt={styles.logo1} style={{ height: '100%' }} />
          <p className={styles.smallText}>
            ログ
            <br />
            アウト
          </p>
        </div>
      </div>

      <HeaderButton
        pathname="/writingstep1"
        imageSrc={Logo1}
        imageAlt={styles.logo1}
        buttonText="にっき
              <br />を<br />
              かく"
        className={styles.navBlock3}
      />

      <HeaderButton
        pathname="/mydiarylist"
        imageSrc={Logo2}
        imageAlt={styles.logo2}
        buttonText="じぶん
              <br />の<br />
              にっき"
        className={styles.navBlock5}
      />

      <HeaderButton
        pathname="/otherdiarylist"
        imageSrc={Logo1}
        imageAlt={styles.logo1}
        buttonText=" みんな
              <br />の<br />
              にっき"
        className={styles.navBlock6}
      />

      <HeaderButton
        pathname="/news"
        imageSrc={Logo2}
        imageAlt={styles.logo2}
        buttonText="おしらせ"
        className={styles.navBlock8}
      />
    </div>
  )
}

export default Header
