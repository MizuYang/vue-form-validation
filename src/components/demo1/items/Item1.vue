<template>
  <Form v-slot="{ errors }">
    <Field
      class="form-control"
      id="item1"
      name="email"
      type="email"
      rules="required|email"
      placeholder="xxx@example.com"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="email"/>
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
