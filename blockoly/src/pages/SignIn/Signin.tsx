import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

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
      await auth.signInWithEmailAndPassword(_email, _password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    return true
  }

  return (
    <div css={Background}>
      <div css={ContentBack}>
        <div className=" d-flex justify-content-center">
          <h2 className="text-center">ログインがめん</h2>
        </div>
        <div className="my-3 mx-auto" style={{ width: '50%' }}>
          <TextField fullWidth label="なまえ" margin="dense" type="text" value={username} onChange={inputUsername} />
          <label>テスト用：トモダチ1</label>
          <TextField fullWidth label="メールアドレス" margin="dense" type="email" value={email} onChange={inputEmail} />
          <label>テスト用：tomo1@mail.com</label>
          <TextField
            fullWidth
            label="パスワード"
            margin="dense"
            type="password"
            value={password}
            onChange={inputPassword}
          />
          <label>テスト用：adatomo</label>
          <div className="mt-5 d-flex justify-content-center">
            <Button
              onClick={() => {
                signIn(username, email, password)
              }}
              variant="contained"
              class="text-center btn btn-primary"
              size="large"
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
