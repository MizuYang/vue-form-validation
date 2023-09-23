<template>
  <section class="area p-3">
    <label for="中文姓名" class="form-label text-20">
      中文姓名
      <input type="text" class="form-control" id="中文姓名" @change="checkValue">
    </label>
    <p>驗證失敗!</p>
  </section>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const { dispatch } = store // eslint-disable-line

function checkValue (e) {
  const value = e.target.value
  const reg = /^[\u4e00-\u9fa5]{0,}$/
  const result = reg.test(value)

  console.log(result)
  console.log(value)
}
</script>

<style lang='scss' scope>

</style>
