<template>
  <!-- 手機條碼 -->
  <section class="area p-3">
    <label for="中文姓名" class="form-label text-20">
      {{ item.name }}
      <input type="text"
             class="form-control"
             :class="{
              'is-valid': item.isValid === 1,
              'is-invalid': item.isValid === 2,
             }"
             id="中文姓名"
             @[validateEvent]="$emit('validateRules', $event,'手機條碼')"
             :placeholder="item.placeHolder">
    </label>
  </section>
</template>

<script setup>
import { toRefs, defineProps, defineEmits } from 'vue'

// props, emit
const props = defineProps(['item', 'validateEvent'])
const { item, validateEvent } = toRefs(props)
defineEmits(['validateRules'])
</script>

<style lang='scss' scope>

</style>
