class AuthService {
  static instance = null;

  static getInstance () {
    if (AuthService.instance == null) {
      AuthService.instance = new AuthService()
    }

    return AuthService.instance
  }

  constructor () {
    this.user = JSON.parse(localStorage.getItem('user')) || null
  }

  isAuthenticated () {
    return this.getUser() !== null
  }

  getRole () {
    return this.user ? this.user.role : ''
  }

  getUser () {
    return this.user
  }
}

export default () => {
  return AuthService.getInstance()
}
