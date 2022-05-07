import React from 'react'

import { Link, useNavigate, useLocation } from 'react-router-dom'

import Logo1 from '../../img/nab_bl_1.png'
import Logo2 from '../../img/nab_bl_2.png'

const Nav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    navigate('/signin')
  }

  return (
    <div
      className={location.pathname === '/' ? 'large-header' : 'small-header'}
      style={{ display: location.pathname === '/signin' || location.pathname === '/howto' ? 'none' : 'block' }}
    >
      <Link to="/">
        <div className="nav-block1" style={{ display: location.pathname === '/' ? 'none' : 'block' }}>
          <div className="hover">
            <img src={Logo2} alt="logo2" style={{ height: '100%' }} />
            <p className={location.pathname === '/' ? 'large-text' : 'small-text'}>トップ</p>
          </div>
        </div>
      </Link>
      <div className="nav-block2" style={{ display: location.pathname === '/' ? 'none' : 'block' }}>
        <div // eslint-disable-line
          className="hover"
          onClick={handleLogout}
        >
          <img src={Logo1} alt="logo1" style={{ height: '100%' }} />
          <p className={location.pathname === '/' ? 'large-text' : 'small-text'}>
            ログ
            <br />
            アウト
          </p>
        </div>
      </div>
      <Link to="/editor">
        <div className="nav-block3">
          <div className="hover">
            <img src={Logo1} alt="logo1" style={{ height: '100%' }} />
            <p className={location.pathname === '/' ? 'large-text' : 'small-text'}>
              にっき
              <br />を<br />
              かく
            </p>
          </div>
        </div>
      </Link>
      <Link to="/mypage">
        <div className={location.pathname === '/' ? 'nav-block4' : 'nav-block5'}>
          <div className="hover">
            <img src={Logo2} alt="logo2" style={{ height: '100%' }} />
            <p className={location.pathname === '/' ? 'large-text' : 'small-text'}>
              じぶん
              <br />の<br />
              にっき
            </p>
          </div>
        </div>
      </Link>
      <Link to="/otherlist">
        <div className="nab-block6">
          <div className="hover">
            <img src={Logo1} alt="logo1" style={{ height: '100%' }} />
            <p className={location.pathname === '/' ? 'large-text' : 'small-text'}>
              みんな
              <br />の<br />
              にっき
            </p>
          </div>
        </div>
      </Link>
      <Link to="/news">
        <div className={location.pathname === '/' ? 'nav-block7' : 'nav-block8'}>
          <div className="hover">
            <img src={Logo2} alt="logo2" style={{ height: '100%' }} />
            <p className={location.pathname === '/' ? 'large-text' : 'small-text'}>おしらせ</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Nav
