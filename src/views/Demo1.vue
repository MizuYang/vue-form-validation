<template>

  <main>
    <section class="area mb-2 p-3">
      <p>局部匯入</p>
      <Form></Form>
    </section>

    <!-- 信箱驗證 -->
    <section class="area mb-2 p-3">
      <label for="item1" class="form-label">信箱驗證</label>
      <Item1></Item1>
    </section>

  </main>
</template>

<script setup>
import Form from '@/components/Form.vue'
import Item1 from '@/components/demo1/items/Item1.vue'

</script>
<style lang='scss' scope>

</style>
