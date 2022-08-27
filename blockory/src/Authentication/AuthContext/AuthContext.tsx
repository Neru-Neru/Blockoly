import React, { useMemo, useState, useEffect, useContext } from 'react'

// ログイン状態を管理するContext
export const LoggedInContext = React.createContext<boolean>(false)

// ログインユーザ情報を管理するContext
export const AuthInfoContext = React.createContext<[AuthInfo, React.Dispatch<React.SetStateAction<AuthInfo>>]>([
  { UserName: '', SessionId: '' },
  () => {},
])

export const AuthContextProvider: React.FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [authInfo, setAuthInfo] = useState<AuthInfo>({ UserName: '', SessionId: undefined })

  useEffect(() => {
    if (authInfo?.SessionId) setIsLogin(true)
    else setIsLogin(false)
  }, [authInfo])

  return (
    <LoggedInContext.Provider value={isLogin}>
      <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>{children}</AuthInfoContext.Provider>
    </LoggedInContext.Provider>
  )
}
