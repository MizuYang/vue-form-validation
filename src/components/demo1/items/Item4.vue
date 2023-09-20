<template>
  <Form v-slot="{ errors }">
    <Field
      class="form-control"
      id="item3"
      name="輸入框"
      type="text"
      rules="between:1,10"
      placeholder="請輸入英文或數字"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="輸入框"/>
    </i>
  </Form>
</template>

<script setup>
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/items/item1/veeValidate.js'
</script>

<style lang='scss' scope>

</style>
