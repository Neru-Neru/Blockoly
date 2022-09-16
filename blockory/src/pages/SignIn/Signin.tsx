import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { TextField, Button } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import { LoggedInContext, AuthInfoContext } from 'Authentication/AuthContext/AuthContext'

const SignIn: React.FC = () => {
  const navigate = useNavigate()

  const isLogin = useContext(LoggedInContext)
  const [authInfo, setAuthInfo] = useContext(AuthInfoContext)

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  // ログイン状態であれば，トップページに戻す
  const goTopPage = useCallback(() => navigate('/'), [navigate])
  useEffect(() => {
    if (isLogin) goTopPage()
  }, [isLogin, goTopPage])

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

  const validatePassword = useCallback(() => userId.length > 0 && password.length > 0, [userId, password])

  const signIn = useCallback(() => {
    if (!validatePassword()) {
      alert('にゅうりょくしていないところがあるよ')
      return false
    }
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/AuthUserInfo`, {
        params: {
          UserId: userId,
          UserPassword: password,
        },
      })
      .then((res: AxiosResponse<{ SessionId: string }>) => {
        const { SessionId } = res.data
        setAuthInfo({ UserName: userId, SessionId })
      })
      .catch((err) => {
        console.log(err)
      })
    return true
  }, [userId, password, setAuthInfo, validatePassword])

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
                signIn()
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

export default SignIn
