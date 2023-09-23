<template>
  <nav class="position-sticky top-0 z100 w-100 p-3"
       style="background-color:#ededed;">
    <ul class="d-flex">
      <li v-for="item in routerLink" :key="item.name"
          class="me-2">
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>

  <main class="container p-3">
    <router-view />
  </main>
</template>

<script setup>
import { reactive } from 'vue'
const routerLink = reactive([
  {
    path: '/',
    name: 'VeeValidate'
  },
  {
    path: '/TaiwanIdValidator',
    name: 'TaiwanIdValidator'
  }
])
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
