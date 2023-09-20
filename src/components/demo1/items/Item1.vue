<template>
  <Form v-slot="{ errors }">
    <Field
      class="form-control"
      :id="`item${idx}`"
      name="輸入框"
      type="text"
      rules="alpha"
      placeholder="請輸入英文字母"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="輸入框"/>
    </i>
  </Form>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/items/item1/veeValidate.js'

const props = defineProps(['idx'])
const { idx } = toRefs(props)
</script>

<style lang='scss' scope>

</style>
