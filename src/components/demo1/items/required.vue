<template>
  <VForm v-slot="{ errors }" class="mb-2" style="padding: 0 15px;">
    <VField
      class="form-control"
      :id="`item${idx}`-1"
      name="輸入框1"
      type="text"
      rules="required"
      :placeholder="placeholder"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="輸入框1"/>
    </i>
    <VField
      class="form-control"
      :id="`item${idx}-2`"
      name="輸入框2"
      type="text"
      rules="numeric|required"
      placeholder="(必填) 請輸入數字 rules='numeric|required'"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="輸入框2"/>
    </i>
  </VForm>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps(['idx', 'placeholder'])
const { idx, placeholder } = toRefs(props)
</script>

<style lang='scss' scope>

</style>
