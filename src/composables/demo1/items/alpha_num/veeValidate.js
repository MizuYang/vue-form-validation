import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { alpha_num } from '@vee-validate/rules' // eslint-disable-line
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

defineRule('alpha_num', alpha_num)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

export {
  Field,
  Form,
  ErrorMessage
}
