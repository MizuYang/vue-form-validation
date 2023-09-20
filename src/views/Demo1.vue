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
    placeholder: '請輸入英文字母'
  },
  {
    name: 'alpha_dash',
    content: '字段可以包含字母字符、數字、破折號（-）或下劃線（_）',
    placeholder: '請輸入英文、數字、 - 、 _ 。例: 123-_-b'
  },
  {
    name: 'alpha_num',
    content: '字段可以包含字母字符或數字',
    placeholder: '請輸入英文或數字'
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
  }
])

getComponents()

function getComponents () {
  data.forEach((item, idx) => {
    item.component = defineAsyncComponent(() => (import(`../components/demo1/items/Item${idx + 1}.vue`)))
  })
}

</script>
<style lang='scss' scope>

</style>
