// import axios from 'axios'

const taiwanIdValidator = {
  namespaced: true,
  state: {
    i18n: {
      zh: {
        統一編號: '請輸入 "統一編號"',
        身分證字號: '請輸入 "身分證字號"',
        居留證編號: '請輸入 "居留證編號"',
        新式居留證編號: '請輸入 "新式居留證編號"',
        舊式居留證編號: '請輸入 "舊式居留證編號"',
        自然人憑證: '請輸入 "自然人憑證"',
        手機條碼: '請輸入 "手機條碼"',
        捐贈碼: '請輸入 "捐贈碼"',
        信用卡: '請輸入 "信用卡"'
      }
    }
  },
  actions: {
    getFeedback ({ state }, [lang, field]) {
      return state.i18n[lang][field]
    }
  },
  mutations: {
  },
  getters: {
  }
}

export default taiwanIdValidator
