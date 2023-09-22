<template>

  <header class="mb-3">
    <h2 class="text-20">VeeValidate 驗證</h2>
  </header>

  <main class="mb-5">
    <section class="area mb-2 p-3">
      <p>局部匯入</p>
      <Form />
    </section>

    <section class="area mb-2 p-3"
             v-for="(demo,idx) in data" :key="demo.name">
      <!-- 標題 -->
      <Header :idx="idx+1"
              :name="demo.name"
              :content="demo.content" />

      <!-- 顯示使用的規則 -->
      <template v-if="demo?.rules">
        <Rules :rules="demo.rules" />
      </template>
      <!-- 每個驗證 demo 的元件 -->
      <component :is="demo.component"
                 :idx="idx+1"
                 :discription="demo.discription"
                 :placeholder="demo.placeholder">
      </component>
    </section>
  </main>
</template>

<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import Form from '@/components/Form.vue'
import Header from '@/components/Header.vue'
import Rules from '@/components/demo1/Rules.vue'

const data = reactive([
  {
    name: 'alpha',
    content: '字段只能包含字母字符',
    placeholder: '請輸入英文字母',
    rules: 'rules="alpha"'
  },
  {
    name: 'alpha_dash',
    content: '字段可以包含字母字符、數字、破折號（-）或下劃線（_）',
    placeholder: '請輸入英文、數字、 - 、 _ 。例: 123-_-b',
    rules: 'rules="alpha_dash"'
  },
  {
    name: 'alpha_num',
    content: '字段可以包含字母字符或數字',
    placeholder: '請輸入英文或數字',
    rules: 'rules="alpha_num"'
  },
  {
    name: 'between',
    content: '字段的數值必須在指定的最小值和最大值之間',
    placeholder: '請輸入1-10的數字',
    rules: 'rules="between:1,10"'
  },
  {
    name: 'confirmed',
    content: '字段必須與指定的確認字段的值相同，通常用於密碼確認',
    placeholder: '請輸入相同的密碼',
    rules: 'rules="confirmed:@password"'
  },
  {
    name: 'digits',
    content: '字段必須是數字，且具有指定數量的位數',
    placeholder: '請輸入三個數字',
    rules: 'rules="digits:3"'
  },
  {
    name: 'email',
    content: '字段必須是有效的電子郵件地址',
    placeholder: '請輸入信箱帳號  例: example@example.com',
    rules: 'rules="email"'
  },
  {
    name: 'one_of',
    content: '字段的值必須在指定的值列表中',
    placeholder: '請輸入 喵',
    rules: 'rules="one_of:喵"'
  },
  {
    name: 'not_one_of',
    content: '字段的值不能在指定的值列表中',
    placeholder: '不能輸入 "你"、"我"、"他"',
    rules: 'rules="not_one_of:你,我,他"  |  rules="not_one_of:1,2,3"'
  },
  {
    name: 'integer',
    content: '字段的值必須是有效的整數，不接受指數表示法',
    placeholder: '請輸入正整數',
    rules: 'rules="integer"'
  },
  {
    name: 'is',
    content: '字段的值必須等於指定的值，使用嚴格相等（===）比較',
    placeholder: '請輸入:我同意',
    rules: 'rules="is:我同意"'
  },
  {
    name: 'is_not',
    content: '字段的值不能等於指定的值，使用嚴格相等（===）比較',
    placeholder: '請輸入謝謝',
    rules: 'rules="is_not:謝謝"'
  },
  {
    name: 'length',
    content: '字段的值必須具有指定的項目數，僅適用於可迭代的對象（如字符串或數組）',
    placeholder: '請輸入五個字元',
    rules: 'rules="length:5"'
  },
  {
    name: 'max',
    content: '字段的值的長度不能超過指定的最大長度 (字元的長度)',
    placeholder: '請輸入 ≦5 的字元',
    rules: 'rules="max:5"'
  },
  {
    name: 'max_value',
    content: '字段的數值不能大於指定的最大值 (數字的大小)',
    placeholder: '請輸入 ≦5 的數字',
    rules: 'rules="max_value:5"'
  },
  {
    name: 'min',
    content: '字段的值的長度不能少於指定的最小長度 (字元的長度)',
    placeholder: '請輸入 ≧5 的字元',
    rules: 'rules="min:5"'
  },
  {
    name: 'min_value',
    content: '字段的數值不能小於指定的最小值 (數字的大小)',
    placeholder: '請輸入 ≧5 的數字',
    rules: 'rules="min_value:5"'
  },
  {
    name: 'numeric',
    content: '字段的值必須只包含數字',
    placeholder: '請輸入數字',
    rules: 'rules="numeric"'
  },
  {
    name: 'required',
    content: '字段必須具有非空值',
    placeholder: '(必填) 請輸入填寫內容 rules="required"',
    rules: 'rules="required"  |  rules="numeric|required"'
  },
  {
    name: 'dimensions',
    content: '上傳的文件必須是圖像，且具有指定的精確尺寸（寬度和高度）',
    discription: '請上傳 50*50 的圖片',
    rules: 'rules="dimensions:50,50"'
  },
  {
    name: 'ext',
    content: '上傳的文件必須具有指定的文件擴展名',
    discription: '請上傳 jpg 或 png 的圖片',
    rules: 'rules="ext:jpg,png"'
  },
  {
    name: 'image',
    content: '上傳的文件必須是圖像',
    discription: '請上傳圖片',
    rules: 'rules="image"'
  },
  {
    name: 'mimes',
    content: '上傳的文件的文件類型必須屬於指定的MIME類型之一',
    discription: '只能上傳 jpg、jpeg、png 的圖片',
    rules: 'rules="mimes:image/jpeg,image/png"'
  },
  {
    name: 'size',
    content: '上傳的文件的大小不能超過指定的大小（kb為單位）',
    discription: '只能上傳 ≦500 kb 的圖片',
    rules: 'rules="size:500"'
  },
  {
    name: 'regex',
    content: '字段的值必須與指定的正則表達式匹配。請注意，不建議在字符串格式的正則表達式中使用"|"或","，應該使用對象格式',
    placeholder: '只能輸入數字、不得超過5個字元',
    rules: ':rules="{ regex: /^[0-9]+$/,max:5 }"'
  },
  {
    name: 'resetForm',
    content: '驗證、重置表單內容'
  },
  {
    name: 'initialErrors',
    content: '自訂錯誤訊息 (手動錯誤處理)'
  },
  {
    name: 'i18n',
    content: '多國語系'
  }
  // {
  //   name: 'ToastError',
  //   content: '將錯誤顯示在 Toast 上',
  //   placeholder: '',
  //   rules: ''
  // }
])

getComponents()

function getComponents () {
  data.forEach(item => {
    item.component = defineAsyncComponent(() => (import(`../components/demo1/items/${item.name}.vue`)))
  })
}

</script>
<style lang='scss' scope>

</style>
