import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    currentReport: {
      title: '',
      src: ''
    }
  },
  getters: {
    getCurrentReport: (state) => {
      return state.currentReport
    }
  },
  mutations: {
    setCurrentReport: (state, payload) => {
      state.currentReport = payload
    }
  },
  actions: {
    setCurrentReport: (context, payload) => {
      context.commit('setCurrentReport', payload)
    }
  }
})
