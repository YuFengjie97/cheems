<template>
  <div class="home">
    <LeftNav />
    <div class="main" ref="main">
      <div class="card">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftNav from '@/components/leftNav/index.vue'
import { onMounted, ref } from 'vue'
import {useStore} from '@/store'

const store = useStore()

const main = ref()
onMounted(()=>{
  console.log('main mounted');
  setMainHeight()
  // window.addEventListener('resize', function () {
  //   setMainHeight()
  // })
})
function setMainHeight () {
  store.mainHeight = main.value.getBoundingClientRect().height
}

</script>

<style lang="less" scoped>
.home {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  .main {
    flex: 1;
    padding: 10px;
    background: rgb(243, 253, 253);
  }
  .card{
    height: 100%;
    border-radius: 10px;
    border: 1px solid #eee;
    background: #fff;
    padding: 10px;
  }
}
</style>
