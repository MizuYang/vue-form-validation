<template>
  <VForm class="mb-2"
        v-slot="{ errors, values, resetForm, validate }"
        @submit="onSubmit"
        style="padding: 0 15px;">
        <template>{{errors}}{{values}}</template>

    <!-- radio -->
    <section class="my-2">
      <VField type="radio"
             :class="{ 'is-invalid': errors['要喝的飲料'] }"
             id="紅茶"
             name="要喝的飲料"
             rules="required"
             value="紅茶"
             v-model="form.drinkRadio"></VField>
      <label for="紅茶" class="form-label mb-0 ms-1 me-2">紅茶</label>
      <VField type="radio"
             :class="{ 'is-invalid': errors['要喝的飲料'] }"
             id="綠茶"
             name="要喝的飲料"
             rules="required"
             value="綠茶"
             v-model="form.drinkRadio"></VField>
      <label for="綠茶" class="form-label mb-0 ms-1 me-2">綠茶</label>
      <VField type="radio"
             :class="{ 'is-invalid': errors['要喝的飲料'] }"
             id="奶茶"
             name="要喝的飲料"
             rules="required"
             value="奶茶"
             v-model="form.drinkRadio"></VField>
      <label for="奶茶" class="form-label mb-0 ms-1 me-2">奶茶</label>
      <ErrorMessage name="要喝的飲料" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- checkbox -->
    <section class="my-2">
      <VField type="checkbox"
             :class="{ 'is-invalid': errors['要買的飲料'] }"
             id="水"
             name="要買的飲料"
             rules="required"
             value="水"
             v-model="form.drinkCheckbox"></VField>
      <label for="水" class="form-label mb-0 ms-1 me-2">水</label>
      <VField type="checkbox"
             :class="{ 'is-invalid': errors['要買的飲料'] }"
             id="珍珠奶茶"
             name="要買的飲料"
             rules="required"
             value="珍珠奶茶"
             v-model="form.drinkCheckbox"></VField>
      <label for="珍珠奶茶" class="form-label mb-0 ms-1 me-2">珍珠奶茶</label>
      <VField type="checkbox"
             :class="{ 'is-invalid': errors['要買的飲料'] }"
             id="氣泡飲"
             name="要買的飲料"
             rules="required"
             value="氣泡飲"
             v-model="form.drinkCheckbox"></VField>
      <label for="氣泡飲" class="form-label mb-0 ms-1 me-2">氣泡飲</label>
      <ErrorMessage name="要買的飲料" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- select -->
    <section class="my-3">
      <VField class="form-select"
             :class="{
                      'is-invalid':errors['選飲料喝'],
                      'text-darkgray':!form.drinkSelect
                      }"
             name="選飲料喝"
             as="select"
             rules="required"
             v-model="form.drinkSelect">
        <option value="" class="text-gray" selected disabled>選飲料</option>
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
            :class="{ 'is-invalid': errors['電子信箱'] }"
            placeholder="請輸入電子信箱"
            rules="email|required"
            v-model="form.textValue"
      ></VField>
      <ErrorMessage name="電子信箱" class="invalid-feedback" />
    </section>

    <!-- textarea -->
    <section class="my-3">
      <VField class="form-control"
             :class="{ 'is-invalid': errors['喝飲料的心得'] }"
             name="喝飲料的心得"
             as="textarea"
             cols="30" rows="5"
             rules="required"
             v-model="form.textareaValue">
      </VField>
      <ErrorMessage name="喝飲料的心得" class="invalid-feedback"></ErrorMessage>
    </section>

    <!-- file -->
    <section>
      <VField type="file"
             id="檔案上傳"
             name="檔案上傳"
             :class="{ err: errors['檔案上傳'] }"
             :rules="{size: 30720,
                     mimes: ['image/jpeg','image/png','image/jpg','image/svg','image/gif'],
                     required: true}" />
      <Error-message name="檔案上傳" class="text-danger d-block"></Error-message>
    </section>

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
import { ref, reactive, toRefs, defineProps } from 'vue' // eslint-disable-line
import { useForm, useField } from 'vee-validate'  // eslint-disable-line

const form = reactive({
  drinkRadio: '',
  drinkCheckbox: '',
  drinkSelect: '',
  textareaValue: '',
  textValue: ''
})

function reset (resetForm) {
  console.log('這裡可以處理自己要的邏輯')
  resetForm()
  console.log('重置完畢')
  form.drinkRadio = ''
  form.drinkCheckbox = ''
  form.drinkSelect = ''
  form.textareaValue = ''
  form.textValue = ''
}
function onSubmit (values, { resetForm }) {
  console.log(values)
  resetForm()
  form.drinkRadio = ''
  form.drinkCheckbox = ''
  form.drinkSelect = ''
  form.textareaValue = ''
  form.textValue = ''
}
</script>

<style lang='scss' scope>

</style>
