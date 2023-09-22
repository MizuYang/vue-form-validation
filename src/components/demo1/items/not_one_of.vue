<template>
  <VForm v-slot="{ errors }" class="mb-2" style="padding: 0 15px;">
    <VField
      class="form-control"
      :id="`item${idx}-1`"
      name="輸入框1"
      type="text"
      rules="not_one_of:你,我,他"
      :placeholder="placeholder"
      maxlength="1"
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
      rules="not_one_of:1,2,3"
      placeholder="不能輸入 1, 2, 3"
      maxlength="1"
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
