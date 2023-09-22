<template>
  <VForm v-slot="{ errors }" style="padding: 0 15px;">
    <VField
      class="form-control"
      :id="`item${idx}`"
      name="輸入框"
      type="text"
      rules="alpha_dash"
      :placeholder="placeholder"
    />
    <!-- 錯誤回饋 -->
    <i class="text-danger text-14 ps-1"
       :class="{'d-none':!Object.keys(errors).length}">
      <ErrorMessage name="輸入框"/>
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
