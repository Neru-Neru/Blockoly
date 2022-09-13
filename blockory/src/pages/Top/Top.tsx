import React, { useEffect, useContext, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LoggedInContext } from 'Authentication/AuthContext/AuthContext'

import Topdish from 'img/top_dish.png'
import Logo from 'img/logo.png'
import Mayonnaise from 'img/mayonnaise.png'
import styles from './Top.module.scss'

const Top: React.FC = () => {
  const navigate = useNavigate()
  const isLogin = useContext(LoggedInContext)

  const goSignIn = useCallback(() => navigate('/signin'), [navigate])

  useEffect(() => {
    if (!isLogin) goSignIn()
  }, [isLogin, goSignIn])

  return (
    <div className={styles.background}>
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
        <img src={Mayonnaise} alt="mayonnaise" style={{ width: '100%' }} />
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
          <span className={styles.inlineText}>「ぶろっこりー」は、にっきでプログラミングをまなぶツールです</span>
          <span className={styles.inlineText}>身近な日記という題材を用いて、プログラミングをしませんか？</span>
          <br />
          <br />
          <span className={styles.inlineText}>まずは、にっきをかくボタンから日記を書いてみてね</span>
          <span className={styles.inlineText}>みんなのにっきをみたり、じぶんのにっきをふりかえってね</span>
          <br />
          <br />
          <span className={styles.inlineText}>では、ぶろっこりーの世界をお楽しみください！</span>
        </p>
      </div>
    </div>
  )
}

export default Top
