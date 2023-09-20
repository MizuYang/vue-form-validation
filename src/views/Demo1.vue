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
             v-for="(demo,idx) in states" :key="demo.name">
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
import { reactive } from 'vue'
import Form from '@/components/Form.vue'
import Header from '@/components/Header.vue'
import Rules from '@/components/demo1/Rules.vue'
import Item1 from '@/components/demo1/items/Item1.vue'
import Item2 from '@/components/demo1/items/Item2.vue'
import Item3 from '@/components/demo1/items/Item3.vue'
import Item4 from '@/components/demo1/items/Item4.vue'
import Item5 from '@/components/demo1/items/Item5.vue'

const states = reactive([
  {
    name: 'alpha',
    content: '字段只能包含字母字符',
    placeholder: '請輸入英文字母',
    component: Item1
  },
  {
    name: 'alpha_dash',
    content: '字段可以包含字母字符、數字、破折號（-）或下劃線（_）',
    placeholder: '請輸入英文、數字、 - 、 _ 。例: 123-_-b',
    component: Item2
  },
  {
    name: 'alpha_num',
    content: '字段可以包含字母字符或數字',
    placeholder: '請輸入英文或數字',
    component: Item3
  },
  {
    name: 'between',
    content: '字段的數值必須在指定的最小值和最大值之間',
    placeholder: '請輸入1-10的數字',
    rules: 'rules="between:1,10"',
    component: Item4
  },
  {
    name: 'confirmed',
    content: '字段必須與指定的確認字段的值相同，通常用於密碼確認',
    placeholder: '請輸入相同的密碼',
    rules: 'rules="confirmed:@password"',
    component: Item5
  }
])

</script>
<style lang='scss' scope>

</style>
