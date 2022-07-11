<template>
  <div class="con" ref="con">
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
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import AudioControl from '@/components/audioControl/index.vue'
import { Rect, colors, random, AudioAnalyser, getMaxAndAvg } from '@/utils'
import { onMounted, ref } from 'vue'
import mp3 from '@/assets/audio/audio1.mp3'
import { ElLoading } from 'element-plus'

let aa = null
let isPlaying = false
const audio = ref()
const fftSize = 512

let ctx = null
const con = ref()
const canvas = ref()
let canvasWidth = 0
let canvasHeight = 0
const rectNum = parseInt(fftSize / 2) // 完整取样
let coe = 0
const gap = 1
const rects = []

onMounted(() => {
  const loading = ElLoading.service({ fullscreen: true })
  audio.value.src = mp3
  audio.value.addEventListener('canplay', () => {
    loading.close()
  })
  initCanvas()
  createRect()
  updateRect()
})

function initCanvas() {
  const { width, height } = con.value.getBoundingClientRect()
  coe = height / 255 
  canvasWidth = width
  canvasHeight = height
  ctx = canvas.value.getContext('2d')
  ctx.canvas.width = width
  ctx.canvas.height = height
  ctx.rotate(Math.PI)
  ctx.translate(-canvasWidth, -canvasHeight)
}

function createRect() {
  const width = (canvasWidth - gap * (rectNum - 1)) / rectNum

  for (let i = 0; i < rectNum; i++) {
    let x = (width + gap) * i
    const fillStyle = random(colors)
    const rect = new Rect(ctx, x, 0, width, 0, fillStyle)
    rects.push(rect)
  }
}

function updateRect() {
  if (!isPlaying) return
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)
  const audioData = aa.getAudioData()
  const { avg, max } = getMaxAndAvg(audioData)
  rects.forEach((item, i) => {
    item.height = audioData[i] * coe
    item.fillStyle = `
      hsl(${parseInt((audioData[i] / max) * 360 + avg)},
      ${parseInt(audioData[i] / avg) * 100 + '%'},
      50%)`
    item.draw()
  })
  window.requestAnimationFrame(updateRect)
}

function handlePlay() {
  isPlaying = true
  audio.value.play()
  if (!aa) {
    aa = new AudioAnalyser(audio.value, fftSize)
  }
  updateRect()
}
function handlePause() {
  isPlaying = false
  audio.value.pause()
}
</script>

<style lang="less" scoped>
canvas {
  // border: 1px solid #000;
}
.con {
  position: relative;
  height: 100%;
}
.audioControl {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
