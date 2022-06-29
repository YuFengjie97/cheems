<template>
  <div class="con">
    <AudioControl
      class="audioControl"
      :showStop="false"
      :showForward="false"
      :showBackward="false"
      @play="handlePlay"
      @pause="handlePause"
    />
    <audio ref="audio" crossOrigin="anonymous">
      神圣的屎 Your suck browser does not support the
      <code>audio</code> element.
    </audio>
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script setup>
import AudioControl from '@/components/audioControl/index.vue'
import { Rect, colors, random, AudioAnalyser } from '@/utils'
import { onMounted, ref } from 'vue'
import mp3 from '@/assets/audio/circles.mp3'

let aa = null

let ctx = null
const audio = ref()
const canvas = ref()
const canvasWidth = ref(window.innerWidth - 220)
const canvasHeight = ref(window.innerHeight - 50)
const rectNum = 256 // 为fftSize的一半
const shrinkCoe = 0.3 // 缩小系数
const gap = 1
const rects = []

onMounted(() => {
  audio.value.src = mp3

  ctx = canvas.value.getContext('2d')
  createRect(ctx)
})

function createRect(ctx) {
  const width = (canvasWidth.value - gap * (rectNum - 1)) / rectNum
  for (let i = 0; i < rectNum; i++) {
    let x = (width + gap) * i
    const fillStyle = random(colors)
    const rect = new Rect(ctx, x, 200, width, 0, fillStyle)
    rects.push(rect)
  }
}

function updateRect() {
  // ctx.clearRect(0,0,canvasWidth.value,canvasHeight.value)
  ctx.fillStyle = '#2d3436'
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
  let audioData = aa.getAudioData()
  rects.forEach((item, i) => {
    item.height = audioData[i]
    item.draw()
  })
  window.requestAnimationFrame(updateRect)
}

function handlePlay() {
  audio.value.play()
  aa = new AudioAnalyser(audio.value)
  updateRect()
}
function handlePause() {
  audio.value.pause()
}
</script>

<style lang="less" scoped>
canvas {
  // border: 1px solid #000;
}
.con {
  position: relative;
}
.audioControl {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
