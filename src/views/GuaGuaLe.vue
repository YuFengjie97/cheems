<template>
  <div class="con">
    <div ref="imgCon" class="imgCon">
      <img src="@/assets/img/kamenRider.jpeg" />
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let ctx = null
const canvas = ref()
let canvasWidth = 0
let canvasHeight = 0
const imgCon = ref()

let mouseDown = false
let mouse = {
  x: 0,
  y: 0,
}

onMounted(() => {
  setTimeout(() => {
    ctx = initCanvas(canvas.value)
    const { width, height } = setCanvasSize(imgCon.value, ctx)
    canvasHeight = height
    canvasWidth = width
    text(ctx)
    animate()
  }, 1)

  canvas.value.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e
    mouse.x = offsetX
    mouse.y = offsetY
  })
  canvas.value.addEventListener('mousedown', () => {
    mouseDown = true
  })
  canvas.value.addEventListener('mouseup', () => {
    mouseDown = false
  })
  canvas.value.addEventListener('mouseout', () => {
    mouseDown = false
  })
})

function initCanvas(canvas) {
  const ctx = canvas.getContext('2d')
  return ctx
}

function setCanvasSize(container, ctx) {
  let { width, height } = container.getBoundingClientRect()
  width = parseInt(width)
  height = parseInt(height)
  ctx.canvas.width = width
  ctx.canvas.height = height
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, width, height)
  return { width, height }
}

function text(ctx) {
  ctx.font = '48px 微软雅黑'
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('刮刮乐', canvasWidth / 2, canvasHeight / 2 - 24)
}

function draw() {
  if (!mouseDown) return
  ctx.beginPath()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.fillStyle = '#fff'
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2)
  ctx.fill()
}

function animate() {
  draw()
  window.requestAnimationFrame(animate)
}
</script>

<style lang="less" scoped>
.con {
  height: 100%;
  .imgCon {
    width: 100%;
    height: fit-content;
    position: relative;
  }
  img {
    width: 100%;
    // object-fit: cover;
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
