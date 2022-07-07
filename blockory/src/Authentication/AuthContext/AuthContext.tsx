import React, { useMemo, useState, useEffect, useContext } from 'react'

export const AuthContext = React.createContext<IAuthContext>({
  isLogin: false,
  setIsLogin: () => false,
  currentUser: undefined,
})

export const AuthProvider: React.FC = ({ children }) => {
  const a = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState<UserInfo | null | undefined>(undefined)

  useEffect(() => {
    if (!isLogin) setCurrentUser(undefined)
  }, [isLogin])

  const authContextProviderValue = useMemo(
    () => ({ currentUser, isLogin, setIsLogin }),
    [currentUser, isLogin, setIsLogin]
  )

  return <AuthContext.Provider value={authContextProviderValue}>{children}</AuthContext.Provider>
}
