import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { TextField, Button } from '@mui/material'

const Register: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const inputUserId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(event.target.value)
    },
    [setUserId]
  )

  const inputUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value)
    },
    [setUsername]
  )

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    [setPassword]
  )

  const validateForm = () => {
    if (userId === '' || username === '' || password === '') return false
    return true
  }

  const postUserInfo = async () => {
    try {
      const res: UserInfo = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/UserInfo`, {
        UserId: userId,
        UserName: username,
        UserPassword: password,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const register = () => {
    if (!validateForm()) alert('にゅうりょくしていないところがあるよ')
    else postUserInfo()
  }

  return (
    <div /* css={Background} */>
      <div /* css={ContentBack} */>
        <div className=" d-flex justify-content-center">
          <h2 className="text-center">新規登録</h2>
        </div>
        <div className="my-3 mx-auto" style={{ width: '50%' }}>
          <TextField fullWidth label="ユーザID" margin="dense" type="email" value={userId} onChange={inputUserId} />
          <TextField fullWidth label="なまえ" margin="dense" type="text" value={username} onChange={inputUsername} />
          <TextField
            fullWidth
            label="パスワード"
            margin="dense"
            type="password"
            value={password}
            onChange={inputPassword}
          />
          <div className="mt-5 d-flex justify-content-center">
            <Button variant="contained" classes="text-center btn btn-primary" size="large" onClick={register}>
              とうろく
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
