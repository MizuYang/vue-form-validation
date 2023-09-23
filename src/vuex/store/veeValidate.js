const veeValidate = {
  namespaced: true,
  state: {
    currentLanguage: 'zh'
  },
  actions: {
  },
  mutations: {
    SET_LANG (state, lang) {
      state.currentLanguage = lang
    }
  },
  getters: {
  }
}

export default veeValidate
