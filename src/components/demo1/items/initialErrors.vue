<template>
  <VForm v-slot="{ setFieldError, setErrors }"
        class="mx-3"
        @submit="onSubmit">
    <VField class="form-control" name="email" id="email" />
    <ErrorMessage name="email" />
    <br />
    <VField class="form-control" name="password" id="password" />
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
    <div class="d-flex align-items-center mb-3">
      <h3>使用 actions.setFieldError、actions.setErrors 設定錯誤回饋：</h3>
      <button class="btn btn-sm btn-secondary px-2">
        設定錯誤
      </button>
    </div>

    <button type="button" class="btn btn-secondary d-block mx-auto px-2 py-1" @click="clearFeedback">
      清除回饋
    </button>
  </VForm>
</template>

<script setup>

function onSubmit (values, actions) {
  // 設定一個錯誤
  actions.setFieldError('email', '該信箱已被使用!')
  // 設定多個錯誤
  actions.setErrors({
    // email: '該信箱已被使用!',
    password: '有人已經擁有該密碼'
  })
}
function clearFeedback () {
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  email.focus()
  email.blur()
  password.focus()
  password.blur()
}
</script>
