<template>
  <Form v-slot="{ errors }">
    <Field
      class="form-control"
      :id="`item${idx}`"
      name="輸入框"
      type="text"
      rules="alpha_num"
      :placeholder="placeholder"
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

const props = defineProps(['idx', 'placeholder'])
const { idx, placeholder } = toRefs(props)
</script>

<style lang='scss' scope>

</style>
