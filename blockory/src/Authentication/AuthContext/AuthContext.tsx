import React, { useState, useEffect } from 'react'

// ログイン状態を管理するContext
export const LoggedInContext = React.createContext<boolean>(false)

// ログインユーザ情報を管理するContext
export const AuthInfoContext = React.createContext<[AuthInfo, React.Dispatch<React.SetStateAction<AuthInfo>>]>([
  { UserName: '', SessionId: '' },
  () => {},
])

// デフォルトのログインユーザ情報を取得する
const getDefaultAuthInfo = (): AuthInfo => {
  const authInfo = window.localStorage.getItem('authInfo')
  if (authInfo) {
    return JSON.parse(authInfo)
  }
  return { UserName: '', SessionId: undefined }
}

// ログインユーザ情報をlocalStorageに保存する
const setAuthInfoToLocalStorage = (authInfo: AuthInfo) => {
  window.localStorage.setItem('authInfo', JSON.stringify(authInfo))
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [authInfo, setAuthInfo] = useState<AuthInfo>(getDefaultAuthInfo())

  useEffect(() => {
    if (authInfo?.SessionId) {
      setAuthInfoToLocalStorage(authInfo)
      setIsLogin(true)
    } else setIsLogin(false)
  }, [authInfo])

  return (
    <LoggedInContext.Provider value={isLogin}>
      <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>{children}</AuthInfoContext.Provider>
    </LoggedInContext.Provider>
  )
}
