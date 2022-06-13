<template>
  <div class="home">
    <LeftNav />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import LeftNav from '@/components/leftNav/index.vue'

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  .main {
    flex: 1;
  }
}
</style>
