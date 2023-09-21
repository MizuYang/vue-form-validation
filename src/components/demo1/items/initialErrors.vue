<template>
  <Form v-slot="{ setFieldError, setErrors }" @submit="onSubmit">
    <Field name="email" />
    <ErrorMessage name="email" />
    <br />
    <Field name="password" />
    <ErrorMessage name="password" />
    <br />
    <div class="d-flex align-items-center mb-3">
      <h3>v-slot="{ setFieldError, setErrors }"：</h3>
      <button type="button" class="btn btn-sm btn-secondary me-1 px-2"
              @click="setFieldError('email', '該信箱已被使用')">
        設定單個錯誤回饋
      </button>
      <button type="button" class="btn btn-sm btn-secondary px-2"
              @click="setErrors({ email: '該信箱已被使用', password: '有人已經擁有該密碼' })">
        設定多個錯誤回饋
      </button>
    </div>
    <button class="btn btn-sm btn-secondary px-2">
      actions.setFieldError、actions.setErrors 設定錯誤回饋
    </button>
  </Form>
</template>

<script setup>
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/items/regex/veeValidate.js'

function onSubmit (values, actions) {
  // 設定一個錯誤
  actions.setFieldError('email', '該信箱已被使用!')
  // 設定多個錯誤
  actions.setErrors({
    // email: '該信箱已被使用!',
    password: '有人已經擁有該密碼'
  })
}
</script>
