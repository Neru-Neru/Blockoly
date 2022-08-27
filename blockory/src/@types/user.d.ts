type UserInfo = {
  UserId: string
  UserName: string
  UserPassword: string
}

interface AuthInfo {
  UserName: string
  SessionId: string | undefined
}
