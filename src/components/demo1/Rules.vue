<template>
  <p class="bg-dark mb-3 mx-3 my-1 ps-3 py-1">
    <code style="color:#fff !important">{{ rules }}</code>
  </p>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps(['rules'])
const { rules } = toRefs(props)
</script>

<style lang='scss' scope>

</style>
