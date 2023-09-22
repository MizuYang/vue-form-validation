<template>
  <Form class="mx-3" @submit="submit">
    <Field name="信箱" label="信箱"
           class="form-control"
           id="aa"
           rules="required|email" />
    <ErrorMessage name="信箱" />

    <br />

    <button class="btn btn-secondary mt-1 px-2 py-1">
      驗證
    </button>
  </Form>

  <!-- toast -->
  {{ toastData }}
  <div class="toast-container position-fixed z100 p-3" style="top:150px;right:5px;">
    <div id="liveToast" class="toast raduis-5 show"
        role="alert" aria-live="assertive" aria-atomic="true"
        v-for="{content} in toastData" :key="`toast-${content}`"
        style="min-width:200px;">
      <div class="toast-header word-break-all raduis-5 toast-border-start pe-0"
          style="border-bottom: none;">
          {{ content }}
        <button type="button" class="btn ms-auto me-3 p-4" data-bs-dismiss="toast" aria-label="Close">
          <span class="d-block btn-cross"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Field,
  Form,
  ErrorMessage
} from '@/composables/demo1/items/ext/veeValidate.js'
import { configure } from 'vee-validate'

const toastData = ref([])
configure({
  validateOnBlur: true,
  generateMessage: context => {
    console.log(context)
    // 將此處訊息傳到 toast 中 ( toast.push(ErrorMessage) )
    const ErrorMessage = `您的 ${context.field} 是必填選項`

    const id = Date.now()
    toastData.value.push({ content: ErrorMessage, id })
    setTimeout(() => {
      removeToast(id)
    }, 2500)
    return ErrorMessage
  }
})
function removeToast (id) {
  const removeIdx = toastData.value.findIndex(item => item.id === id)
  toastData.value.splice(removeIdx, 1)
}
function submit () {}
</script>

<style lang='scss' scope>

</style>
