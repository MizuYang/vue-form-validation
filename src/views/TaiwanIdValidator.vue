<template>
  <header>
    <h2 class="text-20">
      Taiwan-id-validator
      <a href="https://hugo.digitalgo.synology.me/2022/04/%E8%BA%AB%E5%88%86%E8%AD%89%E5%AD%97%E8%99%9F%E6%96%B0%E5%BC%8F%E5%B1%85%E7%95%99%E8%AD%89%E8%99%9F%E8%88%8A%E5%BC%8F%E5%B1%85%E7%95%99%E8%AD%89%E8%99%9F%E5%8F%8A%E7%B5%B1%E4%B8%80%E7%B7%A8%E8%99%9F%E7%94%A2%E7%94%9F%E5%99%A8%E6%9A%A8%E9%A9%97%E8%AD%89%E5%99%A8/"
        target="_blank"
        class="text-14 border-bottom border-primary ms-5 px-2">
        測試資料產生器
      </a>
    </h2>

     <!-- 驗證時機配置 -->
    <div class="d-flex align-items-center my-3">
      <h3 class="me-3">驗證時機：</h3>
      <label for="一輸入就驗證" class="form-check-label">
        <input type="radio" name="validateEventName"
              class="form-check-input" id="一輸入就驗證"
              value="一輸入就驗證"
              v-model="validateEventName">
        一輸入就驗證
      </label>
      <div class="mx-3">
        <label for="離開焦點才驗證" class="form-check-label">
          <input type="radio" name="validateEventName"
                class="form-check-input" id="離開焦點才驗證"
                value="離開焦點才驗證"
                v-model="validateEventName">
          離開焦點才驗證
        </label>
      </div>
      <label for="手動驗證" class="form-check-label">
        <input type="radio" name="validateEventName"
              class="form-check-input" id="手動驗證"
              value="手動驗證"
              v-model="validateEventName">
        手動驗證
      </label>
    </div>

    <!-- 語系配置 -->
    <div class="d-flex align-items-center my-3">
      <h3 class="me-3">多國語系：</h3>
      <label for="中文" class="form-check-label">
        <input type="radio" name="validateLanguage"
              class="form-check-input" id="中文"
              value="zh"
              v-model="validateLanguage"
              @change="changeValidateLang">
        中文
      </label>
      <div class="mx-3">
        <label for="英文" class="form-check-label">
          <input type="radio" name="validateLanguage"
                class="form-check-input" id="英文"
                value="en"
                v-model="validateLanguage"
                @change="changeValidateLang">
          英文
        </label>
      </div>
      <label for="日文" class="form-check-label">
        <input type="radio" name="validateLanguage"
              class="form-check-input" id="日文"
              value="ja"
              v-model="validateLanguage"
              @change="changeValidateLang">
        日文
      </label>
    </div>
  </header>

  <form class="mt-3 pb-4">
    <!-- 每個demo區塊 -->
    <div class="area p-3"
         v-for="item in data" :key="item.name">
      <component :is="item.component"
                 v-model="item.vModel"
                 :item="item"
                 :validateEvent="validateEvent"
                 @validateRules="validateRules"></component>

      <!-- 驗證失敗提示 -->
      <template v-if="item.feedback">
        <p class="area text-danger p-3 pt-0">
          {{ item.feedback }}
        </p>
      </template>

      <!-- 提供測試用資料 -->
      <p class="area p-3 pt-0">
        試試：{{ item.testString.join('、 ') }}...等
      </p>
    </div>
  </form>

  <!-- 手動驗證 -->
  <template v-if="validateEventName==='手動驗證'">
    <div class="position-fixed ms-5"
          style="right:20px;bottom:50px;">
      <button type="button"
              class="btn btn-primary rounded-pill"
              style="padding: 30px 10px!important;"
              @click="validate">
        手動驗證
      </button>
    </div>
  </template>
</template>

