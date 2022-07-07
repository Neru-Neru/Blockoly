import React, { useEffect, useContext, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from 'Authentication/AuthContext/AuthContext'

import Topdish from 'img/top_dish.png'
import Logo from 'img/logo.png'
import Mayonnase from 'img/mayonnaise.png'
import styles from './Top.module.scss'

const Top: React.FC = () => {
  const { isLogin, setIsLogin, currentUser } = useContext<IAuthContext>(AuthContext)

  const navigate = useNavigate()

  const goSignIn = useCallback(() => navigate('/signin'), [navigate])

  useEffect(() => {
    if (!isLogin) goSignIn()
  }, [isLogin, goSignIn])

  return (
    <div style={{ height: '100%' }}>
      <div className={styles.plate}>
        <img src={Topdish} alt="top_dish" style={{ width: '100%' }} />
        <div className={styles.lightblueCircle}>
          <Link to="/howto">
            <div className={styles.content}>
              <p className={styles.text}>
                つかい
                <br />
                かた
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.purpleCircle}>
          <Link to="/writingstep1">
            <div className={styles.content}>
              <p className={styles.text}>
                にっき
                <br />を<br />
                かく
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.brownCircle}>
          <Link to="/mydiarylist">
            <div className={styles.content}>
              <p className={styles.text}>
                じぶん
                <br />の<br />
                にっき
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.greenCircle}>
          <Link to="/otherdiarylist">
            <div className={styles.content}>
              <p className={styles.text}>
                みんな
                <br />の<br />
                にっき
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.redCircle}>
          <Link to="/news">
            <div className={styles.content}>
              <p className={styles.text}>おしらせ</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.source}>
        <img src={Mayonnase} alt="mayonnaise" style={{ width: '100%' }} />
        <div className={styles.whiteCircle}>
          <div className={styles.content}>
            <img
              src={Logo}
              alt="logo"
              style={{
                position: 'absolute',
                margin: '0',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.note}>
        <h4>About</h4>
        <p className={styles.content}>
          「ぶろっこりー」は、日記を通してプログラミングを学ぶWebアプリケーションです。
          <br />
          <br />
          プログラミングと聞くと、難しいイメージを持たれがちですが、身近な日記という題材を用いて、プログラミング経験をしてみませんか？
          <br />
          <br />
          まずは、にっきをかくボタンから始めてみてください。
          <br />
          <br />
          その後は、みんなのにっきを覗いてみたり、じぶんのにっきを確認してみたりしてください。
          <br />
          <br />
          それでは、ぶろっこりーの世界をお楽しみください！
        </p>
      </div>
    </div>
  )
}

export default Top
