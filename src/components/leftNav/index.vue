<template>
  <el-menu
    :collapse="collapse"
    router
    default-active="/cheems/wdnmd"
    class="el-menu-vertical-demo"
  >
    <el-icon v-if="collapse" class="expand" @click="toggleCollapse(false)"><Expand /></el-icon>
    <el-icon v-else class="expand" @click="toggleCollapse(true)"><Fold /></el-icon>
    <el-menu-item
      v-for="(item, index) in navList"
      :key="index"
      :index="`/${item.path}`"
    >
      <el-icon><IceTea /></el-icon>
      <template #title>
        {{ item.meta.title }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { routes } from '../../routes'
import { Expand, Fold, IceTea } from '@element-plus/icons-vue'
const navList = ref([])
navList.value = routes[0].children.slice(0).map((item) => {
  return {
    path: 'cheems/' + item.path,
    meta: item.meta,
  }
})

const collapse = ref(true)
function toggleCollapse(val) {
  collapse.value = val
}
</script>

<style lang="less" scoped>
.expand {
  width: 100%;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
  svg{
    margin-left: auto;
    margin-right: 20px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
