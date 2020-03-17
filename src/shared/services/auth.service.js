class AuthService {
  static instance = null;

  static getInstance () {
    if (AuthService.instance == null) {
      AuthService.instance = new AuthService()
    }

    return AuthService.instance
  }

  isAuthenticated () {
    return this.getUser() !== null
  }

  getRole () {
    const user = JSON.parse(localStorage.getItem('user')) || null
    return user ? user.role : ''
  }

  getUser () {
    const user = JSON.parse(localStorage.getItem('user')) || null
    return user
  }
}

export default () => {
  return AuthService.getInstance()
}
