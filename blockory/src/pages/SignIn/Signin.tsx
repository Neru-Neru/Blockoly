import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { TextField, Button } from '@mui/material'
import axios from 'axios'
import { AuthContext } from 'Authentication/AuthContext/AuthContext'

const Signin: React.FC = () => {
  const { isLogin, setIsLogin, currentUser } = useContext<IAuthContext>(AuthContext)

  const navigate = useNavigate()

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const goTop = useCallback(() => navigate('/'), [navigate])

  useEffect(() => {
    if (isLogin) goTop()
  }, [isLogin, goTop])

  const inputUserId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(event.target.value)
    },
    [setUserId]
  )

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    [setPassword]
  )

  const signIn = async (_userId: string, _password: string) => {
    if (_userId === '' || _password === '') {
      alert('にゅうりょくしていないところがあるよ')
      return false
    }
    try {
      // TODO: confirm to the response when get login API method
      const res: UserInfo = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/AuthUserInfo`, {
        params: {
          UserId: userId,
          UserPassword: password,
        },
      })
      setIsLogin(true)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    return true
  }

  return (
    <div /* css={Background} */>
      <div /* css={ContentBack} */>
        <div className=" d-flex justify-content-center">
          <h2 className="text-center">ログインがめん</h2>
        </div>
        <div className="my-3 mx-auto" style={{ width: '50%' }}>
          <TextField fullWidth label="ユーザID" margin="dense" type="email" value={userId} onChange={inputUserId} />

          <TextField
            fullWidth
            label="パスワード"
            margin="dense"
            type="password"
            value={password}
            onChange={inputPassword}
          />
          <div className="mt-5 d-flex justify-content-center">
            <Button
              variant="contained"
              classes="text-center btn btn-primary"
              size="large"
              onClick={() => {
                signIn(userId, password)
              }}
            >
              ログインする
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
