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
      },
      en: {
        統一編號: 'Please enter the Unified Business Number',
        身分證字號: 'Please enter the National ID Number',
        居留證編號: 'Please enter the Residence Permit Number',
        新式居留證編號: 'Please enter the New Residence Permit Number',
        舊式居留證編號: 'Please enter the Old Residence Permit Number',
        自然人憑證: 'Please enter the Citizen Digital Certificate',
        手機條碼: 'Please enter the Mobile Barcode',
        捐贈碼: 'Please enter the Donation Code',
        信用卡: 'Please enter the Credit Card'
      },
      ja: {
        統一編號: '統一番号を入力してください',
        身分證字號: '身分証番号を入力してください',
        居留證編號: '在留カード番号を入力してください',
        新式居留證編號: '新しい在留カード番号を入力してください',
        舊式居留證編號: '古い在留カード番号を入力してください',
        自然人憑證: '自然人証明書を入力してください',
        手機條碼: '携帯バーコードを入力してください',
        捐贈碼: '寄付コードを入力してください',
        信用卡: 'クレジットカードを入力してください'
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
