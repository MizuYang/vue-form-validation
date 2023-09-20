<template>
  <label for="item1" class="form-label">
    <h3 class="text-18 mb-1">{{ idx }}. {{ name }}</h3>
    <p class="ps-3">{{ content }}</p>
  </label>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps(['idx', 'name', 'content'])
const { idx, name, content } = toRefs(props)
</script>

<style lang='scss' scope>

</style>
