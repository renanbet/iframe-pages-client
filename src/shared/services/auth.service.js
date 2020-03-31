class AuthService {
  static instance = null;

  static getInstance () {
    if (AuthService.instance == null) {
      AuthService.instance = new AuthService()
    }

    return AuthService.instance
  }

  constructor () {}

  isAuthenticated () {
    return this.getUser() !== null
  }

  getFirstRole () {
    let user = this.getUser()
    return user ? user.role : ''
  }

  getUser () {
    let user = JSON.parse(localStorage.getItem('user')) || null
    return user
  }
}

export default () => {
  return AuthService.getInstance()
}
