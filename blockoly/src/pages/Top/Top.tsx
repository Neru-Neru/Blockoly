import React from 'react'
import { Link } from 'react-router-dom'

import './Top.scss'

import Topdish from '../../img/top_dish.png'
import Logo from '../../img/logo.png'
import Mayonnase from '../../img/mayonnaise.png'

const Top: React.FC = () => (
  <div style={{ height: '100%' }}>
    <div className="plate">
      <img src={Topdish} alt="top_dish" style={{ width: '100%' }} />
      <div className="lightblue-circle">
        <Link to="/howto">
          <div className="content">
            <p className="text">
              つかい
              <br />
              かた
            </p>
          </div>
        </Link>
      </div>
      <div className="purple-circle">
        <Link to="/writingstep1">
          <div className="content">
            <p className="text">
              にっき
              <br />を<br />
              かく
            </p>
          </div>
        </Link>
      </div>
      <div className="brown-circle">
        <Link to="/mydiarylist">
          <div className="content">
            <p className="text">
              じぶん
              <br />の<br />
              にっき
            </p>
          </div>
        </Link>
      </div>
      <div className="green-circle">
        <Link to="/otherdiarylist">
          <div className="content">
            <p className="text">
              みんな
              <br />の<br />
              にっき
            </p>
          </div>
        </Link>
      </div>
      <div className="red-circle">
        <Link to="/news">
          <div className="content">
            <p className="text">おしらせ</p>
          </div>
        </Link>
      </div>
    </div>

    <div className="source">
      <img src={Mayonnase} alt="mayonnaise" style={{ width: '100%' }} />
      <div className="white-circle">
        <div className="content">
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

    <div className="note">
      <h4>About</h4>
      <p className="content">
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

export default Top
