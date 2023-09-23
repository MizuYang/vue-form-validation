<template>
  <header>
    <h2 class="text-20">Taiwan-id-validator</h2>
  </header>

  <form class="mt-3">
   <!-- 中文姓名 -->
   <ChineseName />

   <!-- 英文姓名 -->
   <EnglishName />

   <!-- 身分證字號 -->
   <IdentityCard />

   <!-- 手機載具 -->
   <MobileCarrier />

   <!-- 生日 -->
   <Birthday />

   <!-- 信箱 -->
   <Email />

   <!-- 手機號碼 -->
   <PhoneNumber />

   <!-- 選擇縣市 -->
   <SelectCity />
  </form>
</template>

<script setup>
import ChineseName from '@/components/taiwanIdValidator/ChineseName.vue'
import EnglishName from '@/components/taiwanIdValidator/EnglishName.vue'
import IdentityCard from '@/components/taiwanIdValidator/IdentityCard.vue'
import MobileCarrier from '@/components/taiwanIdValidator/MobileCarrier.vue'
import Birthday from '@/components/taiwanIdValidator/Birthday.vue'
import Email from '@/components/taiwanIdValidator/Email.vue'
import PhoneNumber from '@/components/taiwanIdValidator/PhoneNumber.vue'
import SelectCity from '@/components/taiwanIdValidator/SelectCity.vue'

</script>

<style lang='scss' scope>

</style>
