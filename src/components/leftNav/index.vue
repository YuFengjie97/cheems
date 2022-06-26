<template>
  <el-menu router default-active="/cheems/" class="el-menu-vertical-demo">
    <el-menu-item
      v-for="(item, index) in navList"
      :key="index"
      :index="`/${item.path}`"
    >
      <template #title>
        {{ item.meta.title }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { routes } from '../../routes'
const navList = ref([])
navList.value = routes[0].children.slice(0).map(item=>{
  return {
    path: 'cheems/'+item.path,
    meta: item.meta
  }
})
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
