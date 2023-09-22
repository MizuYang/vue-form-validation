import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { regex } from '@vee-validate/rules' // eslint-disable-line
import { localize, setLocale } from '@vee-validate/i18n' // eslint-disable-line
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json' // eslint-disable-line

defineRule('regex', regex)

configure({
  // generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

export {
  Field,
  Form,
  ErrorMessage
}
