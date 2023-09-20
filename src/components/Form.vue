<template>
  <Form>
    <Field
      class="form-control"
      name="email"
      type="email"
      placeHolder="示範局部匯入而已, 無驗證功能"
      readonly
    />
    <ErrorMessage name="email"/>
  </Form>
</template>

<script setup>
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/plugins/veeValidate.js'
</script>

<style lang='scss' scope>

</style>
