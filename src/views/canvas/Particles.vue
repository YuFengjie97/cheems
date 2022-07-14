<template>
  <div ref="con" class="con">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const con = ref()
const canvas = ref()
let ctx = null
let canvasWidth = 0
let canvasHeight = 0
onMounted(() => {
  ctx = canvas.value.getContext('2d')
  const { width, height } = con.value.getBoundingClientRect()
  console.log(width, height);
  canvasWidth = width
  canvasHeight = height
  ctx.canvas.width = canvasWidth
  ctx.canvas.height = canvasHeight
  ctx.translate(canvasWidth / 2, canvasHeight / 2)
  animate()
})

function animate(){
  ctx.fillStyle = '#000'
  ctx.fillRect(-canvasWidth/2,-canvasHeight/2,canvasWidth,canvasHeight)
  createCircle()
  window.requestAnimationFrame(animate)
}

function createCircle () {
  let circleNum = 1
  for(let i=0;i<circleNum;i++){
    let circle = new Circle(0,0,50,'red')
    circle.draw()
  }
}

function Circle(x, y, r, fillStyle) {
  this.x = x
  this.y = y
  this.r = r
  this.fillStyle = fillStyle
}
Circle.prototype.draw = function () {
  ctx.beginPath()
  ctx.fillStyle = this.fillStyle
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
  ctx.fill()
}
</script>

<style lang="less" scoped>
.con {
  height: 100%;
}
</style>
