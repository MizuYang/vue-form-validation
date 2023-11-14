<template>
  <nav class="position-sticky top-0 z100 w-100 p-3"
       style="background-color:#ededed;">
    <ul class="d-flex">
      <li v-for="item in routerLink" :key="item.name"
          class="me-2">
        <RouterLink :to="item.path"
                    class="text-dark btn-hover p-2"
                    active-class="active">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>

  <main class="container p-3">
    <RouterView />
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
    path: '/taiwanIdValidator',
    name: 'TaiwanIdValidator'
  }
])
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>

<style lang="scss" scoped>
.active {
  color: #fff !important;
  background-color: rgb(152 147 236);

}
.btn-hover:hover {
  color: #fff !important;
  background-color: rgb(179 176 226);
}
</style>