<script setup>
import { ref, reactive, computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
import {
  isGuiNumberValid, // 統一編號
  isNationalIdentificationNumberValid, // 身分證字號
  isResidentCertificateNumberValid, // 居留證編號
  isNewResidentCertificateNumberValid, // 新式居留證編號
  isOriginalResidentCertificateNumberValid, // 舊式居留證編號
  isCitizenDigitalCertificateNumberValid, // 自然人憑證
  isEInvoiceCellPhoneBarcodeValid, // 手機條碼
  isEInvoiceDonateCodeValid, // 捐贈碼
  isCreditCardNumberValid // 信用卡
} from 'taiwan-id-validator'

// store
const store = useStore()
const { dispatch } = store

// data
const validateEventName = ref('一輸入就驗證')
const validateLanguage = ref('zh')
const isValidate = ref(false) // 判斷開始驗證了
const data = reactive([
  {
    name: '統一編號',
    fileName: '統一編號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isGuiNumberValid,
    // vModel: 統一編號,
    placeHolder: '請輸入 統一編號',
    testString: ['94609767', '09702853', '15859493']
  },
  {
    name: '身分證字號',
    fileName: '身分證字號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isNationalIdentificationNumberValid,
    // vModel: 身分證字號,
    placeHolder: '請輸入 身分證字號',
    testString: ['A125573934', 'A250985499', 'A250772885']
  },
  {
    name: '居留證編號',
    fileName: '居留證編號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isResidentCertificateNumberValid,
    // vModel: 居留證編號,
    placeHolder: '請輸入 居留證編號',
    testString: ['A984102515', 'A870725624', 'A816976896']
  },
  {
    name: '新式居留證編號',
    fileName: '新式居留證編號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isNewResidentCertificateNumberValid,
    // vModel: 新式居留證編號,
    placeHolder: '請輸入 新式居留證編號',
    testString: ['A984102515', 'A870725624', 'A816976896']
  },
  {
    name: '舊式居留證編號',
    fileName: '舊式居留證編號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isOriginalResidentCertificateNumberValid,
    // vModel: 舊式居留證編號,
    placeHolder: '請輸入 舊式居留證編號',
    testString: ['AA77455441', 'AC78562850', 'AA67427382']
  },
  {
    name: '自然人憑證',
    fileName: '自然人憑證',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isCitizenDigitalCertificateNumberValid,
    // vModel: 自然人憑證,
    placeHolder: '請輸入 自然人憑證',
    testString: ['AA12345678901234']
  },
  {
    name: '手機條碼',
    fileName: '手機條碼',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isEInvoiceCellPhoneBarcodeValid,
    // vModel: 手機條碼,
    placeHolder: '請輸入 手機條碼',
    testString: ['/DBS1234']
  },
  {
    name: '捐贈碼',
    fileName: '捐贈碼',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isEInvoiceDonateCodeValid,
    // vModel: 捐贈碼,
    placeHolder: '請輸入 捐贈碼',
    testString: ['001']
  },
  {
    name: '信用卡',
    fileName: '信用卡',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isCreditCardNumberValid,
    // vModel: 信用卡,
    placeHolder: '請輸入 信用卡',
    testString: ['5105105105105100']
  }
])
const form = reactive({
  統一編號: ref(''),
  身分證字號: ref(''),
  居留證編號: ref(''),
  新式居留證編號: ref(''),
  舊式居留證編號: ref(''),
  自然人憑證: ref(''),
  手機條碼: ref(''),
  捐贈碼: ref(''),
  信用卡: ref('')
})
getComponent()

// computed
const validateEvent = computed(() => {
  let event = ''
  if (validateEventName.value === '一輸入就驗證') event = 'input'
  else if (validateEventName.value === '離開焦點才驗證') event = 'change'
  else if (validateEventName.value === '手動驗證') event = 'input'

  return event
})

function getComponent () {
  data.forEach(item => {
    item.component = defineAsyncComponent(() => import(`@/components/taiwanIdValidator/${item.fileName}.vue`))
  })
}
function validateRules (e, ruleName) {
  const value = e.target.value

  // 更新表單欄位的值
  form[ruleName] = value

  if (validateEventName.value === '手動驗證') return

  isValidate.value = true

  const rule = data.filter(item => item.name === ruleName)[0].rule

  // 更新 data 驗證的結果
  data.forEach(async item => {
    if (item.name === ruleName) {
      const isValid = rule(value)

      if (isValid) {
        item.isValid = 1
        item.feedback = ''
      } else {
        item.isValid = 2
        item.feedback = await dispatch('taiwanIdValidator/getFeedback', [validateLanguage.value, ruleName])
      }
    }
  })
}
function validate () {
  isValidate.value = true

  data.forEach(async item => {
    const ruleName = item.name
    const value = form[ruleName]
    const rule = item.rule
    const isValid = rule(value)

    if (value) {
      item.isValid = isValid ? 1 : 2
    } else {
      item.isValid = 2
    }
    if (isValid) {
      item.feedback = ''
    } else {
      item.feedback = await dispatch('taiwanIdValidator/getFeedback', [validateLanguage.value, ruleName])
    }
  })
}
// 切換語系: 將驗證失敗的欄位 feedback 更換語系
function changeValidateLang () {
  data.forEach(async item => {
    if (item.isValid === 2) {
      item.feedback = await dispatch('taiwanIdValidator/getFeedback', [validateLanguage.value, item.name])
    }
  })
}
</script>

<style lang='scss' scope>

</style>
