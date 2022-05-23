import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TextField, Button } from '@mui/material'
import axios from 'axios'

type UserInfo = {
  UserId: string
  UserName: string
}

const Signin: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const inputUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value)
    },
    [setUsername]
  )

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    },
    [setEmail]
  )

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    [setPassword]
  )

  const signIn = async (_username: string, _email: string, _password: string) => {
    if (_username === '' || _email === '' || _password === '') {
      alert('にゅうりょくしていないところがあるよ')
      return false
    }
    try {
      // TODO: confirm to the response when get login API method
      const res: UserInfo = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/AuthUserInfo`, {
        params: {},
      })
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
          <TextField fullWidth label="なまえ" margin="dense" type="text" value={username} onChange={inputUsername} />
          <TextField fullWidth label="メールアドレス" margin="dense" type="email" value={email} onChange={inputEmail} />
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
                signIn(username, email, password)
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
