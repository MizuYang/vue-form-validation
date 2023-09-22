<template>
  <VForm class="mx-3" v-slot="{ errors, validate }">
    <VField name="信箱" label="信箱"
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
  </VForm>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ja from '@vee-validate/i18n/dist/locale/ja.json'

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
  ja: {
    enName: 'ja',
    cnName: '日文'
  }
})

localize({
  zh: {
    fields: {
      信箱: {
        email: '請輸入信箱格式!',
        required: '信箱是必填的選項!'
      }
    },
    messages: zhTW.messages
  },
  ja: {
    fields: {
      信箱: {
        email: 'あなたのメールアドレスを入力してください!',
        required: '電子メールは必須オプションです!'
      }
    },
    messages: ja.messages
  },
  en: {
    fields: {
      信箱: {
        required: 'The email is required',
        email: 'Please enter your email address!'
      }
    },
    messages: en.messages
  }
})

setLocale('zh')

function validateHandle () {
  nextTick(() => {
    validate.value.click()
  })
}
function changeLang (lang) {
  setLocale(lang)
  validateHandle()
}
</script>

<style lang='scss' scope>

</style>
