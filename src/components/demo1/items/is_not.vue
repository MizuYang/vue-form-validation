<template>
  <Form v-slot="{ errors }" class="mb-2" style="padding: 0 15px;">
    <Field
      class="form-control"
      :id="`item${idx}`"
      name="輸入框"
      type="text"
      rules="is_not:謝謝"
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
} from '@/composables/demo1/items/is_not/veeValidate.js'

const props = defineProps(['idx', 'placeholder'])
const { idx, placeholder } = toRefs(props)
</script>

<style lang='scss' scope>

</style>
