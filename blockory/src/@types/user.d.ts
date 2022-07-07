type UserInfo = {
  UserId: string
  UserName: string
  UserPassword: string
}

interface IAuthContext {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: UserInfo | null | undefined
}
