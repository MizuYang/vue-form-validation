<template>
  <VForm class="mx-3" v-slot="{errors, validate}">
    <!-- 手機號碼 -->
    <label for="isPhone" class="form-label text-18 mt-3 mb-0">
      請輸入手機號碼
    </label>
    <VField class="form-control" type="tel" name="isPhone"
            :class="[{
              'is-invalid': errors['isPhone'],
              'is-valid': phone&&!errors['isPhone']
            }]"
            id="isPhone"
            v-model="phone"
            placeholder="請輸入 09 開頭的手機號碼(10碼)"
            maxLength="10"
            rules="isPhone"
            onkeyup="value=value.replace(/[^\d]/g,'')" />
    <ErrorMessage name="isPhone" class="invalid-feedback" />

    <!-- 貓咪說話 -->
    <label for="isCat" class="form-label text-18 mt-3 mb-0">
      請輸入貓咪語言
    </label>
    <VField class="form-control" type="text" name="isCat"
            :class="[{
              'is-invalid': errors['isCat'],
              'is-valid': catSay&&!errors['isCat']
            }]"
            id="isCat"
            v-model="catSay"
            placeholder="學貓咪講話吧!喵 (文字中要有'喵')"
            rules="isCat" />
    <ErrorMessage name="isCat" class="invalid-feedback" />

    <!-- 切換語系 -->
    <ul class="d-flex align-items-center mt-2">
      <li v-for="{cnName,enName} in langBtn" :key="enName">
        <button type="button" class="btn btn-secondary me-2 px-2"
                @click="changeLang(enName, validate)">
          {{ cnName }}
        </button>
      </li>
    </ul>
  </VForm>

</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { setLocale } from '@vee-validate/i18n'
import { defineRule } from 'vee-validate'
import {
  isPhone,
  isCat
} from '@/plugins/rules/myRules.js'

const store = useStore()
const { commit } = store
const phone = ref(null)
const catSay = ref('')
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

// 定義規則
defineRule('isPhone', isPhone)
defineRule('isCat', isCat)

function changeLang (lang, validate) {
  setLocale(lang)
  commit('veeValidate/SET_LANG', lang)
  validate()
}
</script>

<style lang='scss' scope>

</style>
