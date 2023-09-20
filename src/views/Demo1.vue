<template>

  <header class="mb-3">
    <h2 class="text-20">VeeValidate 驗證</h2>
  </header>

  <main>
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
      <component :is="demo.component"></component>

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

const states = reactive([
  {
    name: 'alpha',
    content: '字段只能包含字母字符',
    component: Item1
  },
  {
    name: 'alpha_dash',
    content: '字段可以包含字母字符、數字、破折號（-）或下劃線（_）',
    component: Item2
  },
  {
    name: 'alpha_num',
    content: '字段可以包含字母字符或數字',
    component: Item3
  },
  {
    name: 'between',
    content: '字段的數值必須在指定的最小值和最大值之間',
    rules: 'rules="between:1,10"',
    component: Item4
  }
])

</script>
<style lang='scss' scope>

</style>
