<template>
  <div class="con">
    <div class="canvasCon" ref="canvasCon">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const canvasCon = ref()
const canvas = ref()
let ctx = null
let size = 0

const date = new Date()
let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
setInterval(() => {
  const date = new Date()
  sec = date.getSeconds()
  min = (date.getMinutes() + sec / 60).toFixed(1)
  hour = ((date.getHours() % 12) + min / 60).toFixed(1)
  ctx.clearRect(-size / 2, -size / 2, size, size)
  draw()
}, 1000)

onMounted(() => {
  initCanvase()
})
window.addEventListener('resize', () => {
  initCanvase()
})

function initCanvase() {
  const { width, height } = canvasCon.value.getBoundingClientRect()
  size = Math.min(width, height)
  ctx = canvas.value.getContext('2d')
  ctx.canvas.width = size
  ctx.canvas.height = size
  ctx.translate(size / 2, size / 2)
}

function draw() {
  drawSecond()
  drawMinute()
  drawHour()
  drawScale()
  drawClock()
}

function drawClock() {
  ctx.beginPath()
  ctx.strokeStyle = '#fff'
  ctx.arc(0, 0, size / 2 - 10, 0, Math.PI * 2)
  ctx.lineWidth = 10
  ctx.stroke()

  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.arc(0, 0, 10, 0, Math.PI * 2)
  ctx.fill()
}

function drawSecond() {
  ctx.save()
  ctx.rotate(-Math.PI / 2)
  ctx.rotate(((Math.PI * 2) / 60) * sec)
  ctx.fillStyle = 'red'
  ctx.fillRect(0, -2, size / 2 - 60, 4)
  ctx.restore()
}

function drawMinute() {
  ctx.save()
  ctx.rotate(-Math.PI / 2)
  ctx.rotate(((Math.PI * 2) / 60) * min)
  ctx.fillStyle = 'blue'
  ctx.fillRect(0, -5, size / 3 - 60, 10)
  ctx.restore()
}

function drawHour() {
  ctx.save()
  ctx.rotate(-Math.PI / 2)
  ctx.rotate(((Math.PI * 2) / 12) * hour)
  ctx.fillStyle = 'yellow'
  ctx.fillRect(0, -8, size / 4 - 60, 16)
  ctx.restore()
}

function drawScale() {
  ctx.save()
  ctx.rotate(-Math.PI / 2)
  ctx.fillStyle = '#fff'
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) {
      ctx.fillRect(size / 2 - 40 - 10, -5, 40, 10)
    } else {
      ctx.fillRect(size / 2 - 20 - 10, -3, 20, 6)
    }
    ctx.rotate((Math.PI * 2) / 60)
  }
  ctx.restore()
}

function animate() {
  ctx.clearRect(-size / 2, -size / 2, size, size)
  drawHour()
  drawMinute()
  drawSecond()

  drawClock()
  window.requestAnimationFrame(animate)
}
</script>

<style lang="less" scoped>
.con {
  height: 100%;
  text-align: center;
  background: #000;
}
.canvasCon {
  height: 100%;
}
canvas {
  margin: 0 auto;
}
</style>
