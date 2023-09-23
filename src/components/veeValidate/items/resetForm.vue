<template>
  <VForm class="mb-2"
         v-slot="{ errors, values, resetForm, validate }"
         @submit="onSubmit"
         style="padding: 0 15px;">
        <template>{{errors}}{{values}}</template>

    <!-- radio -->
    <section class="my-2">
      <VField type="radio"
              class="form-check-input"
              :class="[{
                        'is-invalid': errors['要喝的飲料'],
                        'is-valid': form.drinkRadio&&!errors['要喝的飲料']
                      }]"
              id="紅茶"
              name="要喝的飲料"
              rules="required"
              value="紅茶"
              v-model="form.drinkRadio" required></VField>
      <label for="紅茶" class="form-label form-check-label mb-0 ms-1 me-2">紅茶</label>
      <VField type="radio"
              class="form-check-input"
              :class="[{
                        'is-invalid': errors['要喝的飲料'],
                        'is-valid': form.drinkRadio&&!errors['要喝的飲料']
                      }]"
              id="綠茶"
              name="要喝的飲料"
              rules="required"
              value="綠茶"
              v-model="form.drinkRadio"></VField>
      <label for="綠茶" class="form-label form-check-label mb-0 ms-1 me-2">綠茶</label>
      <VField type="radio"
              class="form-check-input"
              :class="[{
                        'is-invalid': errors['要喝的飲料'],
                        'is-valid': form.drinkRadio&&!errors['要喝的飲料']
                      }]"
              id="奶茶"
              name="要喝的飲料"
              rules="required"
              value="奶茶"
              v-model="form.drinkRadio"></VField>
      <label for="奶茶" class="form-label form-check-label mb-0 ms-1 me-2">奶茶</label>
      <ErrorMessage name="要喝的飲料" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- checkbox -->
    <section class="my-2">
      <VField type="checkbox"
              class="form-check-input"
              :class="[{
                        'is-invalid': errors['要買的飲料'],
                        'is-valid': form.drinkCheckbox.length&&!errors['要買的飲料']
                      }]"
              id="水"
              name="要買的飲料"
              rules="required"
              value="水"
              v-model="form.drinkCheckbox"></VField>
      <label for="水" class="form-label form-check-label mb-0 ms-1 me-2">水</label>
      <VField type="checkbox"
              class="form-check-input"
              :class="[{
                        'is-invalid': errors['要買的飲料'],
                        'is-valid': form.drinkCheckbox.length&&!errors['要買的飲料']
                      }]"
              id="珍珠奶茶"
              name="要買的飲料"
              rules="required"
              value="珍珠奶茶"
              v-model="form.drinkCheckbox"></VField>
      <label for="珍珠奶茶" class="form-label form-check-label mb-0 ms-1 me-2">珍珠奶茶</label>
      <VField type="checkbox"
              class="form-check-input"
              :class="[{
                        'is-invalid': errors['要買的飲料'],
                        'is-valid': form.drinkCheckbox.length&&!errors['要買的飲料']
                      }]"
              id="氣泡飲"
              name="要買的飲料"
              rules="required"
              value="氣泡飲"
              v-model="form.drinkCheckbox"></VField>
      <label for="氣泡飲" class="form-label form-check-label mb-0 ms-1 me-2">氣泡飲</label>
      <ErrorMessage name="要買的飲料" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- select -->
    <section class="my-3">
      <VField class="form-select"
             :class="{
                      'is-invalid': errors['選飲料喝'],
                      'is-valid': form.drinkSelect&&!errors['選飲料喝'],
                      'text-darkgray':!form.drinkSelect
                      }"
             name="選飲料喝"
             as="select"
             rules="required"
             v-model="form.drinkSelect">
        <option value="" class="text-gray" selected disabled>請選擇早餐飲料</option>
        <option value="豆漿">豆漿</option>
        <option value="米漿">米漿</option>
      </VField>
      <ErrorMessage name="選飲料喝" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- input -->
    <section>
      <VField
            id="電子信箱"
            name="電子信箱"
            type="email"
            class="form-control"
            :class="{
                     'is-invalid': errors['電子信箱'],
                     'is-valid': form.textValue&&!errors['電子信箱'],
                    }"
            placeholder="請輸入電子信箱"
            rules="email|required"
            v-model="form.textValue"
      ></VField>
      <ErrorMessage name="電子信箱" class="invalid-feedback" />
    </section>

    <!-- textarea -->
    <section class="my-3">
      <VField class="form-control"
             :class="{
                      'is-invalid': errors['喝飲料的心得'],
                      'is-valid': form.textareaValue&&!errors['喝飲料的心得'],
                      }"
             name="喝飲料的心得"
             as="textarea"
             cols="30" rows="5"
             rules="required"
             placeholder="請輸入喝飲料的心得"
             v-model="form.textareaValue">
      </VField>
      <ErrorMessage name="喝飲料的心得" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- file -->
    <section class="my-3">
      <VField type="file"
              class="form-control"
              id="檔案上傳"
              name="檔案上傳"
              :class="{
                       'is-invalid': errors['喝飲料的心得'],
                       'is-valid': form.files&&!errors['喝飲料的心得'],
                      }"
              :rules="{size: 30720,
                       mimes: ['image/jpeg','image/png','image/jpg','image/svg','image/gif'],
                       required: true}"
              @change="(e)=>form.files=e.target.files" />
      <Error-message name="檔案上傳" class="text-danger d-block"></Error-message>
    </section>

    <!-- 測試按鈕 -->
    <section class="mt-2">
      <button class="btn btn-secondary me-1 px-2 py-1">送出</button>
      <button type="button" class="btn btn-secondary me-1 px-2 py-1"
              @click="validate">驗證</button>
      <button type="button" class="btn btn-secondary me-1 px-2 py-1"
              @click="resetForm">重置</button>
      <button type="button" class="btn btn-secondary me-1 px-2 py-1"
              @click="reset(resetForm)">
              將resetForm()傳到自訂的函式,再重置表單的值
      </button>
    </section>

    <br />
    {{ form }}
  </VForm>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  drinkRadio: '',
  drinkCheckbox: '',
  drinkSelect: '',
  textareaValue: '',
  textValue: '',
  files: ''
})

function reset (resetForm) {
  formInit()
  setTimeout(() => {
    resetForm()
  })
}
function onSubmit (values, { resetForm }) {
  console.log(values)
  formInit()
  setTimeout(() => {
    resetForm()
  })
}
// 表單元素初始化
function formInit () {
  form.drinkRadio = ''
  form.drinkCheckbox = []
  form.drinkSelect = ''
  form.textareaValue = ''
  form.textValue = ''
  form.files = ''
  const uploadInput = document.querySelector('#檔案上傳')
  uploadInput.value = ''
}
</script>

<style lang='scss' scope>

</style>
