<template>
  <Form>
    <Field
      name="email"
      type="email"
      rules="required|email"
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
