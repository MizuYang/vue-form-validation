// 匯入 store 的進入點
import store from '@/vuex/index.js'

// 建立自訂規則的各語系驗證失敗的版本
const feedback = {
  zh: {
    isPhone: '請輸入 09 開頭的正確電話號碼',
    isCat: '請輸入喵咪語言~!喵~'
  },
  ja: {
    isPhone: '09から始まる正しい電話番号を入力してください',
    isCat: 'ニャー語を入力してください~!ニャー~'
  },
  en: {
    isPhone: 'Please enter the correct phone number starting with 09',
    isCat: 'Please enter the meow language~! Meow~'
  }
}

// 電話驗證
export function isPhone (value) {
  // 取得當前語系
  const language = store.state.veeValidate.currentLanguage
  const msg = feedback[language].isPhone
  console.log(language, msg)
  const phoneNumber = /^(09)[0-9]{8}$/
  return phoneNumber.test(value) ? true : msg
}
// 貓咪驗證
export function isCat (value) {
  // 取得當前語系
  const language = store.state.veeValidate.currentLanguage
  const msg = feedback[language].isCat
  console.log(language, msg)
  const string = /喵/
  return string.test(value) ? true : msg
}
