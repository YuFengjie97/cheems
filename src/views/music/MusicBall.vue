<template>
  <div class="con">
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script setup>
import { Circle, colors, random } from '@/utils'
import { onMounted, ref } from 'vue'
let ctx = null
const canvas = ref()
const canvasWidth = ref(window.innerWidth - 220)
const canvasHeight = ref(window.innerHeight - 50)
const circleNum = 100
const rMin = 10
const rMax = 50
const rInc = 0.8

const circles = []

function createCircle(ctx) {
  for (let i = 0; i < circleNum; i++) {
    const r = random(rMin, rMax)
    const x = random(0, canvasWidth.value)
    const y = random(0, canvasHeight.value)
    const fillStyle = random(colors)
    const circle = new Circle(ctx, x, y, r, fillStyle)
    circles.push(circle)
  }
}

function updateCircle() {
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
  circles.forEach((c) => {
    if (c.isGrow) {
      c.r += rInc
      if (c.r > rMax) c.isGrow = false
    } else {
      c.r -= rInc
      if (c.r < rMin) c.isGrow = true
    }

    c.draw()
  })
  window.requestAnimationFrame(updateCircle)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  createCircle(ctx)
  updateCircle()
})
</script>

<style lang="less" scoped>
canvas {
  // border: 1px solid #000;
}
.con {
}
</style>
