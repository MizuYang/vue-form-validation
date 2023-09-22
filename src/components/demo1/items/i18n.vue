<template>
  <Form class="mx-3" v-slot="{ errors, validate }">
    <Field name="信箱" label="信箱"
           class="form-control"
           :class="{ 'is-invalid': errors['信箱'] }"
           id="i18nInput"
           rules="required|email" />
    <ErrorMessage name="信箱" class="invalid-feedback" />
    <button type="button" class="btn btn-secondary me-2 px-2"
            ref="validate" @click="validate">
      驗證
    </button>

    <!-- 切換語系 -->
    <ul class="d-flex align-items-center mt-2">
      <li v-for="{cnName,enName} in langBtn" :key="enName">
        <button type="button" class="btn btn-secondary me-2 px-2"
                @click="changeLang(enName)">
          {{ cnName }}
        </button>
      </li>
    </ul>
  </Form>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/items/ext/veeValidate.js'
import { localize, setLocale } from '@vee-validate/i18n'
import { configure } from 'vee-validate'

const validate = ref(null)
const langBtn = ref({
  en: {
    enName: 'en',
    cnName: '英文'
  },
  zh: {
    enName: 'zh',
    cnName: '中文'
  },
  jp: {
    enName: 'jp',
    cnName: '日文'
  }
})
const langData = {
  en: {
    信箱: {
      required: 'The email is required',
      email: 'Please enter your email address!'
    }
  },
  zh: {
    信箱: {
      email: '請輸入信箱!',
      required: '信箱是必填的選項!'
    }
  },
  jp: {
    信箱: {
      email: 'あなたのメールアドレスを入力してください!',
      required: '電子メールは必須オプションです!'
    }
  }
}

configure({
  generateMessage: localize('zh', {
    fields: {
      信箱: {
        email: '請輸入信箱!',
        required: '信箱是必填的選項!'
      }
    }
  })
})
setLocale('zh')

function validateHandle () {
  nextTick(() => {
    validate.value.click()
  })
}
function changeLang (lang) {
  const fieldData = langData[lang]
  configure({
    generateMessage: localize(lang, {
      fields: {
        ...fieldData
      }
    })
  })

  validateHandle()
}
</script>

<style lang='scss' scope>

</style>
