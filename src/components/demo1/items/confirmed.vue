<template>
  <Form v-slot="{ errors }" style="padding: 0 15px;">
    <Field
      :id="`item${idx}`"
      name="password"
      :type="isPasswordShow?'text':'password'"
      class="form-control"
      placeHolder="輸入密碼" />
    <Field
      class="form-control"
      name="輸入框"
      :type="isPasswordShow?'text':'password'"
      rules="confirmed:@password"
      :placeholder="placeholder"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="輸入框"/>
    </i>
    <button type="button"
            class="btn mt-1 px-2 py-1"
            :class="isPasswordShow?'btn-secondary':'btn-primary'"
            @click="isPasswordShow=!isPasswordShow">
      {{ isPasswordShow?'隱藏':'顯示' }}密碼
    </button>
  </Form>
</template>

<script setup>
import { reactive, toRefs, defineProps } from 'vue'
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/items/confirmed/veeValidate.js'

const props = defineProps(['idx', 'placeholder'])
const { idx, placeholder } = toRefs(props)

const states = reactive({
  isPasswordShow: false
})
const { isPasswordShow } = toRefs(states)
</script>

<style lang='scss' scope>

</style>
