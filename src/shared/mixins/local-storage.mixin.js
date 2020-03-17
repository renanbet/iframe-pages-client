const mixin = {
  methods: {
    saveInLocalStorage (key, data) {
      localStorage.setItem(key, JSON.stringify(data))
    },
    getFromLocalStorage (key) {
      return JSON.parse(localStorage.getItem(key)) || null
    },
    removeFromLocalStorage (key) {
      localStorage.removeItem(key)
    },
    updateFromLocalStorage (key, data) {
      this.saveInLocalStorage(key, data)
    }
  }
}

export default mixin
