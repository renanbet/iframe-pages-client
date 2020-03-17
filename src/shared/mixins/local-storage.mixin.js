const mixin = {
  methods: {
    saveInLocalStorage (key, data) {
      localStorage.setItem(key, JSON.stringify(data))
    },
    getFromLocalStorage (key) {
      let value = JSON.parse(localStorage.getItem(key)) || null
      return value
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
