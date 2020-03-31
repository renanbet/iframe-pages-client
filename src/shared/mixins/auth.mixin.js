import LocalStorageMixin from './local-storage.mixin'

const mixin = {
  mixins: [
    LocalStorageMixin
  ],
  methods: {
    isAuthenticated () {
      return this.getUser() !== null
    },
    getRole () {
      const user = this.getFromLocalStorage('user')
      return user ? user.role : ''
    },
    getUser () {
      const user = this.getFromLocalStorage('user')
      return user ? user : null
    },
    getFullName () {
      const user = this.getFromLocalStorage('user')
      return user ? user.fullname : ''
    },
    saveUser (user) {
      this.saveInLocalStorage('user', user)
    },
    removeUser () {
      this.removeFromLocalStorage('user')
    }
  }
}

export default mixin
