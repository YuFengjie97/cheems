<template>
  <div class="w-40 h-screen flex-col">
    <router-link
      :to="item.path"
      v-for="(item, i) in navList"
      :key="i"
      class="block p-2 m-1 rounded-md bg-black transition-background duration-300 text-white text-center"
    >
      {{ item.meta.title }}
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { routes } from '../../routes'

const navList = ref(routes[0].children.slice(0))
</script>

<style lang="less" scoped></style>
