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

     <!-- 設定配置 -->
    <div class="d-flex my-3">
      <div class="form-check">
        <label for="一輸入就驗證" class="form-check-label">
          <input type="radio" name="validateEventName"
                class="form-check-input" id="一輸入就驗證"
                value="一輸入就驗證"
                v-model="validateEventName">
          一輸入就驗證
        </label>
      </div>
      <div class="form-check mx-3">
        <label for="離開焦點才驗證" class="form-check-label">
          <input type="radio" name="validateEventName"
                class="form-check-input" id="離開焦點才驗證"
                value="離開焦點才驗證"
                v-model="validateEventName">
          離開焦點才驗證
        </label>
      </div>
      <div class="form-check">
        <label for="手動驗證" class="form-check-label">
          <input type="radio" name="validateEventName"
                class="form-check-input" id="手動驗證"
                value="手動驗證"
                v-model="validateEventName">
          手動驗證
        </label>
      </div>

      <template v-if="validateEventName==='手動驗證'">
        <div class="position-fixed ms-5"
             style="right:20px;bottom:50px;">
          <button type="button"
                  class="btn btn-primary rounded-pill p-3"
                  @click="validate">
            驗證
          </button>
        </div>
      </template>
    </div>
  </header>

  <form class="mt-3">
    <!-- 每個demo區塊 -->
    <div class="area p-3"
         v-for="item in data" :key="item.name">
      <component :is="item.component"
                 v-model="item.vModel"
                 :item="item"
                 :validateEvent="validateEvent"
                 @validateRules="validateRules"></component>
      <!-- 提供測試用資料 -->
      <p class="area p-3 pt-0">
        試試：{{ item.testString.join('、 ') }}...等
      </p>
    </div>

  </form>
</template>

<script setup>
import { ref, reactive, computed, defineAsyncComponent } from 'vue'
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

// data
const validateEventName = ref('一輸入就驗證')
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
    testString: ['', '', '']
  },
  {
    name: '新式居留證編號',
    fileName: '新式居留證編號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isNewResidentCertificateNumberValid,
    // vModel: 新式居留證編號,
    placeHolder: '請輸入 新式居留證編號',
    testString: ['', '', '']
  },
  {
    name: '舊式居留證編號',
    fileName: '舊式居留證編號',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isOriginalResidentCertificateNumberValid,
    // vModel: 舊式居留證編號,
    placeHolder: '請輸入 舊式居留證編號',
    testString: ['', '', '']
  },
  {
    name: '自然人憑證',
    fileName: '自然人憑證',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isCitizenDigitalCertificateNumberValid,
    // vModel: 自然人憑證,
    placeHolder: '請輸入 自然人憑證',
    testString: ['', '', '']
  },
  {
    name: '手機條碼',
    fileName: '手機條碼',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isEInvoiceCellPhoneBarcodeValid,
    // vModel: 手機條碼,
    placeHolder: '請輸入 手機條碼',
    testString: ['', '', '']
  },
  {
    name: '捐贈碼',
    fileName: '捐贈碼',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isEInvoiceDonateCodeValid,
    // vModel: 捐贈碼,
    placeHolder: '請輸入 捐贈碼',
    testString: ['', '', '']
  },
  {
    name: '信用卡',
    fileName: '信用卡',
    isValid: 0, // 0:初始直初始值 1:成功 2:失敗
    component: null,
    rule: isCreditCardNumberValid,
    // vModel: 信用卡,
    placeHolder: '請輸入 信用卡',
    testString: ['', '', '']
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

  const rule = data.filter(item => item.name === ruleName)[0].rule

  // 更新 data 驗證的結果
  data.forEach(item => {
    if (item.name === ruleName) item.isValid = rule(value) ? 1 : 2
  })
}
function validate () {
  data.forEach(item => {
    const ruleName = item.name
    const value = form[ruleName]

    if (value) {
      const rule = item.rule
      const isValid = rule(value)

      item.isValid = isValid ? 1 : 2
    } else {
      item.isValid = 2
    }
  })
}
</script>

<style lang='scss' scope>

</style>
