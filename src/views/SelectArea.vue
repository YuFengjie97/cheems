<template>
  <div class="con" ref="con">
    <div class="item" v-for="i in 40" :key="i">
      {{ i }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const con = ref()
onMounted(() => {
  console.log(con.value)
  con.value.addEventListener('click', () => {
    console.log('click')
  })
})
</script>

<style lang="less" scoped>
@size: 100px;
.con {
  border: 2px solid red;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.item {
  width: @size;
  height: @size;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  user-select: none;
  // margin: 10px;
}
</style>
