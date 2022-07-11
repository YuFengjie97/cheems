<template>
<div class="con">
  <div ref="imgCon" class="imgCon">
    <img src="@/assets/img/shadow.jpeg"/>
    <canvas ref="canvas"></canvas>
  </div>
</div>
</template>

<script setup>
const { onMounted }=require("vue")


const canvas = ref()
const imgCon = ref()
onMounted(()=>{})

function initCanvas(dom){
  const ctx = dom.getContext('2d')
  setCanvasSize (imgCon.value, ctx)
}

function setCanvasSize (container, ctx) {
  const { width, height } = container.getBoundingClientRect()
  ctx.canvas.width = width
  ctx.canvas.height = height
}
</script>

<style lang="less" scoped>
.con{
  height: 100%;
  .imgCon{
    height: fit-content;
  }
  img{
    object-fit: cover;
  }
}
</style>