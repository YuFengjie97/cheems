<template>
  <div class="selectData">
    selectData:
    <span v-for="i in selectData" :key="`num${i}`">{{ i }}</span>
  </div>
  <div class="con" ref="con">
    <div class="item" v-for="i in 44" :key="i" :data-id="i">
      {{ i }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { SA } from '@/utils/index'
const con = ref()
const selectData = ref('[]')
onMounted(() => {
  let conDom = con.value
  let items = document.querySelectorAll('.con .item')
  const sa = new SA(conDom, items, 'id',() => {
    
  }, () => {
    selectData.value = `[ ${sa.selectData.join(', ')} ]`
  })
})
</script>

<style lang="less" scoped>
@size: 100px;
.selectData {
  padding: 20px 20px;
  font-size: 24px;
}
.con {
  border: 2px solid #000;
  padding: 20px;
  user-select: none;
}
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: @size;
  height: @size;
  margin: 10px;
  border: 4px solid #000;
  font-size: 28px;
  user-select: none;
}
</style>
